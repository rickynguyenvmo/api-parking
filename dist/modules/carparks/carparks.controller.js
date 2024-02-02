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
exports.CarparkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const carparks_dto_1 = require("./carparks.dto");
const carparks_service_1 = require("./carparks.service");
let CarparkController = class CarparkController {
    constructor(carparkService) {
        this.carparkService = carparkService;
    }
    getList(query) {
        return this.carparkService.getListCarpark(query);
    }
};
exports.CarparkController = CarparkController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [carparks_dto_1.QueryListCarpark]),
    __metadata("design:returntype", void 0)
], CarparkController.prototype, "getList", null);
exports.CarparkController = CarparkController = __decorate([
    (0, common_1.Controller)('carpark'),
    (0, swagger_1.ApiTags)('Carpark'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [carparks_service_1.CarparkService])
], CarparkController);
//# sourceMappingURL=carparks.controller.js.map