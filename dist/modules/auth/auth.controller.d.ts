import { AuthService } from './auth.service';
import { AuthRefreshToken, AuthRegister, AuthSignInRequest } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(body: AuthSignInRequest): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    register(body: AuthRegister): Promise<import("./auth.dto").AuthRegisterResponse>;
    refreshToken(body: AuthRefreshToken): Promise<{
        accessToken: string;
    }>;
}
