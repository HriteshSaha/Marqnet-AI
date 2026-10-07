import { JwtService } from '@nestjs/jwt';
export interface AccessTokenPayload {
    sub: string;
    email: string;
    sid: string;
    organizationId?: string;
    role?: string;
}
export declare class TokenService {
    private readonly jwt;
    constructor(jwt: JwtService);
    sign(payload: AccessTokenPayload, expiresInSeconds: number): string;
}
