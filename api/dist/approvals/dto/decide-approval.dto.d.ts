import { ApprovalDecisionValue } from '../../generated/prisma/enums.js';
export declare class DecideApprovalDto {
    decision: ApprovalDecisionValue;
    comment?: string;
}
