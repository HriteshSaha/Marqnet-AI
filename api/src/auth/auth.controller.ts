import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { VerifyMfaDto } from './dto/verify-mfa.dto.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { RevokeAllSessionsDto } from './dto/revoke-all-sessions.dto.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
import type { AuthenticatedUser } from './auth.service.js';
import type { SessionMeta } from '../sessions/sessions.service.js';

@UseGuards(ThrottlerGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto, @Req() req: Request) {
    return this.authService.register(dto, sessionMetaFrom(req));
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto, @Req() req: Request) {
    return this.authService.login(dto, sessionMetaFrom(req));
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: AuthenticatedUser) {
    return this.authService.getProfile(user.id);
  }

  @Post('mfa/setup')
  @UseGuards(JwtAuthGuard)
  startMfaSetup(@CurrentUser() user: AuthenticatedUser) {
    return this.authService.startMfaSetup(user.id);
  }

  @Post('mfa/enable')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  confirmMfaSetup(
    @Body() dto: VerifyMfaDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.authService.confirmMfaSetup(user.id, dto);
  }

  @Post('mfa/disable')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  disableMfa(
    @Body() dto: VerifyMfaDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.authService.disableMfa(user.id, dto);
  }

  /** EP-02-US-03: active sessions with device/time/IP metadata, current one flagged. */
  @Get('sessions')
  @UseGuards(JwtAuthGuard)
  listSessions(@CurrentUser() user: AuthenticatedUser) {
    return this.authService.listSessions(user.id, user.sessionId);
  }

  /** EP-02-US-03: revoke one session (e.g. a suspicious device) — its token stops working immediately. */
  @Delete('sessions/:sessionId')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  revokeSession(
    @Param('sessionId') sessionId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.authService.revokeSession(sessionId, user.id);
  }

  /** EP-02-US-03: "log out everywhere" (optionally keeping the current session alive). */
  @Post('sessions/revoke-all')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  revokeAllSessions(
    @Body() dto: RevokeAllSessionsDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.authService.revokeAllSessions(
      user.id,
      user.sessionId,
      dto.keepCurrent ?? true,
    );
  }

  /** Changing the password revokes every session for the account (EP-02-US-03). */
  @Post('change-password')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  changePassword(
    @Body() dto: ChangePasswordDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.authService.changePassword(user.id, dto);
  }
}

function sessionMetaFrom(req: Request): SessionMeta {
  return { ipAddress: req.ip, userAgent: req.headers['user-agent'] };
}
