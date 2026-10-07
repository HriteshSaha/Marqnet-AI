import { RiskLevel } from '../../generated/prisma/enums.js';
export declare class CreateApprovalRequestDto {
    riskLevel: RiskLevel;
    actionType: string;
    summary: string;
    payload?: Record<string, unknown>;
}
