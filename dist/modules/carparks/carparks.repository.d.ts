import { CarPark } from 'src/entities/carpark.entity';
import { DataSource, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { QueryListCarpark } from './carparks.dto';
export declare class CarparkRepository {
    private dataSource;
    private readonly carparkRepository;
    private readonly logger;
    constructor(dataSource: DataSource, carparkRepository: Repository<CarPark>);
    findOneWithCondition(options: FindOneOptions<CarPark>): Promise<CarPark>;
    find(options?: FindManyOptions<CarPark>): Promise<CarPark[]>;
    initDatabase(data: Partial<CarPark>[], listCarparkNo: string[]): Promise<void>;
    dailySyncUpDatabase(data: Partial<CarPark>[], deletedCarparkNo: string[]): Promise<void>;
    private handleDatabaseTransaction;
    getListCarpark(query: QueryListCarpark): Promise<[CarPark[], number]>;
}
