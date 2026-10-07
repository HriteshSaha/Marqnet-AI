var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Req, UseGuards, } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { VerifyMfaDto } from './dto/verify-mfa.dto.js';
import { ChangePasswordDto } from './dto/change-password.dto.js';
import { RevokeAllSessionsDto } from './dto/revoke-all-sessions.dto.js';
import { JwtAuthGuard } from './guards/jwt-auth.guard.js';
import { CurrentUser } from './decorators/current-user.decorator.js';
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(dto, req) {
        return this.authService.register(dto, sessionMetaFrom(req));
    }
    login(dto, req) {
        return this.authService.login(dto, sessionMetaFrom(req));
    }
    me(user) {
        return this.authService.getProfile(user.id);
    }
    startMfaSetup(user) {
        return this.authService.startMfaSetup(user.id);
    }
    confirmMfaSetup(dto, user) {
        return this.authService.confirmMfaSetup(user.id, dto);
    }
    disableMfa(dto, user) {
        return this.authService.disableMfa(user.id, dto);
    }
    listSessions(user) {
        return this.authService.listSessions(user.id, user.sessionId);
    }
    revokeSession(sessionId, user) {
        return this.authService.revokeSession(sessionId, user.id);
    }
    revokeAllSessions(dto, user) {
        return this.authService.revokeAllSessions(user.id, user.sessionId, dto.keepCurrent ?? true);
    }
    changePassword(dto, user) {
        return this.authService.changePassword(user.id, dto);
    }
};
__decorate([
    Post('register'),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    Post('login'),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    Get('me'),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
__decorate([
    Post('mfa/setup'),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "startMfaSetup", null);
__decorate([
    Post('mfa/enable'),
    UseGuards(JwtAuthGuard),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyMfaDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "confirmMfaSetup", null);
__decorate([
    Post('mfa/disable'),
    UseGuards(JwtAuthGuard),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyMfaDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "disableMfa", null);
__decorate([
    Get('sessions'),
    UseGuards(JwtAuthGuard),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "listSessions", null);
__decorate([
    Delete('sessions/:sessionId'),
    UseGuards(JwtAuthGuard),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, Param('sessionId')),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "revokeSession", null);
__decorate([
    Post('sessions/revoke-all'),
    UseGuards(JwtAuthGuard),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RevokeAllSessionsDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "revokeAllSessions", null);
__decorate([
    Post('change-password'),
    UseGuards(JwtAuthGuard),
    HttpCode(HttpStatus.NO_CONTENT),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangePasswordDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    UseGuards(ThrottlerGuard),
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService])
], AuthController);
export { AuthController };
function sessionMetaFrom(req) {
    return { ipAddress: req.ip, userAgent: req.headers['user-agent'] };
}
//# sourceMappingURL=auth.controller.js.map