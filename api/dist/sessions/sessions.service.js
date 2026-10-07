var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service.js';
let SessionsService = class SessionsService {
    prisma;
    config;
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    defaultTtlMinutes() {
        return Number(this.config.get('SESSION_DEFAULT_TTL_MINUTES', '1440'));
    }
    async create(userId, meta, ttlMinutes = this.defaultTtlMinutes()) {
        return this.prisma.session.create({
            data: {
                userId,
                ipAddress: meta.ipAddress,
                userAgent: meta.userAgent,
                expiresAt: new Date(Date.now() + ttlMinutes * 60_000),
            },
        });
    }
    async validate(sessionId) {
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
        });
        if (!session || session.revokedAt || session.expiresAt <= new Date()) {
            return null;
        }
        return session;
    }
    async applyTtlPolicy(sessionId, ttlMinutes) {
        await this.prisma.session.update({
            where: { id: sessionId },
            data: { expiresAt: new Date(Date.now() + ttlMinutes * 60_000) },
        });
    }
    async revoke(sessionId) {
        await this.prisma.session.updateMany({
            where: { id: sessionId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async revokeOwnedByUser(sessionId, userId) {
        const result = await this.prisma.session.updateMany({
            where: { id: sessionId, userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
        return result.count > 0;
    }
    async revokeAllForUser(userId, exceptSessionId) {
        await this.prisma.session.updateMany({
            where: {
                userId,
                revokedAt: null,
                ...(exceptSessionId ? { id: { not: exceptSessionId } } : {}),
            },
            data: { revokedAt: new Date() },
        });
    }
    async listActiveForUser(userId) {
        return this.prisma.session.findMany({
            where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
            orderBy: { createdAt: 'desc' },
        });
    }
};
SessionsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        ConfigService])
], SessionsService);
export { SessionsService };
//# sourceMappingURL=sessions.service.js.map