var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsEnum, IsIn } from 'class-validator';
import { PermissionAction } from '../../generated/prisma/enums.js';
import { PERMISSION_MODULES, WILDCARD_MODULE, } from '../../common/permission-modules.js';
export class PermissionGrantDto {
    module;
    action;
}
__decorate([
    IsIn([...PERMISSION_MODULES, WILDCARD_MODULE]),
    __metadata("design:type", String)
], PermissionGrantDto.prototype, "module", void 0);
__decorate([
    IsEnum(PermissionAction),
    __metadata("design:type", String)
], PermissionGrantDto.prototype, "action", void 0);
//# sourceMappingURL=permission-grant.dto.js.map