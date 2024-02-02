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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRefreshToken = exports.AuthRegisterResponse = exports.AuthRegister = exports.AuthSignInRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const util_1 = require("../../shared/util");
class AuthSignInRequest {
}
exports.AuthSignInRequest = AuthSignInRequest;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(util_1.toTrimString),
    (0, class_validator_1.NotContains)(' '),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSignInRequest.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(util_1.toTrimString),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthSignInRequest.prototype, "password", void 0);
class AuthRegister extends AuthSignInRequest {
}
exports.AuthRegister = AuthRegister;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(util_1.toTrimString),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AuthRegister.prototype, "fullName", void 0);
let AuthRegisterResponse = class AuthRegisterResponse {
    constructor(user) {
        Object.assign(this, user);
    }
};
exports.AuthRegisterResponse = AuthRegisterResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], AuthRegisterResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AuthRegisterResponse.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AuthRegisterResponse.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AuthRegisterResponse.prototype, "createdAt", void 0);
exports.AuthRegisterResponse = AuthRegisterResponse = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Object])
], AuthRegisterResponse);
class AuthRefreshToken {
}
exports.AuthRefreshToken = AuthRefreshToken;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(util_1.toTrimString),
    (0, class_validator_1.IsJWT)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AuthRefreshToken.prototype, "refreshToken", void 0);
//# sourceMappingURL=auth.dto.js.map