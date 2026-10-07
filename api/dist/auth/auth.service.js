var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, UnauthorizedException, } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { TokenService } from './token.service.js';
import { SessionsService, } from '../sessions/sessions.service.js';
import { MfaService } from './mfa.service.js';
const MFA_REQUIRED_ERROR = {
    statusCode: 401,
    error: 'mfa_required',
    message: 'Multi-factor authentication code required',
};
let AuthService = class AuthService {
    prisma;
    tokens;
    sessions;
    mfa;
    constructor(prisma, tokens, sessions, mfa) {
        this.prisma = prisma;
        this.tokens = tokens;
        this.sessions = sessions;
        this.mfa = mfa;
    }
    async register(dto, meta = {}) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new ConflictException('An account with this email already exists');
        }
        const passwordHash = await argon2.hash(dto.password);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                passwordHash,
                fullName: dto.fullName ?? null,
            },
        });
        return this.createSessionAndToken(user, meta);
    }
    async login(dto, meta = {}) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            await this.recordLoginFailure(null, dto.email, 'unknown_account');
            throw new UnauthorizedException('Invalid email or password');
        }
        const passwordValid = await argon2.verify(user.passwordHash, dto.password);
        if (!passwordValid) {
            await this.recordLoginFailure(user.id, dto.email, 'invalid_password');
            throw new UnauthorizedException('Invalid email or password');
        }
        if (user.mfaEnabled) {
            if (!dto.mfaCode) {
                throw new UnauthorizedException(MFA_REQUIRED_ERROR);
            }
            if (!user.mfaSecret ||
                !(await this.mfa.verify(dto.mfaCode, user.mfaSecret))) {
                await this.recordLoginFailure(user.id, dto.email, 'invalid_mfa_code');
                throw new UnauthorizedException('Invalid authentication code');
            }
        }
        const result = await this.createSessionAndToken(user, meta);
        await this.prisma.auditLog.create({
            data: {
                actorUserId: user.id,
                action: AuditAction.LOGIN_SUCCEEDED,
                targetType: 'User',
                targetId: user.id,
                metadata: {
                    ipAddress: meta.ipAddress ?? null,
                    userAgent: meta.userAgent ?? null,
                },
            },
        });
        return result;
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
        });
        const memberships = await this.prisma.membership.findMany({
            where: { userId, organization: { archivedAt: null } },
            include: { organization: true, role: true },
            orderBy: { createdAt: 'asc' },
        });
        const organizations = memberships.map((m) => ({
            id: m.organization.id,
            name: m.organization.name,
            slug: m.organization.slug,
            type: m.organization.type,
            role: m.role.name,
        }));
        const currentOrganizationId = organizations.some((o) => o.id === user.lastSelectedOrganizationId)
            ? user.lastSelectedOrganizationId
            : null;
        return {
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                mfaEnabled: user.mfaEnabled,
            },
            organizations,
            currentOrganizationId,
        };
    }
    async startMfaSetup(userId) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
        });
        if (user.mfaEnabled) {
            throw new ConflictException('MFA is already enabled; disable it before setting up again');
        }
        const secret = this.mfa.generateSecret();
        await this.prisma.user.update({
            where: { id: userId },
            data: { mfaSecret: secret },
        });
        return { secret, otpauthUrl: this.mfa.keyUri(user.email, secret) };
    }
    async confirmMfaSetup(userId, dto) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
        });
        if (user.mfaEnabled) {
            throw new ConflictException('MFA is already enabled');
        }
        if (!user.mfaSecret) {
            throw new BadRequestException('Start MFA setup before confirming it');
        }
        if (!(await this.mfa.verify(dto.code, user.mfaSecret))) {
            throw new UnauthorizedException('Invalid authentication code');
        }
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: userId },
                data: { mfaEnabled: true },
            }),
            this.prisma.auditLog.create({
                data: {
                    actorUserId: userId,
                    action: AuditAction.MFA_ENABLED,
                    targetType: 'User',
                    targetId: userId,
                },
            }),
        ]);
    }
    async disableMfa(userId, dto) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
        });
        if (!user.mfaEnabled || !user.mfaSecret) {
            throw new ConflictException('MFA is not enabled');
        }
        if (!(await this.mfa.verify(dto.code, user.mfaSecret))) {
            throw new UnauthorizedException('Invalid authentication code');
        }
        await this.prisma.$transaction([
            this.prisma.user.update({
                where: { id: userId },
                data: { mfaEnabled: false, mfaSecret: null },
            }),
            this.prisma.auditLog.create({
                data: {
                    actorUserId: userId,
                    action: AuditAction.MFA_DISABLED,
                    targetType: 'User',
                    targetId: userId,
                },
            }),
        ]);
    }
    async listSessions(userId, currentSessionId) {
        const sessions = await this.sessions.listActiveForUser(userId);
        return sessions.map((s) => ({
            id: s.id,
            createdAt: s.createdAt,
            expiresAt: s.expiresAt,
            ipAddress: s.ipAddress,
            userAgent: s.userAgent,
            isCurrent: s.id === currentSessionId,
        }));
    }
    async revokeSession(sessionId, userId) {
        const revoked = await this.sessions.revokeOwnedByUser(sessionId, userId);
        if (!revoked) {
            throw new NotFoundException('Session not found');
        }
        await this.prisma.auditLog.create({
            data: {
                actorUserId: userId,
                action: AuditAction.SESSION_REVOKED,
                targetType: 'Session',
                targetId: sessionId,
            },
        });
    }
    async revokeAllSessions(userId, currentSessionId, keepCurrent = true) {
        await this.sessions.revokeAllForUser(userId, keepCurrent ? currentSessionId : undefined);
        await this.prisma.auditLog.create({
            data: {
                actorUserId: userId,
                action: AuditAction.SESSION_REVOKED_ALL,
                targetType: 'User',
                targetId: userId,
                metadata: { keptCurrentSession: keepCurrent },
            },
        });
    }
    async changePassword(userId, dto) {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id: userId },
        });
        const currentValid = await argon2.verify(user.passwordHash, dto.currentPassword);
        if (!currentValid) {
            throw new UnauthorizedException('Current password is incorrect');
        }
        const passwordHash = await argon2.hash(dto.newPassword);
        await this.prisma.user.update({
            where: { id: userId },
            data: { passwordHash },
        });
        await this.sessions.revokeAllForUser(userId);
        await this.prisma.auditLog.create({
            data: {
                actorUserId: userId,
                action: AuditAction.PASSWORD_CHANGED,
                targetType: 'User',
                targetId: userId,
            },
        });
    }
    async createSessionAndToken(user, meta) {
        const ttlMinutes = this.sessions.defaultTtlMinutes();
        const session = await this.sessions.create(user.id, meta, ttlMinutes);
        const accessToken = this.tokens.sign({ sub: user.id, email: user.email, sid: session.id }, ttlMinutes * 60);
        return {
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                sessionId: session.id,
            },
            accessToken,
        };
    }
    async recordLoginFailure(userId, email, reason) {
        await this.prisma.auditLog.create({
            data: {
                actorUserId: userId,
                action: AuditAction.LOGIN_FAILED,
                targetType: 'User',
                targetId: userId,
                metadata: { email, reason },
            },
        });
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        TokenService,
        SessionsService,
        MfaService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map