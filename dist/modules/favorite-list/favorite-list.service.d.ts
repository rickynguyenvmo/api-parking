import { CarparkService } from '../carparks/carparks.service';
import { UserService } from '../user/user.service';
import { AddFavoriteCarpark, FavoriteListResponse, ListFavoriteCarpark } from './favorite-list.dto';
import { FavoriteListRepository } from './favorite-list.repository';
export declare class FavoriteListService {
    private readonly favoriteListRepository;
    private readonly userService;
    private readonly carparkService;
    constructor(favoriteListRepository: FavoriteListRepository, userService: UserService, carparkService: CarparkService);
    private getUser;
    private getCarparkByNo;
    private checkExistingFavorite;
    addNewFavoriteCarpark(userId: number, data: AddFavoriteCarpark): Promise<Partial<import("../../entities/favorite-list.entity").FavoriteList> & import("../../entities/favorite-list.entity").FavoriteList>;
    getMyFavoriteCarpark(userId: number, query: ListFavoriteCarpark): Promise<FavoriteListResponse>;
    deleteAFavoriteCarpark(userId: number, id: number): Promise<import("../../entities/favorite-list.entity").FavoriteList>;
}
