import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Client access restriction (e2e, EP-03-US-02)', () => {
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
        email: `e2e-cliaccess-${runId}-${suffix}@example.com`,
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

  async function createClient(token: string, orgId: string, name: string) {
    const res = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name })
      .expect(201);
    return res.body.id as string;
  }

  async function memberRoleId(token: string, orgId: string) {
    const roles = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    return roles.body.find((r: { name: string }) => r.name === 'Member').id;
  }

  it('defaults new members to unrestricted (ALL) access', async () => {
    const owner = await registerUser('default-owner');
    const staffer = await registerUser('default-staffer');
    const orgId = await createOrg(owner.token, `Default Org ${runId}`);
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: await memberRoleId(owner.token, orgId),
      },
    });

    const access = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    expect(access.body.scope).toBe('ALL');
    expect(access.body.clientIds).toEqual([]);
  });

  it('a RESTRICTED member cannot list, read, or deep-link to an unassigned client (404, not 403)', async () => {
    const owner = await registerUser('restrict-owner');
    const staffer = await registerUser('restrict-staffer');
    const orgId = await createOrg(owner.token, `Restrict Org ${runId}`);
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: await memberRoleId(owner.token, orgId),
      },
    });

    const allowedClient = await createClient(
      owner.token,
      orgId,
      'Allowed Client',
    );
    const forbiddenClient = await createClient(
      owner.token,
      orgId,
      'Forbidden Client',
    );

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [allowedClient] })
      .expect(200);

    // List only returns the authorized client.
    const list = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(200);
    expect(list.body.map((c: { id: string }) => c.id)).toEqual([allowedClient]);

    // Reading the allowed client works...
    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients/${allowedClient}`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(200);

    // ...but a direct deep link to the unassigned (yet very real) client is a 404, not a 403.
    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients/${forbiddenClient}`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(404);
  });

  it('a custom-role member with clients:EDIT still cannot archive a client outside their restricted scope', async () => {
    const owner = await registerUser('edit-owner');
    const staffer = await registerUser('edit-staffer');
    const orgId = await createOrg(owner.token, `Edit Scope Org ${runId}`);

    const editorRole = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        name: 'Client Editor',
        permissions: [
          { module: 'clients', action: 'READ' },
          { module: 'clients', action: 'EDIT' },
        ],
      })
      .expect(201);

    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: editorRole.body.id,
      },
    });

    const allowedClient = await createClient(
      owner.token,
      orgId,
      'Editable Client',
    );
    const otherClient = await createClient(owner.token, orgId, 'Other Client');

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [allowedClient] })
      .expect(200);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients/${allowedClient}/archive`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(201);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients/${otherClient}/archive`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(404);
  });

  it('restoring ALL access immediately unblocks visibility, with no re-login needed', async () => {
    const owner = await registerUser('restore-all-owner');
    const staffer = await registerUser('restore-all-staffer');
    const orgId = await createOrg(owner.token, `Restore All Org ${runId}`);
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: await memberRoleId(owner.token, orgId),
      },
    });

    const clientA = await createClient(owner.token, orgId, 'Client A');
    const clientB = await createClient(owner.token, orgId, 'Client B');

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [clientA] })
      .expect(200);

    let list = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(200);
    expect(list.body.map((c: { id: string }) => c.id).sort()).toEqual([
      clientA,
    ]);

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'ALL' })
      .expect(200);

    list = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(200);
    expect(list.body.map((c: { id: string }) => c.id).sort()).toEqual(
      [clientA, clientB].sort(),
    );
  });

  it('restricting to zero clients results in an empty, authorized-only list', async () => {
    const owner = await registerUser('zero-owner');
    const staffer = await registerUser('zero-staffer');
    const orgId = await createOrg(owner.token, `Zero Org ${runId}`);
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: await memberRoleId(owner.token, orgId),
      },
    });
    await createClient(owner.token, orgId, 'Some Client');

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [] })
      .expect(200);

    const list = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(200);
    expect(list.body).toEqual([]);
  });

  it('rejects a clientId from a different organization, and logs a successful change', async () => {
    const owner = await registerUser('xorg-owner');
    const staffer = await registerUser('xorg-staffer');
    const orgId = await createOrg(owner.token, `XOrg A ${runId}`);
    const otherOrgId = await createOrg(owner.token, `XOrg B ${runId}`);
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: await memberRoleId(owner.token, orgId),
      },
    });

    const foreignClient = await createClient(
      owner.token,
      otherOrgId,
      'Foreign Client',
    );

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [foreignClient] })
      .expect(400);

    const ownClient = await createClient(owner.token, orgId, 'Own Client');
    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [ownClient] })
      .expect(200);

    const auditEntry = await prisma.auditLog.findFirst({
      where: { organizationId: orgId, action: 'member.client_access_updated' },
      orderBy: { createdAt: 'desc' },
    });
    expect(auditEntry).not.toBeNull();
    expect(
      (auditEntry?.metadata as { targetUserId?: string })?.targetUserId,
    ).toBe(staffer.id);
  });

  it("a non-admin Member cannot change another member's client access", async () => {
    const owner = await registerUser('perm-owner');
    const staffer = await registerUser('perm-staffer');
    const victim = await registerUser('perm-victim');
    const orgId = await createOrg(owner.token, `Perm Org ${runId}`);
    const memberRole = await memberRoleId(owner.token, orgId);
    await prisma.membership.create({
      data: { userId: staffer.id, organizationId: orgId, roleId: memberRole },
    });
    await prisma.membership.create({
      data: { userId: victim.id, organizationId: orgId, roleId: memberRole },
    });

    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${victim.id}/client-access`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [] })
      .expect(403);
  });
});
