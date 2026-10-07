import { IsNumber, Min } from 'class-validator';

export class BudgetDto {
  @IsNumber()
  @Min(0)
  budgetMin!: number;

  @IsNumber()
  @Min(0)
  budgetMax!: number;
}
