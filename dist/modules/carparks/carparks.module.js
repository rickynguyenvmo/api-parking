"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarparkModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const carpark_entity_1 = require("../../entities/carpark.entity");
const carparks_controller_1 = require("./carparks.controller");
const carparks_repository_1 = require("./carparks.repository");
const carparks_service_1 = require("./carparks.service");
let CarparkModule = class CarparkModule {
};
exports.CarparkModule = CarparkModule;
exports.CarparkModule = CarparkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([carpark_entity_1.CarPark])],
        providers: [carparks_repository_1.CarparkRepository, carparks_service_1.CarparkService],
        controllers: [carparks_controller_1.CarparkController],
        exports: [carparks_service_1.CarparkService],
    })
], CarparkModule);
//# sourceMappingURL=carparks.module.js.map