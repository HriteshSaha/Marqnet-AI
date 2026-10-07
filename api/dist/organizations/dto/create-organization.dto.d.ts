import { OrganizationType } from '../../generated/prisma/enums.js';
export declare class CreateOrganizationDto {
    name: string;
    slug?: string;
    type: OrganizationType;
    locale?: string;
    currency?: string;
    timezone?: string;
}
