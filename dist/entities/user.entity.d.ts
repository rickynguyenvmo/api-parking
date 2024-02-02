import { FavoriteList } from './favorite-list.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    fullName: string;
    createdAt: Date;
    favoriteLists: FavoriteList[];
}
