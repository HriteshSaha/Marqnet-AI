import { PrismaService } from '../prisma/prisma.service.js';
import { TokenService } from './token.service.js';
import { SessionsService, type SessionMeta } from '../sessions/sessions.service.js';
import { MfaService } from './mfa.service.js';
import type { RegisterDto } from './dto/register.dto.js';
import type { LoginDto } from './dto/login.dto.js';
import type { VerifyMfaDto } from './dto/verify-mfa.dto.js';
import type { ChangePasswordDto } from './dto/change-password.dto.js';
export interface AuthenticatedUser {
    id: string;
    email: string;
    fullName: string | null;
    sessionId: string;
    activeOrganizationId?: string;
}
export interface WorkspaceSummary {
    id: string;
    name: string;
    slug: string;
    type: string;
    role: string;
}
export interface SessionSummary {
    id: string;
    createdAt: Date;
    expiresAt: Date;
    ipAddress: string | null;
    userAgent: string | null;
    isCurrent: boolean;
}
export declare class AuthService {
    private readonly prisma;
    private readonly tokens;
    private readonly sessions;
    private readonly mfa;
    constructor(prisma: PrismaService, tokens: TokenService, sessions: SessionsService, mfa: MfaService);
    register(dto: RegisterDto, meta?: SessionMeta): Promise<{
        user: AuthenticatedUser;
        accessToken: string;
    }>;
    login(dto: LoginDto, meta?: SessionMeta): Promise<{
        user: AuthenticatedUser;
        accessToken: string;
    }>;
    getProfile(userId: string): Promise<{
        user: {
            id: string;
            email: string;
            fullName: string | null;
            mfaEnabled: boolean;
        };
        organizations: WorkspaceSummary[];
        currentOrganizationId: string | null;
    }>;
    startMfaSetup(userId: string): Promise<{
        secret: string;
        otpauthUrl: string;
    }>;
    confirmMfaSetup(userId: string, dto: VerifyMfaDto): Promise<void>;
    disableMfa(userId: string, dto: VerifyMfaDto): Promise<void>;
    listSessions(userId: string, currentSessionId: string): Promise<SessionSummary[]>;
    revokeSession(sessionId: string, userId: string): Promise<void>;
    revokeAllSessions(userId: string, currentSessionId: string, keepCurrent?: boolean): Promise<void>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<void>;
    private createSessionAndToken;
    private recordLoginFailure;
}
