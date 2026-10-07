import { PrismaService } from '../prisma/prisma.service.js';
import { ClientAccessScope } from '../generated/prisma/enums.js';
import type { SetClientAccessDto } from './dto/set-client-access.dto.js';
export type AccessibleClientIds = string[] | null;
export declare class ClientAccessService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAccessibleClientIds(membershipId: string): Promise<AccessibleClientIds>;
    getAccess(organizationId: string, targetUserId: string): Promise<{
        scope: ClientAccessScope;
        clientIds: string[];
    }>;
    setAccess(organizationId: string, targetUserId: string, dto: SetClientAccessDto, actorUserId: string): Promise<{
        scope: ClientAccessScope;
        clientIds: string[];
    }>;
}
