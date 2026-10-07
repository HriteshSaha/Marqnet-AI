import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Session } from '../generated/prisma/client.js';
export interface SessionMeta {
    ipAddress?: string;
    userAgent?: string;
}
export declare class SessionsService {
    private readonly prisma;
    private readonly config;
    constructor(prisma: PrismaService, config: ConfigService);
    defaultTtlMinutes(): number;
    create(userId: string, meta: SessionMeta, ttlMinutes?: number): Promise<Session>;
    validate(sessionId: string): Promise<Session | null>;
    applyTtlPolicy(sessionId: string, ttlMinutes: number): Promise<void>;
    revoke(sessionId: string): Promise<void>;
    revokeOwnedByUser(sessionId: string, userId: string): Promise<boolean>;
    revokeAllForUser(userId: string, exceptSessionId?: string): Promise<void>;
    listActiveForUser(userId: string): Promise<Session[]>;
}
