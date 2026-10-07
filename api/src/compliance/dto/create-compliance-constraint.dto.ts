import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ComplianceCategory, RiskLevel } from '../../generated/prisma/enums.js';

export class CreateComplianceConstraintDto {
  @IsEnum(ComplianceCategory)
  category!: ComplianceCategory;

  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  description!: string;

  @IsEnum(RiskLevel)
  riskLevel!: RiskLevel;

  /** Ignored (forced true) when riskLevel is HIGH or CRITICAL. */
  @IsOptional()
  @IsBoolean()
  disableAutoExecution?: boolean;
}
