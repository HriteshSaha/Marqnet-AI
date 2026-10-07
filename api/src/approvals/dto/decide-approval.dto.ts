import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApprovalDecisionValue } from '../../generated/prisma/enums.js';

export class DecideApprovalDto {
  @IsEnum(ApprovalDecisionValue)
  decision!: ApprovalDecisionValue;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  comment?: string;
}
