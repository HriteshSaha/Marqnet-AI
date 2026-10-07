import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Approval authority (e2e, EP-03-US-03)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  const runId = Date.now();

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
    prisma = moduleFixture.get(PrismaService);
  });

  afterAll(async () => {
    await app.close();
  });

  async function registerUser(suffix: string) {
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: `e2e-approvals-${runId}-${suffix}@example.com`,
        password: 'Password123!',
      })
      .expect(201);
    return {
      token: res.body.accessToken as string,
      id: res.body.user.id as string,
    };
  }

  async function createOrg(token: string, name: string) {
    const res = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .send({ name, type: 'AGENCY' })
      .expect(201);
    return res.body.id as string;
  }

  async function roleIdByName(token: string, orgId: string, name: string) {
    const roles = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    return roles.body.find((r: { name: string }) => r.name === name).id;
  }

  it('seeds a default policy mapping risk levels to Owner/Admin authority, with CRITICAL requiring dual approval', async () => {
    const owner = await registerUser('seed-owner');
    const orgId = await createOrg(owner.token, `Seed Policy Org ${runId}`);

    const policy = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/approvals/policy`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    expect(policy.body.allowSelfApproval).toBe(true);
    const byLevel = Object.fromEntries(
      policy.body.thresholds.map((t: { riskLevel: string }) => [
        t.riskLevel,
        t,
      ]),
    );
    expect(byLevel.CRITICAL.dualApprovalRequired).toBe(true);
    expect(byLevel.LOW.dualApprovalRequired).toBe(false);
  });

  it('a user cannot approve beyond their configured authority (Admin blocked from HIGH, Owner allowed)', async () => {
    const owner = await registerUser('authority-owner');
    const admin = await registerUser('authority-admin');
    const requester = await registerUser('authority-requester');
    const orgId = await createOrg(owner.token, `Authority Org ${runId}`);

    const adminRoleId = await roleIdByName(owner.token, orgId, 'Admin');
    const memberRoleId = await roleIdByName(owner.token, orgId, 'Member');
    await prisma.membership.create({
      data: { userId: admin.id, organizationId: orgId, roleId: adminRoleId },
    });
    await prisma.membership.create({
      data: {
        userId: requester.id,
        organizationId: orgId,
        roleId: memberRoleId,
      },
    });

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${requester.token}`)
      .send({
        riskLevel: 'HIGH',
        actionType: 'client.archive',
        summary: 'Archive a major client',
      })
      .expect(201);

    // Admin is not authorized for HIGH by the default policy.
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${admin.token}`)
      .send({ decision: 'APPROVED' })
      .expect(403);

    // Owner is.
    const decided = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED', comment: 'Looks fine' })
      .expect(201);

    expect(decided.body.status).toBe('APPROVED');
  });

  it('a single rejection immediately closes the request, logged with actor/time/comment', async () => {
    const owner = await registerUser('reject-owner');
    const requester = await registerUser('reject-requester');
    const orgId = await createOrg(owner.token, `Reject Org ${runId}`);
    const memberRoleId = await roleIdByName(owner.token, orgId, 'Member');
    await prisma.membership.create({
      data: {
        userId: requester.id,
        organizationId: orgId,
        roleId: memberRoleId,
      },
    });

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${requester.token}`)
      .send({
        riskLevel: 'LOW',
        actionType: 'client.archive',
        summary: 'Archive a small client',
      })
      .expect(201);

    const decided = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'REJECTED', comment: 'Not yet' })
      .expect(201);

    expect(decided.body.status).toBe('REJECTED');
    const decision = decided.body.decisions[0];
    expect(decision.decision).toBe('REJECTED');
    expect(decision.comment).toBe('Not yet');
    expect(decision.actorUserId).toBe(owner.id);
    expect(decision.createdAt).toBeTruthy();

    // Deciding again on an already-closed request is rejected.
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED' })
      .expect(409);
  });

  it('CRITICAL risk requires two distinct qualifying approvals before the request is approved', async () => {
    const ownerA = await registerUser('critical-owner-a');
    const ownerB = await registerUser('critical-owner-b');
    const requester = await registerUser('critical-requester');
    const orgId = await createOrg(ownerA.token, `Critical Org ${runId}`);

    const ownerRoleId = await roleIdByName(ownerA.token, orgId, 'Owner');
    const memberRoleId = await roleIdByName(ownerA.token, orgId, 'Member');
    await prisma.membership.create({
      data: { userId: ownerB.id, organizationId: orgId, roleId: ownerRoleId },
    });
    await prisma.membership.create({
      data: {
        userId: requester.id,
        organizationId: orgId,
        roleId: memberRoleId,
      },
    });

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${requester.token}`)
      .send({
        riskLevel: 'CRITICAL',
        actionType: 'org.transfer_ownership',
        summary: 'Transfer ownership',
      })
      .expect(201);

    const afterFirst = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${ownerA.token}`)
      .send({ decision: 'APPROVED' })
      .expect(201);
    expect(afterFirst.body.status).toBe('PENDING');

    const afterSecond = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${ownerB.token}`)
      .send({ decision: 'APPROVED' })
      .expect(201);
    expect(afterSecond.body.status).toBe('APPROVED');
  });

  it('the same approver cannot double-count toward dual approval', async () => {
    const owner = await registerUser('double-owner');
    const requester = await registerUser('double-requester');
    const orgId = await createOrg(owner.token, `Double Org ${runId}`);
    const memberRoleId = await roleIdByName(owner.token, orgId, 'Member');
    await prisma.membership.create({
      data: {
        userId: requester.id,
        organizationId: orgId,
        roleId: memberRoleId,
      },
    });

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${requester.token}`)
      .send({
        riskLevel: 'CRITICAL',
        actionType: 'org.transfer_ownership',
        summary: 'Transfer',
      })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED' })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED' })
      .expect(409);
  });

  it('disabling self-approval prevents a requester with sufficient authority from approving their own request', async () => {
    const owner = await registerUser('self-owner');
    const orgId = await createOrg(owner.token, `Self Approve Org ${runId}`);
    const ownerRoleId = await roleIdByName(owner.token, orgId, 'Owner');
    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/approvals/policy`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        allowSelfApproval: false,
        thresholds: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((riskLevel) => ({
          riskLevel,
          dualApprovalRequired: false,
          roleIds: [ownerRoleId],
        })),
      })
      .expect(200);

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        riskLevel: 'LOW',
        actionType: 'client.archive',
        summary: 'Self-requested',
      })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED' })
      .expect(403);
  });

  it('rejects a policy that omits a risk level, and one with a foreign roleId', async () => {
    const owner = await registerUser('invalid-owner');
    const orgId = await createOrg(owner.token, `Invalid Policy Org ${runId}`);
    const otherOrgId = await createOrg(owner.token, `Other Org ${runId}`);
    const foreignRoleId = await roleIdByName(owner.token, otherOrgId, 'Owner');

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/approvals/policy`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        allowSelfApproval: true,
        thresholds: ['LOW', 'MEDIUM', 'HIGH'].map((riskLevel) => ({
          riskLevel,
          dualApprovalRequired: false,
          roleIds: [],
        })),
      })
      .expect(400);

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/approvals/policy`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        allowSelfApproval: true,
        thresholds: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((riskLevel) => ({
          riskLevel,
          dualApprovalRequired: false,
          roleIds: [foreignRoleId],
        })),
      })
      .expect(400);
  });

  it('a Member can create an approval request but cannot decide or edit policy', async () => {
    const owner = await registerUser('member-perm-owner');
    const staffer = await registerUser('member-perm-staffer');
    const orgId = await createOrg(owner.token, `Member Perm Org ${runId}`);
    const memberRoleId = await roleIdByName(owner.token, orgId, 'Member');
    await prisma.membership.create({
      data: { userId: staffer.id, organizationId: orgId, roleId: memberRoleId },
    });

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({
        riskLevel: 'LOW',
        actionType: 'client.archive',
        summary: 'Requested by staffer',
      })
      .expect(201);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${req.body.id}/decisions`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ decision: 'APPROVED' })
      .expect(403);

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/approvals/policy`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({
        allowSelfApproval: true,
        thresholds: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].map((riskLevel) => ({
          riskLevel,
          dualApprovalRequired: false,
          roleIds: [],
        })),
      })
      .expect(403);
  });

  it('does not leak approval requests across tenants (404 for a non-member)', async () => {
    const owner = await registerUser('iso-owner');
    const outsider = await registerUser('iso-outsider');
    const orgId = await createOrg(owner.token, `Iso Approvals Org ${runId}`);

    const req = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        riskLevel: 'LOW',
        actionType: 'client.archive',
        summary: 'isolation test',
      })
      .expect(201);

    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/approvals/${req.body.id}`)
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);
  });
});
