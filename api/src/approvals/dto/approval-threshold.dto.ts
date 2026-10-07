import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsUUID,
} from 'class-validator';
import { RiskLevel } from '../../generated/prisma/enums.js';

export class ApprovalThresholdDto {
  @IsEnum(RiskLevel)
  riskLevel!: RiskLevel;

  @IsBoolean()
  dualApprovalRequired!: boolean;

  @IsArray()
  @ArrayMaxSize(50)
  @IsUUID('4', { each: true })
  roleIds!: string[];
}
