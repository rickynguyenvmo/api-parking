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
var CarparkRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarparkRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const constant_1 = require("../../common/constant/constant");
const carpark_entity_1 = require("../../entities/carpark.entity");
const typeorm_2 = require("typeorm");
const carparks_dto_1 = require("./carparks.dto");
let CarparkRepository = CarparkRepository_1 = class CarparkRepository {
    constructor(dataSource, carparkRepository) {
        this.dataSource = dataSource;
        this.carparkRepository = carparkRepository;
        this.logger = new common_1.Logger(CarparkRepository_1.name);
    }
    findOneWithCondition(options) {
        return this.carparkRepository.findOne(options);
    }
    find(options) {
        return this.carparkRepository.find(options);
    }
    async initDatabase(data, listCarparkNo) {
        this.logger.log('Initializing Database');
        await this.handleDatabaseTransaction(data, listCarparkNo);
    }
    async dailySyncUpDatabase(data, deletedCarparkNo) {
        this.logger.log('Daily Syncing Up Database');
        await this.handleDatabaseTransaction(data, deletedCarparkNo);
    }
    async handleDatabaseTransaction(data, carparkNumbers) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await this.carparkRepository.save(data, { chunk: 200 });
            await this.carparkRepository.delete({ carParkNo: (0, typeorm_2.Not)((0, typeorm_2.In)(carparkNumbers)) });
            await queryRunner.commitTransaction();
        }
        catch (error) {
            this.logger.error(error);
            await queryRunner.rollbackTransaction();
            throw new Error('Database transaction failed');
        }
        finally {
            await queryRunner.release();
        }
    }
    async getListCarpark(query) {
        const { page = 1, limit = 20, freeParking, nightParking, gantryHeight } = query;
        const queryBuilder = this.carparkRepository.createQueryBuilder(constant_1.ETable.CarPark);
        queryBuilder.where(`${constant_1.ETable.CarPark}.carParkNo IS NOT NULL`);
        if (freeParking === carparks_dto_1.FilterOptions.YES) {
            queryBuilder.andWhere(`${constant_1.ETable.CarPark}.freeParking != :param`, { param: 'NO' });
        }
        else if (freeParking === carparks_dto_1.FilterOptions.NO) {
            queryBuilder.andWhere(`${constant_1.ETable.CarPark}.freeParking = :param`, { param: 'NO' });
        }
        if (nightParking) {
            queryBuilder.andWhere(`${constant_1.ETable.CarPark}.nightParking = :nightParking`, {
                nightParking,
            });
        }
        if (gantryHeight) {
            queryBuilder.andWhere(new typeorm_2.Brackets((subQuery) => {
                subQuery
                    .where(`${constant_1.ETable.CarPark}.gantryHeight = 0`)
                    .orWhere(`${constant_1.ETable.CarPark}.gantryHeight >= :gantryHeight`, {
                    gantryHeight,
                });
            }));
        }
        queryBuilder.skip((page - 1) * limit);
        queryBuilder.take(limit);
        try {
            return queryBuilder.getManyAndCount();
        }
        catch (error) {
            this.logger.error(error);
            throw new Error('Error while retrieving carpark list');
        }
    }
};
exports.CarparkRepository = CarparkRepository;
exports.CarparkRepository = CarparkRepository = CarparkRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(carpark_entity_1.CarPark)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], CarparkRepository);
//# sourceMappingURL=carparks.repository.js.map