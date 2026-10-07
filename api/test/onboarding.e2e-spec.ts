import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Client onboarding wizard (e2e, EP-04-US-01)', () => {
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
        email: `e2e-onboarding-${runId}-${suffix}@example.com`,
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
      .send({ name: `Onboarding Org ${suffix} ${runId}`, type: 'AGENCY' })
      .expect(201);
    const client = await request(app.getHttpServer())
      .post(`/organizations/${org.body.id}/clients`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: `Onboarding Client ${suffix}` })
      .expect(201);
    return { orgId: org.body.id as string, clientId: client.body.id as string };
  }

  const base = (orgId: string, clientId: string) =>
    `/organizations/${orgId}/clients/${clientId}/onboarding`;

  it('starts empty, with the always-required steps missing and 0% completion', async () => {
    const owner = await registerUser('empty');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'empty');

    const res = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    expect(res.body.completionPercent).toBe(0);
    expect(res.body.missingSteps.sort()).toEqual(
      [
        'BUSINESS_PROFILE',
        'GOALS_AND_KPIS',
        'CHANNELS',
        'AUDIENCE_AND_GEOGRAPHY',
      ].sort(),
    );
    expect(res.body.requiredSteps).not.toContain('BUDGET');
  });

  it('saves progress step by step, and selecting a paid channel adds Budget to the required steps', async () => {
    const owner = await registerUser('progress');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'progress',
    );

    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/business-profile`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        businessDescription:
          'We run a mid-size e-commerce shop selling handmade goods.',
      })
      .expect(200);

    let state = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(state.body.missingSteps).not.toContain('BUSINESS_PROFILE');
    expect(state.body.completionPercent).toBe(25);

    // SEO-only: Budget not required yet.
    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/channels`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ channels: ['SEO'] })
      .expect(200);
    state = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(state.body.requiredSteps).not.toContain('BUDGET');

    // Adding a paid channel makes Budget required.
    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/channels`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ channels: ['SEO', 'GOOGLE_ADS'] })
      .expect(200);
    state = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(state.body.requiredSteps).toContain('BUDGET');
    expect(state.body.missingSteps).toContain('BUDGET');

    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/goals-and-kpis`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        primaryGoal: 'LEAD_GENERATION',
        primaryKpi: 'CPA',
        secondaryKpis: ['CONVERSION_RATE'],
      })
      .expect(200);

    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/audience-geography`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        targetGeographies: ['US', 'CA'],
        targetAudience: 'Small business owners aged 30-55',
      })
      .expect(200);

    const beforeBudget = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(beforeBudget.body.missingSteps).toEqual(['BUDGET']);
    expect(beforeBudget.body.completionPercent).toBe(80);

    const complete = await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/budget`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ budgetMin: 2000, budgetMax: 8000 })
      .expect(200);
    expect(complete.body.missingSteps).toEqual([]);
    expect(complete.body.completionPercent).toBe(100);
  });

  it('rejects an invalid budget range (max below min) with 400', async () => {
    const owner = await registerUser('badbudget');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'badbudget',
    );

    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/budget`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ budgetMin: 5000, budgetMax: 1000 })
      .expect(400);
  });

  it('competitors step is optional and never appears in required/missing steps', async () => {
    const owner = await registerUser('competitors');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'competitors',
    );

    const before = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(before.body.requiredSteps).not.toContain('COMPETITORS');

    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/competitors`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ competitors: ['acme.com', 'widgetco.com'] })
      .expect(200);

    const after = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(after.body.competitors.sort()).toEqual(
      ['acme.com', 'widgetco.com'].sort(),
    );
    expect(after.body.requiredSteps).not.toContain('COMPETITORS');
  });

  it('a RESTRICTED member cannot read or edit onboarding for a client outside their scope (404, not 403)', async () => {
    const owner = await registerUser('restrict-owner');
    const staffer = await registerUser('restrict-staffer');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'restrict',
    );

    const roles = await request(app.getHttpServer())
      .get(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    const memberRole = roles.body.find(
      (r: { name: string }) => r.name === 'Member',
    );
    await prisma.membership.create({
      data: {
        userId: staffer.id,
        organizationId: orgId,
        roleId: memberRole.id,
      },
    });
    await request(app.getHttpServer())
      .put(`/organizations/${orgId}/members/${staffer.id}/client-access`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ scope: 'RESTRICTED', clientIds: [] })
      .expect(200);

    // GET only requires clients:READ, which Member has — so the 404 here comes
    // from the EP-03-US-02 client-access-scope check, not the permission gate.
    await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${staffer.token}`)
      .expect(404);

    // The Member role doesn't grant clients:EDIT at all by default, so this
    // PATCH is correctly refused at the permission gate (403) before the
    // client-access-scope check would even run.
    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/competitors`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ competitors: [] })
      .expect(403);
  });

  it('a RESTRICTED member with clients:EDIT still cannot edit onboarding for a client outside their scope (404)', async () => {
    const owner = await registerUser('restrict-edit-owner');
    const staffer = await registerUser('restrict-edit-staffer');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'restrict-edit',
    );

    const editorRole = await request(app.getHttpServer())
      .post(`/organizations/${orgId}/roles`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        name: 'Onboarding Editor',
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
      .patch(`${base(orgId, clientId)}/competitors`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ competitors: [] })
      .expect(404);
  });

  it('does not leak onboarding data across tenants (404 for a non-member of the organization)', async () => {
    const owner = await registerUser('iso-owner');
    const outsider = await registerUser('iso-outsider');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'iso');

    await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);
  });

  it('every step save is audited', async () => {
    const owner = await registerUser('audit');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'audit');

    await request(app.getHttpServer())
      .patch(`${base(orgId, clientId)}/business-profile`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        businessDescription: 'A description long enough to pass validation.',
      })
      .expect(200);

    const entry = await prisma.auditLog.findFirst({
      where: { organizationId: orgId, action: 'client.onboarding_step_saved' },
    });
    expect(entry).not.toBeNull();
    expect((entry?.metadata as { step?: string } | null)?.step).toBe(
      'BUSINESS_PROFILE',
    );
  });
});
