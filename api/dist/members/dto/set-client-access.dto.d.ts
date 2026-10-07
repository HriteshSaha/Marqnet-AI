import { ClientAccessScope } from '../../generated/prisma/enums.js';
export declare class SetClientAccessDto {
    scope: ClientAccessScope;
    clientIds?: string[];
}
