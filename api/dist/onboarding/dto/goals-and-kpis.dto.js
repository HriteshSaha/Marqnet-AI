var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ArrayMaxSize, ArrayUnique, IsArray, IsEnum, IsOptional, } from 'class-validator';
import { BusinessGoal, KpiType } from '../../generated/prisma/enums.js';
export class GoalsAndKpisDto {
    primaryGoal;
    secondaryGoals;
    primaryKpi;
    secondaryKpis;
}
__decorate([
    IsEnum(BusinessGoal),
    __metadata("design:type", String)
], GoalsAndKpisDto.prototype, "primaryGoal", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ArrayMaxSize(Object.keys(BusinessGoal).length),
    ArrayUnique(),
    IsEnum(BusinessGoal, { each: true }),
    __metadata("design:type", Array)
], GoalsAndKpisDto.prototype, "secondaryGoals", void 0);
__decorate([
    IsEnum(KpiType),
    __metadata("design:type", String)
], GoalsAndKpisDto.prototype, "primaryKpi", void 0);
__decorate([
    IsOptional(),
    IsArray(),
    ArrayMaxSize(Object.keys(KpiType).length),
    ArrayUnique(),
    IsEnum(KpiType, { each: true }),
    __metadata("design:type", Array)
], GoalsAndKpisDto.prototype, "secondaryKpis", void 0);
//# sourceMappingURL=goals-and-kpis.dto.js.map