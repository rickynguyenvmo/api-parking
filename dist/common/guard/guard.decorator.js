"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.GuardPublic = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant/constant");
const GuardPublic = () => (0, common_1.SetMetadata)(constant_1.EGuardDecoratorKey.IS_PUBLIC_KEY, true);
exports.GuardPublic = GuardPublic;
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=guard.decorator.js.map