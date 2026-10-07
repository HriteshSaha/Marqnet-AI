import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { generate } from 'otplib';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';
import { SessionsService } from '../src/sessions/sessions.service.js';

describe('Auth security (e2e, EP-02-US-01)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;
  let sessions: SessionsService;
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
    sessions = moduleFixture.get(SessionsService);
  });

  afterAll(async () => {
    await app.close();
  });

  async function registerUser(suffix: string) {
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({
        email: `e2e-sec-${runId}-${suffix}@example.com`,
        password: 'Password123!',
      })
      .expect(201);
    return {
      token: res.body.accessToken as string,
      id: res.body.user.id as string,
      sessionId: res.body.user.sessionId as string,
    };
  }

  it('does not reveal whether an email is registered on failed login', async () => {
    const user = await registerUser('generic-msg');

    const unknownEmail = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: `nobody-${runId}@example.com`, password: 'whatever' })
      .expect(401);
    const wrongPassword = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: `e2e-sec-${runId}-generic-msg@example.com`,
        password: 'wrongpass',
      })
      .expect(401);

    expect(unknownEmail.body.message).toBe(wrongPassword.body.message);
    void user;
  });

  it('records an auditable session and audit log entry on successful login', async () => {
    const email = `e2e-sec-${runId}-audit@example.com`;
    await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email, password: 'Password123!' })
      .expect(201);

    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email, password: 'Password123!' })
      .expect(200);

    const sessionId = loginRes.body.user.sessionId as string;
    const session = await prisma.session.findUnique({
      where: { id: sessionId },
    });
    expect(session).not.toBeNull();
    expect(session?.revokedAt).toBeNull();

    const auditEntry = await prisma.auditLog.findFirst({
      where: {
        actorUserId: loginRes.body.user.id,
        action: 'auth.login_succeeded',
      },
      orderBy: { createdAt: 'desc' },
    });
    expect(auditEntry).not.toBeNull();
  });

  it('logs a failed-login audit entry without creating a session', async () => {
    const email = `e2e-sec-${runId}-fail-audit@example.com`;
    const reg = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email, password: 'Password123!' })
      .expect(201);

    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email, password: 'wrong' })
      .expect(401);

    const failureEntry = await prisma.auditLog.findFirst({
      where: { actorUserId: reg.body.user.id, action: 'auth.login_failed' },
      orderBy: { createdAt: 'desc' },
    });
    expect(failureEntry).not.toBeNull();
    expect((failureEntry?.metadata as { reason?: string } | null)?.reason).toBe(
      'invalid_password',
    );
  });

  it('revoking a session immediately invalidates its token, even though the JWT itself has not expired', async () => {
    const user = await registerUser('revoke');

    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(200);

    await sessions.revoke(user.sessionId);

    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(401);
  });

  describe('MFA enrollment and challenge', () => {
    it('requires setup before enabling, then enforces a code on every subsequent login', async () => {
      const email = `e2e-sec-${runId}-mfa@example.com`;
      const password = 'Password123!';
      const registerRes = await request(app.getHttpServer())
        .post('/auth/register')
        .send({ email, password })
        .expect(201);
      const token = registerRes.body.accessToken as string;

      // Cannot confirm without first starting setup.
      await request(app.getHttpServer())
        .post('/auth/mfa/enable')
        .set('Authorization', `Bearer ${token}`)
        .send({ code: '123456' })
        .expect(400);

      const setupRes = await request(app.getHttpServer())
        .post('/auth/mfa/setup')
        .set('Authorization', `Bearer ${token}`)
        .expect(201);
      const secret = setupRes.body.secret as string;
      expect(setupRes.body.otpauthUrl).toContain('otpauth://totp/');

      // A bogus code does not activate MFA.
      await request(app.getHttpServer())
        .post('/auth/mfa/enable')
        .set('Authorization', `Bearer ${token}`)
        .send({ code: '000000' })
        .expect(401);

      const validCode = await generate({ secret });
      await request(app.getHttpServer())
        .post('/auth/mfa/enable')
        .set('Authorization', `Bearer ${token}`)
        .send({ code: validCode })
        .expect(200);

      // Password alone is no longer sufficient.
      const noCodeAttempt = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email, password })
        .expect(401);
      expect(noCodeAttempt.body.error).toBe('mfa_required');

      const wrongCodeAttempt = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email, password, mfaCode: '000000' })
        .expect(401);
      expect(wrongCodeAttempt.body.message).toBe('Invalid authentication code');

      const freshCode = await generate({ secret });
      const successfulLogin = await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email, password, mfaCode: freshCode })
        .expect(200);
      expect(successfulLogin.body.accessToken).toBeTruthy();

      // Disabling also requires a valid code.
      const anotherCode = await generate({ secret });
      await request(app.getHttpServer())
        .post('/auth/mfa/disable')
        .set('Authorization', `Bearer ${successfulLogin.body.accessToken}`)
        .send({ code: anotherCode })
        .expect(200);

      // MFA no longer required afterwards.
      await request(app.getHttpServer())
        .post('/auth/login')
        .send({ email, password })
        .expect(200);
    });
  });

  describe('Rate limiting', () => {
    it('returns 429 after exceeding the configured attempt limit within the window', async () => {
      const originalLimit = process.env.AUTH_THROTTLE_LIMIT;
      const originalTtl = process.env.AUTH_THROTTLE_TTL_SECONDS;
      process.env.AUTH_THROTTLE_LIMIT = '3';
      process.env.AUTH_THROTTLE_TTL_SECONDS = '60';

      const throttledModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
      const throttledApp = throttledModule.createNestApplication();
      await throttledApp.init();

      try {
        const email = `e2e-sec-${runId}-throttle@example.com`;
        for (let i = 0; i < 3; i++) {
          await request(throttledApp.getHttpServer())
            .post('/auth/login')
            .send({ email, password: 'wrong' })
            .expect(401);
        }

        await request(throttledApp.getHttpServer())
          .post('/auth/login')
          .send({ email, password: 'wrong' })
          .expect(429);
      } finally {
        await throttledApp.close();
        process.env.AUTH_THROTTLE_LIMIT = originalLimit;
        process.env.AUTH_THROTTLE_TTL_SECONDS = originalTtl;
      }
    });
  });
});
