var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsOptional, IsString, IsUrl, MaxLength, MinLength, } from 'class-validator';
export class BusinessProfileDto {
    businessDescription;
    website;
    industry;
    productsServices;
    brandVoice;
}
__decorate([
    IsString(),
    MinLength(10),
    MaxLength(4000),
    __metadata("design:type", String)
], BusinessProfileDto.prototype, "businessDescription", void 0);
__decorate([
    IsOptional(),
    IsUrl(),
    __metadata("design:type", String)
], BusinessProfileDto.prototype, "website", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], BusinessProfileDto.prototype, "industry", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], BusinessProfileDto.prototype, "productsServices", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(2000),
    __metadata("design:type", String)
], BusinessProfileDto.prototype, "brandVoice", void 0);
//# sourceMappingURL=business-profile.dto.js.map