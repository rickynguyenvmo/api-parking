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
exports.FavoriteList = void 0;
const constant_1 = require("../common/constant/constant");
const typeorm_1 = require("typeorm");
const carpark_entity_1 = require("./carpark.entity");
const user_entity_1 = require("./user.entity");
let FavoriteList = class FavoriteList {
};
exports.FavoriteList = FavoriteList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', {
        name: 'Id',
        type: 'integer',
    }),
    __metadata("design:type", Number)
], FavoriteList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'User_id',
        type: 'integer',
    }),
    __metadata("design:type", Number)
], FavoriteList.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Car_park_no_id',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], FavoriteList.prototype, "carParkNoId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Status',
        type: 'varchar',
        default: 'ACTIVE',
    }),
    __metadata("design:type", String)
], FavoriteList.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'Created_at',
    }),
    __metadata("design:type", Date)
], FavoriteList.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.favoriteLists, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'User_id' }),
    __metadata("design:type", user_entity_1.User)
], FavoriteList.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carpark_entity_1.CarPark, (carpark) => carpark.favoriteLists, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'Car_park_no_id' }),
    __metadata("design:type", carpark_entity_1.CarPark)
], FavoriteList.prototype, "carpark", void 0);
exports.FavoriteList = FavoriteList = __decorate([
    (0, typeorm_1.Entity)({ name: constant_1.ETable.FavoriteList })
], FavoriteList);
//# sourceMappingURL=favorite-list.entity.js.map