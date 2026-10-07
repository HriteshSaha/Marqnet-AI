import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { VerifyMfaDto } from './dto/verify-mfa.dto.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { RevokeAllSessionsDto } from './dto/revoke-all-sessions.dto.js';
import type { AuthenticatedUser } from './auth.service.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, req: Request): Promise<{
        user: AuthenticatedUser;
        accessToken: string;
    }>;
    login(dto: LoginDto, req: Request): Promise<{
        user: AuthenticatedUser;
        accessToken: string;
    }>;
    me(user: AuthenticatedUser): Promise<{
        user: {
            id: string;
            email: string;
            fullName: string | null;
            mfaEnabled: boolean;
        };
        organizations: import("./auth.service.js").WorkspaceSummary[];
        currentOrganizationId: string | null;
    }>;
    startMfaSetup(user: AuthenticatedUser): Promise<{
        secret: string;
        otpauthUrl: string;
    }>;
    confirmMfaSetup(dto: VerifyMfaDto, user: AuthenticatedUser): Promise<void>;
    disableMfa(dto: VerifyMfaDto, user: AuthenticatedUser): Promise<void>;
    listSessions(user: AuthenticatedUser): Promise<import("./auth.service.js").SessionSummary[]>;
    revokeSession(sessionId: string, user: AuthenticatedUser): Promise<void>;
    revokeAllSessions(dto: RevokeAllSessionsDto, user: AuthenticatedUser): Promise<void>;
    changePassword(dto: ChangePasswordDto, user: AuthenticatedUser): Promise<void>;
}
