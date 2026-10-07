import { BusinessGoal, KpiType } from '../../generated/prisma/enums.js';
export declare class GoalsAndKpisDto {
    primaryGoal: BusinessGoal;
    secondaryGoals?: BusinessGoal[];
    primaryKpi: KpiType;
    secondaryKpis?: KpiType[];
}
