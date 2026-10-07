import {
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RiskLevel } from '../../generated/prisma/enums.js';

export class CreateApprovalRequestDto {
  @IsEnum(RiskLevel)
  riskLevel!: RiskLevel;

  /** Free-form key identifying what kind of action this is, e.g. "client.archive". */
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  actionType!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(2000)
  summary!: string;

  @IsOptional()
  @IsObject()
  payload?: Record<string, unknown>;
}
