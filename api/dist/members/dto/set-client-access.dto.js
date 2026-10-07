var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ArrayMaxSize, IsArray, IsEnum, IsOptional, IsUUID, } from 'class-validator';
import { ClientAccessScope } from '../../generated/prisma/enums.js';
export class SetClientAccessDto {
    scope;
    clientIds;
}
__decorate([
    IsEnum(ClientAccessScope),
    __metadata("design:type", String)
], SetClientAccessDto.prototype, "scope", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ArrayMaxSize(500),
    IsUUID('4', { each: true }),
    __metadata("design:type", Array)
], SetClientAccessDto.prototype, "clientIds", void 0);
//# sourceMappingURL=set-client-access.dto.js.map