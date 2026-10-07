import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Compliance constraints (e2e, EP-04-US-03)', () => {
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
        email: `e2e-compliance-${runId}-${suffix}@example.com`,
        password: 'Password123!',
      })
      .expect(201);
    return {
      token: res.body.accessToken as string,
      id: res.body.user.id as string,
    };
  }

  async function createOrgAndClient(token: string, suffix: string) {
    const org = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: `Compliance Org ${suffix} ${runId}`, type: 'AGENCY' })
      .expect(201);
    const client = await request(app.getHttpServer())
      .post(`/organizations/${org.body.id}/clients`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: `Compliance Client ${suffix}` })
      .expect(201);
    return { orgId: org.body.id as string, clientId: client.body.id as string };
  }

  const base = (orgId: string, clientId: string) =>
    `/organizations/${orgId}/clients/${clientId}/compliance-constraints`;

  it('records a category + description, and HIGH risk forces disableAutoExecution regardless of input', async () => {
    const owner = await registerUser('create');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'create');

    const res = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'HEALTHCARE',
        description: 'No unverified medical claims in ad copy',
        riskLevel: 'HIGH',
        disableAutoExecution: false,
      })
      .expect(201);

    expect(res.body.category).toBe('HEALTHCARE');
    expect(res.body.disableAutoExecution).toBe(true);
    expect(res.body.version).toBe(1);
  });

  it('is available to read as the active list ("AI policy layer" view)', async () => {
    const owner = await registerUser('list');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'list');

    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'ALCOHOL',
        description: 'No targeting under 21',
        riskLevel: 'MEDIUM',
      })
      .expect(201);
    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'DATA_PRIVACY',
        description: 'No retargeting without consent',
        riskLevel: 'HIGH',
      })
      .expect(201);

    const list = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      list.body.map((c: { category: string }) => c.category).sort(),
    ).toEqual(['ALCOHOL', 'DATA_PRIVACY'].sort());
  });

  it('tightening a category supersedes it directly and keeps full history', async () => {
    const owner = await registerUser('tighten');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'tighten',
    );

    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'GAMBLING',
        description: 'Initial note',
        riskLevel: 'MEDIUM',
      })
      .expect(201);
    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'GAMBLING',
        description: 'Now fully restricted',
        riskLevel: 'CRITICAL',
      })
      .expect(201);

    const history = await request(app.getHttpServer())
      .get(`${base(orgId, clientId)}/GAMBLING/history`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(history.body).toHaveLength(2);
    expect(history.body[0].version).toBe(2);
    expect(history.body[0].riskLevel).toBe('CRITICAL');
    expect(history.body[0].isCurrent).toBe(true);
    expect(history.body[1].isCurrent).toBe(false);
    expect(history.body[1].supersededAt).toBeTruthy();
  });

  it('refuses to loosen an existing constraint directly (403), directing to the override workflow', async () => {
    const owner = await registerUser('loosen');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'loosen');

    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'CANNABIS',
        description: 'Fully restricted region',
        riskLevel: 'CRITICAL',
      })
      .expect(201);

    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'CANNABIS',
        description: 'Now allowed everywhere',
        riskLevel: 'LOW',
      })
      .expect(403);
  });

  it('an override (retirement) only takes effect after the linked approval is actually APPROVED', async () => {
    const owner = await registerUser('override');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'override',
    );

    const created = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'LEGAL',
        description: 'No performance guarantees',
        riskLevel: 'HIGH',
      })
      .expect(201);
    const constraintId = created.body.id;

    const reqRes = await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${constraintId}/request-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ comment: 'Client legal team signed off' })
      .expect(201);
    const approvalRequestId = reqRes.body.id;
    expect(reqRes.body.riskLevel).toBe('HIGH');
    expect(reqRes.body.status).toBe('PENDING');

    // Cannot apply before it's decided.
    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${constraintId}/apply-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ approvalRequestId })
      .expect(409);

    // Constraint still active and visible in the list.
    const stillActive = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      stillActive.body.some((c: { id: string }) => c.id === constraintId),
    ).toBe(true);

    // Owner decides (HIGH risk is within Owner's default authority).
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${approvalRequestId}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED' })
      .expect(201);

    const applied = await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${constraintId}/apply-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ approvalRequestId })
      .expect(201);
    expect(applied.body.isActive).toBe(false);

    const afterRetirement = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      afterRetirement.body.some((c: { id: string }) => c.id === constraintId),
    ).toBe(false);

    // The approval cannot be replayed to retire it "again".
    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${constraintId}/apply-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ approvalRequestId })
      .expect(409);
  });

  it('rejects applying a retirement using an approval that was rejected', async () => {
    const owner = await registerUser('rejected');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'rejected',
    );

    const created = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'PROHIBITED_CLAIMS',
        description: 'No "guaranteed results" language',
        riskLevel: 'MEDIUM',
      })
      .expect(201);
    const constraintId = created.body.id;

    const reqRes = await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${constraintId}/request-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({})
      .expect(201);

    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${reqRes.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'REJECTED', comment: 'Not yet' })
      .expect(201);

    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${constraintId}/apply-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ approvalRequestId: reqRes.body.id })
      .expect(409);
  });

  it('rejects an approval request that was opened for a different constraint', async () => {
    const owner = await registerUser('mismatch');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'mismatch',
    );

    const c1 = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'BRAND_RESTRICTION',
        description: 'No competitor comparisons',
        riskLevel: 'LOW',
      })
      .expect(201);
    const c2 = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'PROHIBITED_KEYWORDS',
        description: 'No superlative claims',
        riskLevel: 'LOW',
      })
      .expect(201);

    const reqForC1 = await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${c1.body.id}/request-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({})
      .expect(201);
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/approvals/${reqForC1.body.id}/decisions`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ decision: 'APPROVED' })
      .expect(201);

    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${c2.body.id}/apply-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ approvalRequestId: reqForC1.body.id })
      .expect(400);
  });

  it('refuses a second concurrent retirement request while one is pending', async () => {
    const owner = await registerUser('concurrent');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'concurrent',
    );

    const created = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'FINANCIAL_SERVICES',
        description: 'No APR guarantees',
        riskLevel: 'CRITICAL',
      })
      .expect(201);

    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${created.body.id}/request-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({})
      .expect(201);

    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${created.body.id}/request-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({})
      .expect(409);
  });

  it('every create and every retirement step is audited', async () => {
    const owner = await registerUser('audit');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'audit');

    const created = await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        category: 'REGULATED_INDUSTRY',
        description: 'General regulatory flag',
        riskLevel: 'HIGH',
      })
      .expect(201);

    const createdEntry = await prisma.auditLog.findFirst({
      where: {
        organizationId: orgId,
        action: 'client.compliance_constraint_created',
      },
    });
    expect(createdEntry).not.toBeNull();

    await request(app.getHttpServer())
      .post(`${base(orgId, clientId)}/${created.body.id}/request-retirement`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({})
      .expect(201);

    const requestedEntry = await prisma.auditLog.findFirst({
      where: {
        organizationId: orgId,
        action: 'client.compliance_retirement_requested',
      },
    });
    expect(requestedEntry).not.toBeNull();
  });

  it('a RESTRICTED member cannot read or create constraints for a client outside their scope (404)', async () => {
    const owner = await registerUser('restrict-owner');
    const staffer = await registerUser('restrict-staffer');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'restrict',
    );

    const editorRole = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        name: 'Compliance Editor',
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
    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [] })
      .expect(200);

    await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(404);

    await request(app.getHttpServer())
      .post(base(orgId, clientId))
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({
        category: 'OTHER',
        description: 'Should not be created',
        riskLevel: 'LOW',
      })
      .expect(404);
  });

  it('does not leak compliance data across tenants (404 for a non-member of the organization)', async () => {
    const owner = await registerUser('iso-owner');
    const outsider = await registerUser('iso-outsider');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'iso');

    await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);
  });
});
