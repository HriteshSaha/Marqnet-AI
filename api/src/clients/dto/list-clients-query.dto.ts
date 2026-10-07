import { Transform } from 'class-transformer';
import { IsOptional, IsBoolean } from 'class-validator';

export class ListClientsQueryDto {
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  includeArchived?: boolean;
}
