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
exports.FavoriteListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const favorite_list_service_1 = require("./favorite-list.service");
const guard_decorator_1 = require("../../common/guard/guard.decorator");
const favorite_list_dto_1 = require("./favorite-list.dto");
let FavoriteListController = class FavoriteListController {
    constructor(favoriteListService) {
        this.favoriteListService = favoriteListService;
    }
    addNewFavoriteCarpark(user, body) {
        const userId = user?.id;
        return this.favoriteListService.addNewFavoriteCarpark(userId, body);
    }
    getMyFavoriteCarpark(user, query) {
        const userId = user?.id;
        return this.favoriteListService.getMyFavoriteCarpark(userId, query);
    }
    deleteAFavoriteCarpark(user, id) {
        return this.favoriteListService.deleteAFavoriteCarpark(user?.id, id);
    }
};
exports.FavoriteListController = FavoriteListController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, guard_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, favorite_list_dto_1.AddFavoriteCarpark]),
    __metadata("design:returntype", void 0)
], FavoriteListController.prototype, "addNewFavoriteCarpark", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    __param(0, (0, guard_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, favorite_list_dto_1.ListFavoriteCarpark]),
    __metadata("design:returntype", void 0)
], FavoriteListController.prototype, "getMyFavoriteCarpark", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, guard_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], FavoriteListController.prototype, "deleteAFavoriteCarpark", null);
exports.FavoriteListController = FavoriteListController = __decorate([
    (0, common_1.Controller)('favorite-list'),
    (0, swagger_1.ApiTags)('Favorite List'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [favorite_list_service_1.FavoriteListService])
], FavoriteListController);
//# sourceMappingURL=favorite-list.controller.js.map