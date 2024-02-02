import { CarparkService } from '../carparks/carparks.service';
export declare class ScheduleTaskService {
    private readonly carparkService;
    constructor(carparkService: CarparkService);
    dailySyncUpDatabase(): Promise<void>;
}
