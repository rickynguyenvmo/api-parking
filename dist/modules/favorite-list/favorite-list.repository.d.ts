import { FavoriteList } from 'src/entities/favorite-list.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
export declare class FavoriteListRepository {
    private favoriteListRepo;
    constructor(favoriteListRepo: Repository<FavoriteList>);
    findOneWithCondition(options: FindOneOptions<FavoriteList>): Promise<FavoriteList>;
    findAndCount(options?: FindManyOptions<FavoriteList>): Promise<[FavoriteList[], number]>;
    removeEntity(entity: FavoriteList): Promise<FavoriteList>;
    addNewFavoriteCarpark(userId: number, carParkNo: string): Promise<Partial<FavoriteList> & FavoriteList>;
}
