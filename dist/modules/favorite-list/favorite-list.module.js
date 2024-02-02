"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteListModule = void 0;
const common_1 = require("@nestjs/common");
const favorite_list_service_1 = require("./favorite-list.service");
const favorite_list_controller_1 = require("./favorite-list.controller");
const typeorm_1 = require("@nestjs/typeorm");
const favorite_list_entity_1 = require("../../entities/favorite-list.entity");
const user_module_1 = require("../user/user.module");
const favorite_list_repository_1 = require("./favorite-list.repository");
const carparks_module_1 = require("../carparks/carparks.module");
let FavoriteListModule = class FavoriteListModule {
};
exports.FavoriteListModule = FavoriteListModule;
exports.FavoriteListModule = FavoriteListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favorite_list_entity_1.FavoriteList]), user_module_1.UserModule, carparks_module_1.CarparkModule],
        providers: [favorite_list_service_1.FavoriteListService, favorite_list_repository_1.FavoriteListRepository],
        controllers: [favorite_list_controller_1.FavoriteListController],
        exports: [favorite_list_service_1.FavoriteListService],
    })
], FavoriteListModule);
//# sourceMappingURL=favorite-list.module.js.map