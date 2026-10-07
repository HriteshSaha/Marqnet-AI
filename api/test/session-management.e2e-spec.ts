import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Session management (e2e, EP-02-US-03)', () => {
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

  async function registerUser(suffix: string, password = 'Password123!') {
    const email = `e2e-sessions-${runId}-${suffix}@example.com`;
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email, password })
      .expect(201);
    return {
      email,
      token: res.body.accessToken as string,
      id: res.body.user.id as string,
    };
  }

  async function login(email: string, password: string, userAgent: string) {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .set('User-Agent', userAgent)
      .send({ email, password })
      .expect(200);
    return res.body.accessToken as string;
  }

  it('lists active sessions with device/time/IP metadata and flags the current one', async () => {
    const user = await registerUser('list');
    const secondDeviceToken = await login(
      user.email,
      'Password123!',
      'SecondDevice/1.0',
    );

    const res = await request(app.getHttpServer())
      .get('/auth/sessions')
      .set('Authorization', `Bearer ${secondDeviceToken}`)
      .expect(200);

    expect(res.body.length).toBeGreaterThanOrEqual(2);
    for (const session of res.body) {
      expect(session).toHaveProperty('createdAt');
      expect(session).toHaveProperty('expiresAt');
      expect(session).toHaveProperty('ipAddress');
      expect(session).toHaveProperty('userAgent');
    }
    const current = res.body.find(
      (s: { userAgent: string }) => s.userAgent === 'SecondDevice/1.0',
    );
    expect(current?.isCurrent).toBe(true);
    const originalRegistration = res.body.find(
      (s: { isCurrent: boolean }) => !s.isCurrent,
    );
    expect(originalRegistration).toBeTruthy();
  });

  it('revokes an individual session and its token stops working immediately, and this is logged', async () => {
    const user = await registerUser('revoke-one');
    const otherDeviceToken = await login(
      user.email,
      'Password123!',
      'OtherDevice/1.0',
    );

    const before = await request(app.getHttpServer())
      .get('/auth/sessions')
      .set('Authorization', `Bearer ${otherDeviceToken}`)
      .expect(200);
    const toRevoke = before.body.find(
      (s: { isCurrent: boolean }) => !s.isCurrent,
    );
    expect(toRevoke).toBeTruthy();

    await request(app.getHttpServer())
      .delete(`/auth/sessions/${toRevoke.id}`)
      .set('Authorization', `Bearer ${otherDeviceToken}`)
      .expect(204);

    // The revoked session's own token (the original registration token) must now be rejected.
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(401);

    // The session that performed the revocation is unaffected.
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${otherDeviceToken}`)
      .expect(200);

    const auditEntry = await prisma.auditLog.findFirst({
      where: {
        actorUserId: user.id,
        action: 'auth.session_revoked',
        targetId: toRevoke.id,
      },
    });
    expect(auditEntry).not.toBeNull();
  });

  it('cannot revoke a session belonging to another user (404, not leaking its existence)', async () => {
    const victim = await registerUser('victim');
    const attacker = await registerUser('attacker');

    const victimSessions = await request(app.getHttpServer())
      .get('/auth/sessions')
      .set('Authorization', `Bearer ${victim.token}`)
      .expect(200);
    const victimSessionId = victimSessions.body[0].id;

    await request(app.getHttpServer())
      .delete(`/auth/sessions/${victimSessionId}`)
      .set('Authorization', `Bearer ${attacker.token}`)
      .expect(404);

    // Victim's session must still be alive.
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${victim.token}`)
      .expect(200);
  });

  it('revoke-all defaults to keeping the current session alive ("log out everywhere else")', async () => {
    const user = await registerUser('revoke-all-default');
    const otherDeviceToken = await login(
      user.email,
      'Password123!',
      'OtherDevice/1.0',
    );

    await request(app.getHttpServer())
      .post('/auth/sessions/revoke-all')
      .set('Authorization', `Bearer ${otherDeviceToken}`)
      .send({})
      .expect(204);

    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${otherDeviceToken}`)
      .expect(200);
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(401);

    const auditEntry = await prisma.auditLog.findFirst({
      where: { actorUserId: user.id, action: 'auth.session_revoked_all' },
    });
    expect(auditEntry).not.toBeNull();
  });

  it('revoke-all with keepCurrent=false logs out every session including the one making the request', async () => {
    const user = await registerUser('revoke-all-full');

    await request(app.getHttpServer())
      .post('/auth/sessions/revoke-all')
      .set('Authorization', `Bearer ${user.token}`)
      .send({ keepCurrent: false })
      .expect(204);

    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(401);
  });

  it('changing the password revokes every session, including the current one, and is logged', async () => {
    const user = await registerUser('change-pw', 'OldPassword123!');
    const otherDeviceToken = await login(
      user.email,
      'OldPassword123!',
      'OtherDevice/1.0',
    );

    await request(app.getHttpServer())
      .post('/auth/change-password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        currentPassword: 'OldPassword123!',
        newPassword: 'NewPassword456!',
      })
      .expect(204);

    // Every prior session's token is now rejected, including the one that issued the change.
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(401);
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${otherDeviceToken}`)
      .expect(401);

    // Old password no longer works; new password does.
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: user.email, password: 'OldPassword123!' })
      .expect(401);
    await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: user.email, password: 'NewPassword456!' })
      .expect(200);

    const auditEntry = await prisma.auditLog.findFirst({
      where: { actorUserId: user.id, action: 'auth.password_changed' },
    });
    expect(auditEntry).not.toBeNull();
  });

  it('rejects a password change with the wrong current password, leaving existing sessions untouched', async () => {
    const user = await registerUser('wrong-current-pw');

    await request(app.getHttpServer())
      .post('/auth/change-password')
      .set('Authorization', `Bearer ${user.token}`)
      .send({
        currentPassword: 'definitely-wrong',
        newPassword: 'NewPassword456!',
      })
      .expect(401);

    // Session survives an unsuccessful attempt.
    await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(200);
  });
});
