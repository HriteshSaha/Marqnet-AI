import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AuditAction } from '../common/audit-actions.js';
import { GuardrailMetric } from '../generated/prisma/enums.js';
import type { KpiGuardrail } from '../generated/prisma/client.js';
import type { SetKpiGuardrailDto } from './dto/set-kpi-guardrail.dto.js';

@Injectable()
export class KpiGuardrailsService {
  constructor(private readonly prisma: PrismaService) {}

  /** The one active guardrail per metric that's been configured for this client. */
  async listCurrentForClient(clientId: string): Promise<KpiGuardrail[]> {
    return this.prisma.kpiGuardrail.findMany({
      where: { clientId, isCurrent: true },
      orderBy: { metric: 'asc' },
    });
  }

  /**
   * Hook point for future features (e.g. the AI recommendation engine) that
   * need to "cite the applicable KPI guardrail" — returns the active target
   * for a metric, or null if none has been set yet.
   */
  async getActiveGuardrail(
    clientId: string,
    metric: GuardrailMetric,
  ): Promise<KpiGuardrail | null> {
    return this.prisma.kpiGuardrail.findFirst({
      where: { clientId, metric, isCurrent: true },
    });
  }

  /** Full version history for one metric, newest first — "historical target changes are retained". */
  async getHistory(
    clientId: string,
    metric: GuardrailMetric,
  ): Promise<KpiGuardrail[]> {
    return this.prisma.kpiGuardrail.findMany({
      where: { clientId, metric },
      orderBy: { version: 'desc' },
    });
  }

  /**
   * Sets (or replaces) the guardrail for one metric. The previous current
   * version, if any, is closed out rather than overwritten. A target outside
   * [acceptableMin, acceptableMax] is still saved but reported as a warning
   * ("conflicting targets trigger validation warning") — an inverted range
   * is rejected outright as simply invalid input.
   */
  async setGuardrail(
    organizationId: string,
    clientId: string,
    metric: GuardrailMetric,
    dto: SetKpiGuardrailDto,
    actorUserId: string,
  ): Promise<{ guardrail: KpiGuardrail; warnings: string[] }> {
    if (dto.acceptableMin > dto.acceptableMax) {
      throw new BadRequestException(
        'acceptableMin must be less than or equal to acceptableMax',
      );
    }

    const organization = await this.prisma.organization.findUnique({
      where: { id: organizationId },
      select: { currency: true },
    });
    if (!organization) {
      throw new NotFoundException('Organization not found');
    }
    const currency = dto.currency ?? organization.currency;

    const warnings: string[] = [];
    if (
      dto.targetValue < dto.acceptableMin ||
      dto.targetValue > dto.acceptableMax
    ) {
      warnings.push(
        `Target value ${dto.targetValue} is outside the acceptable range [${dto.acceptableMin}, ${dto.acceptableMax}]`,
      );
    }

    const guardrail = await this.prisma.$transaction(async (tx) => {
      const previous = await tx.kpiGuardrail.findFirst({
        where: { clientId, metric, isCurrent: true },
      });
      if (previous) {
        await tx.kpiGuardrail.update({
          where: { id: previous.id },
          data: { isCurrent: false, supersededAt: new Date() },
        });
      }

      const created = await tx.kpiGuardrail.create({
        data: {
          clientId,
          metric,
          targetValue: dto.targetValue,
          acceptableMin: dto.acceptableMin,
          acceptableMax: dto.acceptableMax,
          currency,
          version: (previous?.version ?? 0) + 1,
          isCurrent: true,
          createdByUserId: actorUserId,
        },
      });

      await tx.auditLog.create({
        data: {
          organizationId,
          actorUserId,
          action: AuditAction.KPI_GUARDRAIL_SET,
          targetType: 'KpiGuardrail',
          targetId: created.id,
          metadata: {
            clientId,
            metric,
            targetValue: dto.targetValue,
            acceptableMin: dto.acceptableMin,
            acceptableMax: dto.acceptableMax,
            currency,
            version: created.version,
            warnings,
          },
        },
      });

      return created;
    });

    return { guardrail, warnings };
  }
}
