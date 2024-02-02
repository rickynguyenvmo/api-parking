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
exports.CarPark = void 0;
const constant_1 = require("../common/constant/constant");
const typeorm_1 = require("typeorm");
const favorite_list_entity_1 = require("./favorite-list.entity");
let CarPark = class CarPark {
};
exports.CarPark = CarPark;
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'Car_park_no',
        nullable: false,
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "carParkNo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Address',
        type: 'varchar',
        length: '500',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'X_coord',
        type: 'real',
    }),
    __metadata("design:type", Number)
], CarPark.prototype, "xCoord", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Y_coord',
        type: 'real',
    }),
    __metadata("design:type", Number)
], CarPark.prototype, "yCoord", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Car_park_type',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "carParkType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Type_of_parking_system',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "typeOfParkingSystem", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Short_term_parking',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "shortTermParking", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Free_parking',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "freeParking", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Night_parking',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "nightParking", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Car_park_decks',
        type: 'integer',
    }),
    __metadata("design:type", Number)
], CarPark.prototype, "carParkDecks", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Gantry_height',
        type: 'real',
    }),
    __metadata("design:type", Number)
], CarPark.prototype, "gantryHeight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Car_park_basement',
        type: 'varchar',
        length: '255',
    }),
    __metadata("design:type", String)
], CarPark.prototype, "carParkBasement", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'Created_at',
    }),
    __metadata("design:type", Date)
], CarPark.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'Updated_at',
    }),
    __metadata("design:type", Date)
], CarPark.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_list_entity_1.FavoriteList, (favoriteList) => favoriteList.carpark, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], CarPark.prototype, "favoriteLists", void 0);
exports.CarPark = CarPark = __decorate([
    (0, typeorm_1.Entity)({ name: constant_1.ETable.CarPark })
], CarPark);
//# sourceMappingURL=carpark.entity.js.map