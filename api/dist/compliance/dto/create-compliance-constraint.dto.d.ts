import { ComplianceCategory, RiskLevel } from '../../generated/prisma/enums.js';
export declare class CreateComplianceConstraintDto {
    category: ComplianceCategory;
    description: string;
    riskLevel: RiskLevel;
    disableAutoExecution?: boolean;
}
