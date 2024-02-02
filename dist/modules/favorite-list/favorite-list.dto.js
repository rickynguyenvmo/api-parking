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
exports.FavoriteListResponse = exports.FavoriteListCarpark = exports.ListFavoriteCarpark = exports.AddFavoriteCarpark = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const util_1 = require("../../shared/util");
class AddFavoriteCarpark {
}
exports.AddFavoriteCarpark = AddFavoriteCarpark;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(util_1.toTrimString),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddFavoriteCarpark.prototype, "carParkNo", void 0);
class ListFavoriteCarpark {
}
exports.ListFavoriteCarpark = ListFavoriteCarpark;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ key, value }) => (0, util_1.toNumber)(key, value)),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ListFavoriteCarpark.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ key, value }) => (0, util_1.toNumber)(key, value)),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ListFavoriteCarpark.prototype, "limit", void 0);
let FavoriteCarpark = class FavoriteCarpark {
    constructor(carpark) {
        Object.assign(this, carpark);
    }
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "carParkNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteCarpark.prototype, "xCoord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteCarpark.prototype, "yCoord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "carParkType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "typeOfParkingSystem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "shortTermParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "freeParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "nightParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteCarpark.prototype, "carParkDecks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteCarpark.prototype, "gantryHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteCarpark.prototype, "carParkBasement", void 0);
FavoriteCarpark = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Object])
], FavoriteCarpark);
let FavoriteListCarpark = class FavoriteListCarpark {
    constructor(favoriteList) {
        Object.assign(this, favoriteList);
    }
};
exports.FavoriteListCarpark = FavoriteListCarpark;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteListCarpark.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteListCarpark.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteListCarpark.prototype, "carParkNoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteListCarpark.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], FavoriteListCarpark.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: FavoriteCarpark }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(),
    __metadata("design:type", FavoriteCarpark)
], FavoriteListCarpark.prototype, "carpark", void 0);
exports.FavoriteListCarpark = FavoriteListCarpark = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Object])
], FavoriteListCarpark);
let FavoriteListResponse = class FavoriteListResponse {
    constructor(_data, _total) {
        this.data = _data;
        this.total = _total;
    }
};
exports.FavoriteListResponse = FavoriteListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FavoriteListCarpark] }),
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => FavoriteListCarpark),
    __metadata("design:type", Array)
], FavoriteListResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], FavoriteListResponse.prototype, "total", void 0);
exports.FavoriteListResponse = FavoriteListResponse = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Array, Number])
], FavoriteListResponse);
//# sourceMappingURL=favorite-list.dto.js.map