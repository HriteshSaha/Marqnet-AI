import { IsOptional, IsString, MaxLength } from 'class-validator';

export class RequestRetirementDto {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  comment?: string;
}
