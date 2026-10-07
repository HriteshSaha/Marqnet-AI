import { ArrayMaxSize, ArrayUnique, IsArray, IsString } from 'class-validator';

export class CompetitorsDto {
  @IsArray()
  @ArrayMaxSize(50)
  @ArrayUnique()
  @IsString({ each: true })
  competitors!: string[];
}
