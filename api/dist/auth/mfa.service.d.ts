export declare class MfaService {
    generateSecret(): string;
    keyUri(email: string, secret: string): string;
    verify(code: string, secret: string): Promise<boolean>;
}
