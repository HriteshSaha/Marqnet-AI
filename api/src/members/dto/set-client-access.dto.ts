import {
  ArrayMaxSize,
  IsArray,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { ClientAccessScope } from '../../generated/prisma/enums.js';

export class SetClientAccessDto {
  @IsEnum(ClientAccessScope)
  scope!: ClientAccessScope;

  /** Required when scope is RESTRICTED; ignored (and cleared) when scope is ALL. */
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(500)
  @IsUUID('4', { each: true })
  clientIds?: string[];
}
