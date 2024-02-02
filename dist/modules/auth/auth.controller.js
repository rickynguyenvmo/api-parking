"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./auth.dto");
const guard_decorator_1 = require("../../common/guard/guard.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signIn(body) {
        return this.authService.signIn(body);
    }
    register(body) {
        return this.authService.register(body);
    }
    refreshToken(body) {
        return this.authService.refreshToken(body.refreshToken);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, guard_decorator_1.GuardPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthSignInRequest]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, guard_decorator_1.GuardPublic)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthRegister]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('refresh-token'),
    (0, guard_decorator_1.GuardPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthRefreshToken]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map