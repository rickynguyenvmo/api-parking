import { User } from 'src/entities/user.entity';
export interface UserAttribute {
    username: string;
    password: string;
    fullName: string;
}
export interface JWTData {
    id: number;
    username: string;
    fullName: string;
}
export declare class AuthSignInRequest {
    username: string;
    password: string;
}
export declare class AuthRegister extends AuthSignInRequest {
    fullName: string;
}
export declare class AuthRegisterResponse {
    id: number;
    username: string;
    fullName: string;
    createdAt: string;
    constructor(user: Partial<User>);
}
export declare class AuthRefreshToken {
    refreshToken: string;
}
