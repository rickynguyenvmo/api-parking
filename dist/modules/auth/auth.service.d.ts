import { AuthRegister, AuthRegisterResponse, AuthSignInRequest } from './auth.dto';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    private readonly configService;
    constructor(jwtService: JwtService, userService: UserService, configService: ConfigService);
    signJwt(payload: Record<string, any>, jwtSignOptions?: JwtSignOptions): string;
    verifyJwt(token: string, jwtVerifyOptions?: JwtVerifyOptions): any;
    signIn(payload: AuthSignInRequest): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(payload: AuthRegister): Promise<AuthRegisterResponse>;
    refreshToken(token: string): Promise<{
        accessToken: string;
    }>;
}
