import { IsEnum, IsIn } from 'class-validator';
import { PermissionAction } from '../../generated/prisma/enums.js';
import {
  PERMISSION_MODULES,
  WILDCARD_MODULE,
} from '../../common/permission-modules.js';

export class PermissionGrantDto {
  @IsIn([...PERMISSION_MODULES, WILDCARD_MODULE])
  module!: string;

  @IsEnum(PermissionAction)
  action!: PermissionAction;
}
