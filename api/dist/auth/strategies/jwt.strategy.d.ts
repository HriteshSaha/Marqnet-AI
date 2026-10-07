import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service.js';
import { SessionsService } from '../../sessions/sessions.service.js';
import type { AuthenticatedUser } from '../auth.service.js';
interface JwtPayload {
    sub: string;
    email: string;
    sid: string;
    organizationId?: string;
}
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prisma;
    private readonly sessions;
    constructor(config: ConfigService, prisma: PrismaService, sessions: SessionsService);
    validate(payload: JwtPayload): Promise<AuthenticatedUser>;
}
export {};
