import { CarPark } from './carpark.entity';
import { User } from './user.entity';
export declare class FavoriteList {
    id: number;
    userId: number;
    carParkNoId: string;
    status: string;
    createdAt: Date;
    user: User;
    carpark: CarPark;
}
