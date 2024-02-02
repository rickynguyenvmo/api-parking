import { CarPark } from 'src/entities/carpark.entity';
import { ListCarparkResponse, QueryListCarpark } from './carparks.dto';
import { RawCarparkData } from './carparks.interface';
import { CarparkRepository } from './carparks.repository';
import { FindOneOptions } from 'typeorm';
export declare class CarparkService {
    private readonly carparkRepo;
    private readonly logger;
    constructor(carparkRepo: CarparkRepository);
    findOneWithCondition(options: FindOneOptions<CarPark>): Promise<CarPark>;
    initDatabase(): Promise<void>;
    dailySyncUpDatabase(data: RawCarparkData[]): Promise<void>;
    getListCarpark(query: QueryListCarpark): Promise<ListCarparkResponse>;
    private transformRawData;
}
