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
exports.FavoriteListService = void 0;
const common_1 = require("@nestjs/common");
const carparks_service_1 = require("../carparks/carparks.service");
const user_service_1 = require("../user/user.service");
const favorite_list_dto_1 = require("./favorite-list.dto");
const favorite_list_repository_1 = require("./favorite-list.repository");
let FavoriteListService = class FavoriteListService {
    constructor(favoriteListRepository, userService, carparkService) {
        this.favoriteListRepository = favoriteListRepository;
        this.userService = userService;
        this.carparkService = carparkService;
    }
    async getUser(userId) {
        const user = await this.userService.findOneWithCondition({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return user;
    }
    async getCarparkByNo(carParkNo) {
        const carpark = await this.carparkService.findOneWithCondition({
            where: {
                carParkNo: carParkNo,
            },
        });
        if (!carpark) {
            throw new common_1.NotFoundException('Carpark not found');
        }
        return carpark;
    }
    async checkExistingFavorite(userId, carParkNo) {
        const existingFavoriteCarpark = await this.favoriteListRepository.findOneWithCondition({
            where: {
                userId: userId,
                carParkNoId: carParkNo,
            },
        });
        if (existingFavoriteCarpark) {
            throw new common_1.BadRequestException('Carpark is already a favorite');
        }
    }
    async addNewFavoriteCarpark(userId, data) {
        const user = await this.getUser(userId);
        const carpark = await this.getCarparkByNo(data.carParkNo);
        await this.checkExistingFavorite(user.id, carpark.carParkNo);
        return this.favoriteListRepository.addNewFavoriteCarpark(user.id, carpark.carParkNo);
    }
    async getMyFavoriteCarpark(userId, query) {
        const { page = 1, limit = 20 } = query;
        const [data, total] = await this.favoriteListRepository.findAndCount({
            where: {
                userId: userId,
            },
            relations: ['carpark'],
            skip: (page - 1) * limit,
            take: limit,
        });
        const transformData = data.map((item) => new favorite_list_dto_1.FavoriteListCarpark(item));
        return new favorite_list_dto_1.FavoriteListResponse(transformData, total);
    }
    async deleteAFavoriteCarpark(userId, id) {
        const favoriteCarpark = await this.favoriteListRepository.findOneWithCondition({
            where: {
                id: +id,
                userId: userId,
            },
        });
        if (!favoriteCarpark) {
            throw new common_1.NotFoundException('Favorite carpark not found');
        }
        return this.favoriteListRepository.removeEntity(favoriteCarpark);
    }
};
exports.FavoriteListService = FavoriteListService;
exports.FavoriteListService = FavoriteListService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [favorite_list_repository_1.FavoriteListRepository,
        user_service_1.UserService,
        carparks_service_1.CarparkService])
], FavoriteListService);
//# sourceMappingURL=favorite-list.service.js.map