import { RiskLevel } from '../../generated/prisma/enums.js';
export declare class ApprovalThresholdDto {
    riskLevel: RiskLevel;
    dualApprovalRequired: boolean;
    roleIds: string[];
}
