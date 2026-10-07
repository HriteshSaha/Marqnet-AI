import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';
import { OrganizationsModule } from './organizations/organizations.module.js';
import { ClientsModule } from './clients/clients.module.js';
import { RolesModule } from './roles/roles.module.js';
import { MembersModule } from './members/members.module.js';
import { ApprovalsModule } from './approvals/approvals.module.js';
import { OnboardingModule } from './onboarding/onboarding.module.js';
import { KpiGuardrailsModule } from './kpi-guardrails/kpi-guardrails.module.js';
import { ComplianceModule } from './compliance/compliance.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    OrganizationsModule,
    ClientsModule,
    RolesModule,
    MembersModule,
    ApprovalsModule,
    OnboardingModule,
    KpiGuardrailsModule,
    ComplianceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
