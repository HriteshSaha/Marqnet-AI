import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Session } from '../generated/prisma/client.js';

export interface SessionMeta {
  ipAddress?: string;
  userAgent?: string;
}

@Injectable()
export class SessionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  defaultTtlMinutes(): number {
    return Number(
      this.config.get<string>('SESSION_DEFAULT_TTL_MINUTES', '1440'),
    );
  }

  async create(
    userId: string,
    meta: SessionMeta,
    ttlMinutes = this.defaultTtlMinutes(),
  ): Promise<Session> {
    return this.prisma.session.create({
      data: {
        userId,
        ipAddress: meta.ipAddress,
        userAgent: meta.userAgent,
        expiresAt: new Date(Date.now() + ttlMinutes * 60_000),
      },
    });
  }

  /** Returns the session if it exists, isn't revoked, and hasn't expired; otherwise null. */
  async validate(sessionId: string): Promise<Session | null> {
    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
    });
    if (!session || session.revokedAt || session.expiresAt <= new Date()) {
      return null;
    }
    return session;
  }

  /** Re-applies a (possibly org-specific) TTL policy to an existing session, e.g. on workspace switch. */
  async applyTtlPolicy(sessionId: string, ttlMinutes: number): Promise<void> {
    await this.prisma.session.update({
      where: { id: sessionId },
      data: { expiresAt: new Date(Date.now() + ttlMinutes * 60_000) },
    });
  }

  async revoke(sessionId: string): Promise<void> {
    await this.prisma.session.updateMany({
      where: { id: sessionId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  /**
   * Revokes a session only if it belongs to `userId` — so one user can never
   * revoke another's session by guessing or enumerating ids. Returns whether
   * an (owned, still-active) session was actually revoked.
   */
  async revokeOwnedByUser(sessionId: string, userId: string): Promise<boolean> {
    const result = await this.prisma.session.updateMany({
      where: { id: sessionId, userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
    return result.count > 0;
  }

  async revokeAllForUser(
    userId: string,
    exceptSessionId?: string,
  ): Promise<void> {
    await this.prisma.session.updateMany({
      where: {
        userId,
        revokedAt: null,
        ...(exceptSessionId ? { id: { not: exceptSessionId } } : {}),
      },
      data: { revokedAt: new Date() },
    });
  }

  async listActiveForUser(userId: string): Promise<Session[]> {
    return this.prisma.session.findMany({
      where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' },
    });
  }
}
