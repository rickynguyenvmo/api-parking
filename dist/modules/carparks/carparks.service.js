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
var CarparkService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarparkService = void 0;
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const util_1 = require("../../shared/util");
const schedule_task_util_1 = require("../schedule-task/schedule-task.util");
const carparks_dto_1 = require("./carparks.dto");
const carparks_repository_1 = require("./carparks.repository");
let CarparkService = CarparkService_1 = class CarparkService {
    constructor(carparkRepo) {
        this.carparkRepo = carparkRepo;
        this.logger = new common_1.Logger(CarparkService_1.name);
    }
    findOneWithCondition(options) {
        return this.carparkRepo.findOneWithCondition(options);
    }
    async initDatabase() {
        try {
            const folderPath = (0, path_1.join)(__dirname, '../../../data');
            const file = (0, schedule_task_util_1.getExecuteFile)(folderPath);
            const filePath = (0, path_1.join)(folderPath, '/', file);
            const data = await (0, util_1.getDataFromCsv)(filePath);
            const ormData = this.transformRawData(data);
            const listCarparkNo = ormData.map((item) => item.carParkNo);
            await this.carparkRepo.initDatabase(ormData, listCarparkNo);
            this.logger.log('Database initialized successfully');
        }
        catch (error) {
            this.logger.error('Error initializing database', error);
            throw new Error('Database initialization failed');
        }
    }
    async dailySyncUpDatabase(data) {
        try {
            const allCarParkNo = await this.carparkRepo.find({
                select: ['carParkNo'],
            });
            const ormData = this.transformRawData(data);
            const listUpsertCarparkNo = ormData.map((item) => item.carParkNo);
            const listDeletedCarparkNo = allCarParkNo
                .map((item) => item.carParkNo)
                .filter((carParkNo) => !listUpsertCarparkNo.includes(carParkNo));
            await this.carparkRepo.dailySyncUpDatabase(ormData, listDeletedCarparkNo);
            this.logger.log('Database daily sync up completed successfully');
        }
        catch (error) {
            this.logger.error('Error in daily sync up', error);
            throw new Error('Daily sync up failed');
        }
    }
    async getListCarpark(query) {
        try {
            const [data, total] = await this.carparkRepo.getListCarpark(query);
            const transformData = data.map((item) => new carparks_dto_1.Carpark(item));
            return new carparks_dto_1.ListCarparkResponse(transformData, total);
        }
        catch (error) {
            this.logger.error('Error getting carpark list', error);
            throw new Error('Failed to retrieve carpark list');
        }
    }
    transformRawData(data) {
        return data.map((item) => ({
            carParkNo: item.car_park_no,
            address: item.address,
            xCoord: +item.x_coord || 0.0,
            yCoord: +item.y_coord || 0.0,
            carParkType: item.car_park_type,
            typeOfParkingSystem: item.type_of_parking_system,
            shortTermParking: item.short_term_parking,
            freeParking: item.free_parking,
            nightParking: item.night_parking,
            carParkDecks: +item.car_park_decks || 0,
            gantryHeight: +item.gantry_height || 0,
            carParkBasement: item.car_park_basement,
        }));
    }
};
exports.CarparkService = CarparkService;
exports.CarparkService = CarparkService = CarparkService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [carparks_repository_1.CarparkRepository])
], CarparkService);
//# sourceMappingURL=carparks.service.js.map