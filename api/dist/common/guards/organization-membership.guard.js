var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
let OrganizationMembershipGuard = class OrganizationMembershipGuard {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const organizationId = request.params['organizationId'];
        if (!organizationId) {
            throw new NotFoundException('Organization not found');
        }
        const membership = await this.prisma.membership.findUnique({
            where: {
                userId_organizationId: { userId: request.user.id, organizationId },
            },
            include: { role: true },
        });
        if (!membership) {
            throw new NotFoundException('Organization not found');
        }
        request.membership = membership;
        return true;
    }
};
OrganizationMembershipGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OrganizationMembershipGuard);
export { OrganizationMembershipGuard };
//# sourceMappingURL=organization-membership.guard.js.map