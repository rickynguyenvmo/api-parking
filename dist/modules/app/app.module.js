"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const configuration_module_1 = require("../../common/config/configuration.module");
const database_module_1 = require("../../common/database/database.module");
const pipe_module_1 = require("../../common/pipe/pipe.module");
const auth_module_1 = require("../auth/auth.module");
const carparks_module_1 = require("../carparks/carparks.module");
const favorite_list_module_1 = require("../favorite-list/favorite-list.module");
const schedule_task_module_1 = require("../schedule-task/schedule-task.module");
const user_module_1 = require("../user/user.module");
const interceptor_module_1 = require("../../common/interceptor/interceptor.module");
const guard_module_1 = require("../../common/guard/guard.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            configuration_module_1.ConfigurationModule,
            guard_module_1.GuardModule,
            interceptor_module_1.InterceptorModule,
            pipe_module_1.PipeModule,
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            carparks_module_1.CarparkModule,
            user_module_1.UserModule,
            favorite_list_module_1.FavoriteListModule,
            schedule_task_module_1.ScheduleTaskModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map