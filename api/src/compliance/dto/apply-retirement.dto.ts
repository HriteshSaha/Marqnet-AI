import { IsUUID } from 'class-validator';

export class ApplyRetirementDto {
  @IsUUID()
  approvalRequestId!: string;
}
