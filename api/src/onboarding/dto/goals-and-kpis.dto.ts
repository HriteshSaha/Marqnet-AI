import {
  ArrayMaxSize,
  ArrayUnique,
  IsArray,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { BusinessGoal, KpiType } from '../../generated/prisma/enums.js';

export class GoalsAndKpisDto {
  @IsEnum(BusinessGoal)
  primaryGoal!: BusinessGoal;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(Object.keys(BusinessGoal).length)
  @ArrayUnique()
  @IsEnum(BusinessGoal, { each: true })
  secondaryGoals?: BusinessGoal[];

  @IsEnum(KpiType)
  primaryKpi!: KpiType;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(Object.keys(KpiType).length)
  @ArrayUnique()
  @IsEnum(KpiType, { each: true })
  secondaryKpis?: KpiType[];
}
