import { generate } from 'otplib';
import { MfaService } from './mfa.service.js';

describe('MfaService', () => {
  const service = new MfaService();

  it('generates a secret and produces an otpauth:// URI containing it', () => {
    const secret = service.generateSecret();
    expect(secret.length).toBeGreaterThan(0);

    const uri = service.keyUri('user@example.com', secret);
    expect(uri.startsWith('otpauth://totp/')).toBe(true);
    expect(uri).toContain(encodeURIComponent(secret));
  });

  it('verifies a code generated from the same secret', async () => {
    const secret = service.generateSecret();
    const code = await generate({ secret });

    expect(await service.verify(code, secret)).toBe(true);
  });

  it('rejects an incorrect code', async () => {
    const secret = service.generateSecret();
    expect(await service.verify('000000', secret)).toBe(false);
  });

  it('rejects a malformed code instead of throwing', async () => {
    const secret = service.generateSecret();
    expect(await service.verify('not-a-code', secret)).toBe(false);
  });
});
