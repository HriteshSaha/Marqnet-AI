import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { ApprovalThresholdDto } from './approval-threshold.dto.js';

export class SetApprovalPolicyDto {
  @IsBoolean()
  allowSelfApproval!: boolean;

  /** Must cover each RiskLevel exactly once — validated in the service, where the full enum list lives. */
  @IsArray()
  @ArrayMinSize(4)
  @ArrayMaxSize(4)
  @ValidateNested({ each: true })
  @Type(() => ApprovalThresholdDto)
  thresholds!: ApprovalThresholdDto[];
}
