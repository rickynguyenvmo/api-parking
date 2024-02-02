"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const jwt_guard_1 = require("./jwt.guard");
const jwt_strategy_1 = require("./jwt.strategy");
let GuardModule = class GuardModule {
};
exports.GuardModule = GuardModule;
exports.GuardModule = GuardModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtAuthGuard,
            },
            jwt_strategy_1.JwtStrategy,
        ],
    })
], GuardModule);
//# sourceMappingURL=guard.module.js.map