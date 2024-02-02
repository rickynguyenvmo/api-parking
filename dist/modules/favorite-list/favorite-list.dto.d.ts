import { CarPark } from 'src/entities/carpark.entity';
import { FavoriteList } from 'src/entities/favorite-list.entity';
export declare class AddFavoriteCarpark {
    carParkNo: string;
}
export declare class ListFavoriteCarpark {
    page: number;
    limit: number;
}
declare class FavoriteCarpark {
    carParkNo: string;
    address: string;
    xCoord: number;
    yCoord: number;
    carParkType: string;
    typeOfParkingSystem: string;
    shortTermParking: string;
    freeParking: string;
    nightParking: string;
    carParkDecks: number;
    gantryHeight: number;
    carParkBasement: string;
    constructor(carpark: Partial<CarPark>);
}
export declare class FavoriteListCarpark {
    id: number;
    userId: number;
    carParkNoId: string;
    status: string;
    createdAt: string;
    carpark: FavoriteCarpark;
    constructor(favoriteList: Partial<FavoriteList>);
}
export declare class FavoriteListResponse {
    data: FavoriteListCarpark[];
    total: number;
    constructor(_data: FavoriteListCarpark[], _total: number);
}
export {};
