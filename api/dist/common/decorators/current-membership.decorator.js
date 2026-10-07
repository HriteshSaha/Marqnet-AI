import { createParamDecorator } from '@nestjs/common';
export const CurrentMembership = createParamDecorator((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.membership;
});
//# sourceMappingURL=current-membership.decorator.js.map