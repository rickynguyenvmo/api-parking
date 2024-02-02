import { FavoriteListService } from './favorite-list.service';
import { AddFavoriteCarpark, ListFavoriteCarpark } from './favorite-list.dto';
export declare class FavoriteListController {
    private readonly favoriteListService;
    constructor(favoriteListService: FavoriteListService);
    addNewFavoriteCarpark(user: any, body: AddFavoriteCarpark): Promise<Partial<import("../../entities/favorite-list.entity").FavoriteList> & import("../../entities/favorite-list.entity").FavoriteList>;
    getMyFavoriteCarpark(user: any, query: ListFavoriteCarpark): Promise<import("./favorite-list.dto").FavoriteListResponse>;
    deleteAFavoriteCarpark(user: any, id: number): Promise<import("../../entities/favorite-list.entity").FavoriteList>;
}
