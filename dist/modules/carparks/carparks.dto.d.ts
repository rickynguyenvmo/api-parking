import { CarPark } from 'src/entities/carpark.entity';
export declare enum FilterOptions {
    YES = "YES",
    NO = "NO"
}
export declare class QueryListCarpark {
    freeParking: string;
    nightParking: string;
    gantryHeight: number;
    page: number;
    limit: number;
}
export declare class Carpark {
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
    createdAt: string;
    updatedAt: string;
    constructor(raw: Partial<CarPark>);
}
export declare class ListCarparkResponse {
    data: Carpark[];
    total: number;
    constructor(_data: Carpark[], _total: number);
}
