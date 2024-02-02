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
exports.ListCarparkResponse = exports.Carpark = exports.QueryListCarpark = exports.FilterOptions = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const util_1 = require("../../shared/util");
var FilterOptions;
(function (FilterOptions) {
    FilterOptions["YES"] = "YES";
    FilterOptions["NO"] = "NO";
})(FilterOptions || (exports.FilterOptions = FilterOptions = {}));
class QueryListCarpark {
}
exports.QueryListCarpark = QueryListCarpark;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: FilterOptions }),
    (0, class_validator_1.IsEnum)(['YES', 'NO']),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryListCarpark.prototype, "freeParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: FilterOptions }),
    (0, class_validator_1.IsEnum)(['YES', 'NO']),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], QueryListCarpark.prototype, "nightParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ key, value }) => (0, util_1.toNumber)(key, value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], QueryListCarpark.prototype, "gantryHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ key, value }) => (0, util_1.toNumber)(key, value)),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], QueryListCarpark.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_transformer_1.Transform)(({ key, value }) => (0, util_1.toNumber)(key, value)),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], QueryListCarpark.prototype, "limit", void 0);
let Carpark = class Carpark {
    constructor(raw) {
        Object.assign(this, raw);
    }
};
exports.Carpark = Carpark;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "carParkNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Carpark.prototype, "xCoord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Carpark.prototype, "yCoord", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "carParkType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "typeOfParkingSystem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "shortTermParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "freeParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "nightParking", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Carpark.prototype, "carParkDecks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Carpark.prototype, "gantryHeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "carParkBasement", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Carpark.prototype, "updatedAt", void 0);
exports.Carpark = Carpark = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Object])
], Carpark);
let ListCarparkResponse = class ListCarparkResponse {
    constructor(_data, _total) {
        this.data = _data;
        this.total = _total;
    }
};
exports.ListCarparkResponse = ListCarparkResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Carpark] }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], ListCarparkResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ListCarparkResponse.prototype, "total", void 0);
exports.ListCarparkResponse = ListCarparkResponse = __decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:paramtypes", [Array, Number])
], ListCarparkResponse);
//# sourceMappingURL=carparks.dto.js.map