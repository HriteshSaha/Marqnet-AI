import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtStrategy } from './strategies/jwt.strategy.js';
import { TokenModule } from './token.module.js';
import { MfaService } from './mfa.service.js';
import { SessionsModule } from '../sessions/sessions.module.js';

@Module({
  imports: [
    PassportModule,
    TokenModule,
    SessionsModule,
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            ttl:
              Number(config.get<string>('AUTH_THROTTLE_TTL_SECONDS', '60')) *
              1000,
            limit: Number(config.get<string>('AUTH_THROTTLE_LIMIT', '5')),
          },
        ],
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, MfaService],
  exports: [AuthService],
})
export class AuthModule {}
