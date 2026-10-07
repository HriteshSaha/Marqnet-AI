import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service.js';
import { SessionsService } from '../../sessions/sessions.service.js';
import type { AuthenticatedUser } from '../auth.service.js';

interface JwtPayload {
  sub: string;
  email: string;
  sid: string;
  organizationId?: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly sessions: SessionsService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('JWT_ACCESS_SECRET'),
    });
  }

  async validate(payload: JwtPayload): Promise<AuthenticatedUser> {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      throw new UnauthorizedException('User no longer exists');
    }

    const session = await this.sessions.validate(payload.sid);
    if (!session) {
      throw new UnauthorizedException('Session has expired or been revoked');
    }

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      sessionId: session.id,
      activeOrganizationId: payload.organizationId,
    };
  }
}
