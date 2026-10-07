import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';
import { SystemRoleKey } from '../src/generated/prisma/enums.js';

function decodeJwtPayload(token: string): Record<string, unknown> {
  const [, payload] = token.split('.');
  return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
}

describe('Workspace switching (e2e, EP-01-US-03)', () => {
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
        email: `e2e-switch-${runId}-${suffix}@example.com`,
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

  it('workspace selector (GET /auth/me) shows only authorized workspaces, with no current workspace initially', async () => {
    const outsider = await registerUser('outsider');
    const user = await registerUser('selector');
    const orgA = await createOrg(user.token, `Selector Org A ${runId}`);
    const orgB = await createOrg(user.token, `Selector Org B ${runId}`);
    // An org the user has no access to must never appear.
    await createOrg(outsider.token, `Not Mine ${runId}`);

    const me = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(200);

    const ids = me.body.organizations.map((o: { id: string }) => o.id);
    expect(ids.sort()).toEqual([orgA, orgB].sort());
    expect(me.body.currentOrganizationId).toBeNull();
  });

  it('selecting an authorized workspace identifies it as current and embeds it in a fresh token', async () => {
    const user = await registerUser('select-ok');
    const orgA = await createOrg(user.token, `Switch Org A ${runId}`);

    const selectRes = await request(app.getHttpServer())
      .post(`/organizations/${orgA}/select`)
      .set('Authorization', `Bearer ${user.token}`)
      .expect(201);

    expect(selectRes.body.organization.id).toBe(orgA);
    expect(selectRes.body.role.name).toBe('Owner');
    expect(selectRes.body.role.systemKey).toBe('OWNER');
    const payload = decodeJwtPayload(selectRes.body.accessToken);
    expect(payload.organizationId).toBe(orgA);
    expect(payload.role).toBe('Owner');

    const me = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${user.token}`)
      .expect(200);
    expect(me.body.currentOrganizationId).toBe(orgA);
  });

  it('returns access denied (404) for an unauthorized workspace id and leaves the current workspace unchanged', async () => {
    const owner = await registerUser('deny-owner');
    const stranger = await registerUser('deny-stranger');
    const orgOwned = await createOrg(owner.token, `Deny Owned ${runId}`);
    const orgNotOwned = await createOrg(
      stranger.token,
      `Deny Not Owned ${runId}`,
    );

    // Establish a current workspace first.
    await request(app.getHttpServer())
      .post(`/organizations/${orgOwned}/select`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(201);

    // Attempting to switch into a workspace the user doesn't belong to is denied...
    await request(app.getHttpServer())
      .post(`/organizations/${orgNotOwned}/select`)
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(404);

    // ...and does not disturb the previously selected workspace.
    const me = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${owner.token}`)
      .expect(200);
    expect(me.body.currentOrganizationId).toBe(orgOwned);
  });

  it('deep links re-validate authorization against the URL, ignoring any stale organization claim on the token', async () => {
    const user = await registerUser('deep-link');
    const orgA = await createOrg(user.token, `Deep Link A ${runId}`);
    const orgB = await createOrg(user.token, `Deep Link B ${runId}`);
    const otherOwner = await registerUser('deep-link-other');
    const orgC = await createOrg(otherOwner.token, `Deep Link C ${runId}`);

    // Mint a token whose embedded workspace is orgA...
    const selectRes = await request(app.getHttpServer())
      .post(`/organizations/${orgA}/select`)
      .set('Authorization', `Bearer ${user.token}`)
      .expect(201);
    const tokenWithOrgAClaim = selectRes.body.accessToken as string;

    // ...but a deep link to orgB (where the user is also genuinely a member) must work,
    // scoped correctly to orgB, regardless of the token's embedded claim.
    const clientInB = await request(app.getHttpServer())
      .post(`/organizations/${orgB}/clients`)
      .set('Authorization', `Bearer ${tokenWithOrgAClaim}`)
      .send({ name: 'Deep Link Client' })
      .expect(201);
    expect(clientInB.body.organizationId).toBe(orgB);

    // ...and a deep link to orgC, which the user has no membership in, is still denied,
    // even though the token is otherwise valid.
    await request(app.getHttpServer())
      .get(`/organizations/${orgC}/clients`)
      .set('Authorization', `Bearer ${tokenWithOrgAClaim}`)
      .expect(404);
  });

  it('a stale selected workspace that was later revoked is dropped from "current" rather than leaking access', async () => {
    const owner = await registerUser('revoke-owner');
    const member = await registerUser('revoke-member');
    const orgId = await createOrg(owner.token, `Revoke Org ${runId}`);

    const memberRole = await prisma.role.findFirstOrThrow({
      where: { organizationId: orgId, systemKey: SystemRoleKey.MEMBER },
    });
    await prisma.membership.create({
      data: { userId: member.id, organizationId: orgId, roleId: memberRole.id },
    });
    await request(app.getHttpServer())
      .post(`/organizations/${orgId}/select`)
      .set('Authorization', `Bearer ${member.token}`)
      .expect(201);

    // Membership revoked out-of-band.
    await prisma.membership.delete({
      where: {
        userId_organizationId: { userId: member.id, organizationId: orgId },
      },
    });

    const me = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${member.token}`)
      .expect(200);
    expect(me.body.currentOrganizationId).toBeNull();
    expect(me.body.organizations).toEqual([]);
  });
});
