import { FavoriteList } from './favorite-list.entity';
export declare class CarPark {
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
    createdAt: Date;
    updatedAt: Date;
    favoriteLists: FavoriteList[];
}
