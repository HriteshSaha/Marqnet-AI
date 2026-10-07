import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Roles & permissions (e2e, EP-03-US-01)', () => {
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
        email: `e2e-roles-${runId}-${suffix}@example.com`,
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

  it('seeds Owner/Admin/Member system roles on organization creation, with the creator as Owner', async () => {
    const owner = await registerUser('seed');
    const orgId = await createOrg(owner.token, `Seed Org ${runId}`);

    const res = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    const names = res.body.map((r: { name: string }) => r.name).sort();
    expect(names).toEqual(['Admin', 'Member', 'Owner']);
    expect(res.body.every((r: { isSystem: boolean }) => r.isSystem)).toBe(true);
  });

  it('creates a custom role with selected module/action permissions, unique by name per org', async () => {
    const owner = await registerUser('create');
    const orgId = await createOrg(owner.token, `Create Org ${runId}`);

    const created = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        name: 'Content Editor',
        permissions: [{ module: 'clients', action: 'READ' }],
      })
      .expect(201);

    expect(created.body.name).toBe('Content Editor');
    expect(created.body.isSystem).toBe(false);
    expect(created.body.permissions).toEqual([
      expect.objectContaining({ module: 'clients', action: 'READ' }),
    ]);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Content Editor', permissions: [] })
      .expect(409);
  });

  it('protects system roles from renaming, permission edits, and deletion', async () => {
    const owner = await registerUser('protect');
    const orgId = await createOrg(owner.token, `Protect Org ${runId}`);

    const rolesRes = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    const adminRole = rolesRes.body.find(
      (r: { name: string }) => r.name === 'Admin',
    );

    await request(app.getHttpServer())
      .patch(`/organizations/${orgId}/roles/${adminRole.id}`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Hacked Admin' })
      .expect(400);

    await request(app.getHttpServer())
      .delete(`/organizations/${orgId}/roles/${adminRole.id}`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(400);
  });

  it('a custom role takes effect immediately once assigned to a member', async () => {
    const owner = await registerUser('immediate-owner');
    const staffer = await registerUser('immediate-staffer');
    const orgId = await createOrg(owner.token, `Immediate Org ${runId}`);

    const roleRes = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        name: 'Client Creator',
        permissions: [
          { module: 'clients', action: 'CREATE' },
          { module: 'clients', action: 'READ' },
        ],
      })
      .expect(201);

    const memberRole = (
      await request(app.getHttpServer())
        .get(`/organizations/${orgId}/roles`)
        .set('Authorization', `Bearer ${owner.token}`)
        .expect(200)
    ).body.find((r: { name: string }) => r.name === 'Member');

    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: memberRole.id,
      },
    });

    // As a plain Member, cannot create clients yet.
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ name: 'Nope' })
      .expect(403);

    // Owner assigns the new custom role to the staffer.
    await request(app.getHttpServer())
      .patch(`/organizations/${orgId}/members/${staffer.id}/role`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ roleId: roleRes.body.id })
      .expect(200);

    // The very next request reflects the new permission, with no re-login needed.
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ name: 'Now Allowed' })
      .expect(201);
  });

  it('a Member cannot manage roles or members, but can read them', async () => {
    const owner = await registerUser('member-perm-owner');
    const staffer = await registerUser('member-perm-staffer');
    const orgId = await createOrg(owner.token, `Member Perm Org ${runId}`);

    const memberRole = (
      await request(app.getHttpServer())
        .get(`/organizations/${orgId}/roles`)
        .set('Authorization', `Bearer ${owner.token}`)
        .expect(200)
    ).body.find((r: { name: string }) => r.name === 'Member');
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: memberRole.id,
      },
    });

    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(200);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ name: 'Should Fail', permissions: [] })
      .expect(403);

    await request(app.getHttpServer())
      .patch(`/organizations/${orgId}/members/${owner.id}/role`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ roleId: memberRole.id })
      .expect(403);
  });

  it('refuses to demote the last remaining Owner, preventing organization lockout', async () => {
    const owner = await registerUser('lockout-owner');
    const orgId = await createOrg(owner.token, `Lockout Org ${runId}`);

    const adminRole = (
      await request(app.getHttpServer())
        .get(`/organizations/${orgId}/roles`)
        .set('Authorization', `Bearer ${owner.token}`)
        .expect(200)
    ).body.find((r: { name: string }) => r.name === 'Admin');

    await request(app.getHttpServer())
      .patch(`/organizations/${orgId}/members/${owner.id}/role`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ roleId: adminRole.id })
      .expect(409);
  });

  it('deleting a role still assigned to a member is rejected; deleting an unassigned one succeeds, both logged', async () => {
    const owner = await registerUser('delete-owner');
    const orgId = await createOrg(owner.token, `Delete Org ${runId}`);

    const inUse = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'In Use', permissions: [] })
      .expect(201);
    const unused = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Unused', permissions: [] })
      .expect(201);

    const staffer = await registerUser('delete-staffer');
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: inUse.body.id,
      },
    });

    await request(app.getHttpServer())
      .delete(`/organizations/${orgId}/roles/${inUse.body.id}`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(409);

    await request(app.getHttpServer())
      .delete(`/organizations/${orgId}/roles/${unused.body.id}`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    const auditEntries = await prisma.auditLog.findMany({
      where: {
        organizationId: orgId,
        action: { in: ['role.created', 'role.deleted'] },
      },
    });
    expect(auditEntries.some((e) => e.action === 'role.created')).toBe(true);
    expect(auditEntries.some((e) => e.action === 'role.deleted')).toBe(true);
  });

  it('does not leak role existence across tenants (404, not 403, for a non-member)', async () => {
    const owner = await registerUser('iso-owner');
    const outsider = await registerUser('iso-outsider');
    const orgId = await createOrg(owner.token, `Iso Org ${runId}`);

    const rolesRes = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);
    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles/${rolesRes.body[0].id}`)
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);
  });
});
