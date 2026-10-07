import { IsISO4217CurrencyCode, IsNumber, IsOptional } from 'class-validator';

export class SetKpiGuardrailDto {
  @IsNumber()
  targetValue!: number;

  @IsNumber()
  acceptableMin!: number;

  @IsNumber()
  acceptableMax!: number;

  /** Omit to inherit the workspace's currency. */
  @IsOptional()
  @IsISO4217CurrencyCode()
  currency?: string;
}
