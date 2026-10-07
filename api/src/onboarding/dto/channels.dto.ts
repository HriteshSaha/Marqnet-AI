import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsEnum,
} from 'class-validator';
import { MarketingChannel } from '../../generated/prisma/enums.js';

export class ChannelsDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(Object.keys(MarketingChannel).length)
  @ArrayUnique()
  @IsEnum(MarketingChannel, { each: true })
  channels!: MarketingChannel[];
}
