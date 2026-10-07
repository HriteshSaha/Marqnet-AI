import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';

describe('Organizations (e2e)', () => {
  let app: INestApplication<App>;
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
  });

  afterAll(async () => {
    await app.close();
  });

  async function registerUser(suffix: string) {
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: `e2e-org-${runId}-${suffix}@example.com`,
        password: 'Password123!',
      })
      .expect(201);
    return res.body.accessToken as string;
  }

  it('creates an organization with a unique id, owner membership, stored locale/currency/timezone', async () => {
    const token = await registerUser('owner');

    const res = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: `E2E Agency ${runId}`,
        type: 'AGENCY',
        locale: 'fr-CA',
        currency: 'CAD',
        timezone: 'America/Toronto',
      })
      .expect(201);

    expect(res.body.id).toBeTruthy();
    expect(res.body.locale).toBe('fr-CA');
    expect(res.body.currency).toBe('CAD');
    expect(res.body.timezone).toBe('America/Toronto');

    const listRes = await request(app.getHttpServer())
      .get('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
    expect(
      listRes.body.some((org: { id: string }) => org.id === res.body.id),
    ).toBe(true);
  });

  it('rejects anonymous requests', async () => {
    await request(app.getHttpServer()).get('/organizations').expect(401);
    await request(app.getHttpServer())
      .post('/organizations')
      .send({ name: 'No Auth Org', type: 'AGENCY' })
      .expect(401);
  });

  it('does not allow one tenant to read another tenant organization (no existence leak)', async () => {
    const tokenA = await registerUser('a');
    const tokenB = await registerUser('b');

    const orgRes = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${tokenA}`)
      .send({ name: `Isolation Org ${runId}`, type: 'DIRECT_BRAND' })
      .expect(201);

    await request(app.getHttpServer())
      .get(`/organizations/${orgRes.body.id}`)
      .set('Authorization', `Bearer ${tokenB}`)
      .expect(404);

    const listRes = await request(app.getHttpServer())
      .get('/organizations')
      .set('Authorization', `Bearer ${tokenB}`)
      .expect(200);
    expect(
      listRes.body.some((org: { id: string }) => org.id === orgRes.body.id),
    ).toBe(false);
  });

  it('auto-suffixes the slug when two organizations share a name', async () => {
    const token = await registerUser('dupe');
    const name = `Dup Agency ${runId}`;

    const first = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .send({ name, type: 'AGENCY' })
      .expect(201);
    const second = await request(app.getHttpServer())
      .post('/organizations')
      .set('Authorization', `Bearer ${token}`)
      .send({ name, type: 'AGENCY' })
      .expect(201);

    expect(second.body.slug).not.toBe(first.body.slug);
    expect(second.body.slug.startsWith(first.body.slug)).toBe(true);
  });
});
