import { QueryListCarpark } from './carparks.dto';
import { CarparkService } from './carparks.service';
export declare class CarparkController {
    private readonly carparkService;
    constructor(carparkService: CarparkService);
    getList(query: QueryListCarpark): Promise<import("./carparks.dto").ListCarparkResponse>;
}
