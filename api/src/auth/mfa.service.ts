import { Injectable } from '@nestjs/common';
import { generateSecret, generateURI, verify } from 'otplib';

const ISSUER = 'AI Marketing Operations Platform';

@Injectable()
export class MfaService {
  generateSecret(): string {
    return generateSecret();
  }

  keyUri(email: string, secret: string): string {
    return generateURI({ issuer: ISSUER, label: email, secret });
  }

  async verify(code: string, secret: string): Promise<boolean> {
    try {
      const result = await verify({ secret, token: code });
      return result.valid;
    } catch {
      return false;
    }
  }
}
