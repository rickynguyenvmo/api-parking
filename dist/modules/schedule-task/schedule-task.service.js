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
exports.ScheduleTaskService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const path_1 = require("path");
const util_1 = require("../../shared/util");
const carparks_service_1 = require("../carparks/carparks.service");
const schedule_task_util_1 = require("./schedule-task.util");
let ScheduleTaskService = class ScheduleTaskService {
    constructor(carparkService) {
        this.carparkService = carparkService;
    }
    async dailySyncUpDatabase() {
        const folderPath = (0, path_1.join)(__dirname, '../../../data');
        const file = (0, schedule_task_util_1.getExecuteFile)(folderPath);
        const filePath = (0, path_1.join)(folderPath, '/', file);
        const data = await (0, util_1.getDataFromCsv)(filePath);
        return this.carparkService.dailySyncUpDatabase(data);
    }
};
exports.ScheduleTaskService = ScheduleTaskService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_5AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleTaskService.prototype, "dailySyncUpDatabase", null);
exports.ScheduleTaskService = ScheduleTaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [carparks_service_1.CarparkService])
], ScheduleTaskService);
//# sourceMappingURL=schedule-task.service.js.map