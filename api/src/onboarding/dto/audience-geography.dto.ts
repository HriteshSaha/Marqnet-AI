import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AudienceGeographyDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(100)
  @ArrayUnique()
  @IsString({ each: true })
  targetGeographies!: string[];

  @IsString()
  @MinLength(5)
  @MaxLength(2000)
  targetAudience!: string;
}
