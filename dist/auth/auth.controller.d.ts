import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    singIn(signInDto: Record<string, any>): Promise<{
        token: string;
    }>;
}
