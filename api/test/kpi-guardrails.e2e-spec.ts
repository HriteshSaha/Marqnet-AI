import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('KPI guardrails (e2e, EP-04-US-02)', () => {
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
        email: `e2e-guardrails-${runId}-${suffix}@example.com`,
        password: 'Password123!',
      })
      .expect(201);
    return {
      token: res.body.accessToken as string,
      id: res.body.user.id as string,
    };
  }

  async function createOrgAndClient(
    token: string,
    suffix: string,
    orgOverrides: Record<string, unknown> = {},
  ) {
    const org = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: `Guardrail Org ${suffix} ${runId}`,
        type: 'AGENCY',
        ...orgOverrides,
      })
      .expect(201);
    const client = await request(app.getHttpServer())
      .post(`/organizations/${org.body.id}/clients`)
      .set('Authorization', `Bearer ${token}`)
      .send({ name: `Guardrail Client ${suffix}` })
      .expect(201);
    return { orgId: org.body.id as string, clientId: client.body.id as string };
  }

  const base = (orgId: string, clientId: string) =>
    `/organizations/${orgId}/clients/${clientId}/kpi-guardrails`;

  it('inherits the workspace currency when none is given', async () => {
    const owner = await registerUser('inherit');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'inherit',
      { currency: 'EUR' },
    );

    const res = await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 30, acceptableMin: 20, acceptableMax: 50 })
      .expect(200);

    expect(res.body.guardrail.currency).toBe('EUR');
    expect(res.body.warnings).toEqual([]);
  });

  it('accepts an explicit currency override instead of the workspace default', async () => {
    const owner = await registerUser('override');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'override',
      { currency: 'EUR' },
    );

    const res = await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        targetValue: 30,
        acceptableMin: 20,
        acceptableMax: 50,
        currency: 'USD',
      })
      .expect(200);

    expect(res.body.guardrail.currency).toBe('USD');
  });

  it('a target outside the acceptable range is saved but flagged with a warning', async () => {
    const owner = await registerUser('warn');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'warn');

    const res = await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/ROAS`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 1.5, acceptableMin: 2, acceptableMax: 4 })
      .expect(200);

    expect(res.body.warnings).toHaveLength(1);
    expect(res.body.guardrail.targetValue).toBe(1.5);

    const current = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      current.body.find((g: { metric: string }) => g.metric === 'ROAS')
        .targetValue,
    ).toBe(1.5);
  });

  it('rejects an inverted acceptable range outright', async () => {
    const owner = await registerUser('invalid-range');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'invalid-range',
    );

    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 30, acceptableMin: 50, acceptableMax: 20 })
      .expect(400);
  });

  it('retains full version history when a target changes, without losing the old value', async () => {
    const owner = await registerUser('history');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'history',
    );

    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 30, acceptableMin: 20, acceptableMax: 50 })
      .expect(200);
    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 40, acceptableMin: 25, acceptableMax: 55 })
      .expect(200);

    const history = await request(app.getHttpServer())
      .get(`${base(orgId, clientId)}/CPA/history`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);

    expect(history.body).toHaveLength(2);
    expect(history.body[0].version).toBe(2);
    expect(history.body[0].targetValue).toBe(40);
    expect(history.body[0].isCurrent).toBe(true);
    expect(history.body[1].version).toBe(1);
    expect(history.body[1].targetValue).toBe(30);
    expect(history.body[1].isCurrent).toBe(false);
    expect(history.body[1].supersededAt).toBeTruthy();

    const current = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      current.body.filter((g: { metric: string }) => g.metric === 'CPA'),
    ).toHaveLength(1);
    expect(
      current.body.find((g: { metric: string }) => g.metric === 'CPA')
        .targetValue,
    ).toBe(40);
  });

  it('tracks multiple metrics independently for the same client', async () => {
    const owner = await registerUser('multi-metric');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'multi-metric',
    );

    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 30, acceptableMin: 20, acceptableMax: 50 })
      .expect(200);
    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/REVENUE`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({
        targetValue: 100000,
        acceptableMin: 80000,
        acceptableMax: 150000,
      })
      .expect(200);

    const current = await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(
      current.body.map((g: { metric: string }) => g.metric).sort(),
    ).toEqual(['CPA', 'REVENUE'].sort());
  });

  it('every guardrail change is audited', async () => {
    const owner = await registerUser('audit');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'audit');

    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/BUDGET`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 5000, acceptableMin: 3000, acceptableMax: 7000 })
      .expect(200);

    const entry = await prisma.auditLog.findFirst({
      where: { organizationId: orgId, action: 'client.kpi_guardrail_set' },
    });
    expect(entry).not.toBeNull();
    expect((entry?.metadata as { metric?: string } | null)?.metric).toBe(
      'BUDGET',
    );
  });

  it('a RESTRICTED member cannot read or set guardrails for a client outside their scope (404)', async () => {
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
        name: 'Guardrail Editor',
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
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${staffer.token}`)
      .send({ targetValue: 30, acceptableMin: 20, acceptableMax: 50 })
      .expect(404);
  });

  it('does not leak guardrail data across tenants (404 for a non-member of the organization)', async () => {
    const owner = await registerUser('iso-owner');
    const outsider = await registerUser('iso-outsider');
    const { orgId, clientId } = await createOrgAndClient(owner.token, 'iso');

    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/CPA`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 30, acceptableMin: 20, acceptableMax: 50 })
      .expect(200);

    await request(app.getHttpServer())
      .get(base(orgId, clientId))
      .set('Authorization', `Bearer ${outsider.token}`)
      .expect(404);
  });

  it('rejects an invalid metric path segment with 400', async () => {
    const owner = await registerUser('invalid-metric');
    const { orgId, clientId } = await createOrgAndClient(
      owner.token,
      'invalid-metric',
    );

    await request(app.getHttpServer())
      .put(`${base(orgId, clientId)}/NOT_A_METRIC`)
      .set('Authorization', `Bearer ${owner.token}`)
      .send({ targetValue: 30, acceptableMin: 20, acceptableMax: 50 })
      .expect(400);
  });
});
