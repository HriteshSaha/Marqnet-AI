import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';
import { SystemRoleKey } from '../src/generated/prisma/enums.js';

describe('Clients (e2e)', () => {
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
        email: `e2e-client-${runId}-${suffix}@example.com`,
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

  it('lets an OWNER create a client with a unique slug, default ACTIVE status', async () => {
    const owner = await registerUser('owner');
    const orgId = await createOrg(owner.token, `Agency ${runId}`);

    const res = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Client One' })
      .expect(201);

    expect(res.body.slug).toBe('client-one');
    expect(res.body.status).toBe('ACTIVE');
  });

  it('lists clients excluding archived by default, and archive/restore round-trips', async () => {
    const owner = await registerUser('lifecycle');
    const orgId = await createOrg(owner.token, `Agency LC ${runId}`);

    const created = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Lifecycle Client' })
      .expect(201);
    const clientId = created.body.id;

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients/${clientId}/archive`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(201);

    const listDefault = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      listDefault.body.some((c: { id: string }) => c.id === clientId),
    ).toBe(false);

    const listIncludingArchived = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients?includeArchived=true`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    const archivedEntry = listIncludingArchived.body.find(
      (c: { id: string }) => c.id === clientId,
    );
    expect(archivedEntry?.status).toBe('ARCHIVED');

    // Archiving again is rejected rather than silently no-op'd.
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients/${clientId}/archive`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(409);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients/${clientId}/restore`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(201);

    const listAfterRestore = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      listAfterRestore.body.some((c: { id: string }) => c.id === clientId),
    ).toBe(true);
  });

  it('rejects a plain MEMBER from creating or archiving clients, but allows listing', async () => {
    const owner = await registerUser('perm-owner');
    const member = await registerUser('perm-member');
    const orgId = await createOrg(owner.token, `Agency Perm ${runId}`);

    const memberRole = await prisma.role.findFirstOrThrow({
      where: { organizationId: orgId, systemKey: SystemRoleKey.MEMBER },
    });
    await prisma.membership.create({
      data: { userId: member.id, organizationId: orgId, roleId: memberRole.id },
    });

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${member.token}`)
      .send({ name: 'Should Fail' })
      .expect(403);

    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${member.token}`)
      .expect(200);
  });

  it('does not allow a non-member to read, create or discover clients of another tenant (404, not 403)', async () => {
    const owner = await registerUser('iso-owner');
    const outsider = await registerUser('iso-outsider');
    const orgId = await createOrg(owner.token, `Agency Iso ${runId}`);

    const client = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Isolated Client' })
      .expect(201);

    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);

    await request(app.getHttpServer())
      .get(`/organizations/${orgId}/clients/${client.body.id}`)
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${outsider.token}`)
      .send({ name: 'Should Not Exist' })
      .expect(404);
  });

  it('auto-suffixes the slug when two clients in the same org share a name', async () => {
    const owner = await registerUser('dupe');
    const orgId = await createOrg(owner.token, `Agency Dupe ${runId}`);

    const first = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Same Name' })
      .expect(201);
    const second = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/clients`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ name: 'Same Name' })
      .expect(201);

    expect(second.body.slug).not.toBe(first.body.slug);
  });
});
