import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export interface AccessTokenPayload {
  sub: string;
  email: string;
  /** Session this token is bound to (EP-02-US-01). Revoking the session invalidates the token immediately. */
  sid: string;
  /** Workspace the token was minted for (EP-01-US-03). Never trusted for authorization by itself. */
  organizationId?: string;
  /** Display name of the role at mint time (EP-03-US-01) — informational only, never checked for authorization. */
  role?: string;
}

@Injectable()
export class TokenService {
  constructor(private readonly jwt: JwtService) {}

  /** @param expiresInSeconds Ties the token's own exp to its backing Session's expiresAt. */
  sign(payload: AccessTokenPayload, expiresInSeconds: number): string {
    return this.jwt.sign(payload, { expiresIn: expiresInSeconds });
  }
}
