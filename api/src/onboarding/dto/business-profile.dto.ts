import {
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class BusinessProfileDto {
  @IsString()
  @MinLength(10)
  @MaxLength(4000)
  businessDescription!: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  industry?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  productsServices?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  brandVoice?: string;
}
