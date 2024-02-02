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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_dto_1 = require("./auth.dto");
const user_service_1 = require("../user/user.service");
const config_1 = require("@nestjs/config");
const bcrypt_1 = require("bcrypt");
const constant_1 = require("../../common/constant/constant");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService, userService, configService) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.configService = configService;
    }
    signJwt(payload, jwtSignOptions) {
        return this.jwtService.sign(payload, jwtSignOptions);
    }
    verifyJwt(token, jwtVerifyOptions) {
        return this.jwtService.verify(token, jwtVerifyOptions);
    }
    async signIn(payload) {
        const user = await this.userService.findOneWithCondition({
            where: {
                username: payload.username,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isPasswordValid = await (0, bcrypt_1.compare)(payload.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid username or password');
        }
        const data = {
            id: user.id,
            username: user.username,
            fullName: user.fullName,
        };
        const accessToken = this.signJwt(data);
        const refreshToken = this.signJwt(data, {
            secret: this.configService.get(constant_1.EnvMapping.JWT_REFRESH_KEY),
            expiresIn: constant_1.EnvMapping.JWT_REFRESH_EXPIRES_IN,
        });
        return { accessToken, refreshToken };
    }
    async register(payload) {
        const existingUser = await this.userService.findOneWithCondition({
            where: {
                username: payload.username,
            },
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Username already exists');
        }
        const hashedPassword = await (0, bcrypt_1.hash)(payload.password, +this.configService.get(constant_1.EnvMapping.BCRYPT_SALT_ROUNDS));
        const userData = {
            username: payload.username,
            password: hashedPassword,
            fullName: payload.fullName || payload.username,
        };
        const newUser = await this.userService.createNewUser(userData);
        return new auth_dto_1.AuthRegisterResponse(newUser);
    }
    async refreshToken(token) {
        try {
            const data = await this.verifyJwt(token, {
                secret: this.configService.get(constant_1.EnvMapping.JWT_REFRESH_KEY),
            });
            const user = await this.userService.findOneWithCondition({
                where: {
                    id: data.id,
                },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            const payload = {
                id: user.id,
                username: user.username,
                fullName: user.fullName,
            };
            const accessToken = this.signJwt(payload);
            return { accessToken };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map