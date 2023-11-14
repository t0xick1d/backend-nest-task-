import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Strategy } from 'passport-jwt';
declare const AuthService_base: new (...args: any[]) => Strategy;
export declare class AuthService extends AuthService_base {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validate(payload: any): Promise<{
        id: any;
        username: any;
    }>;
    singIn(email: string, pass: string): Promise<{
        token: string;
    }>;
}
export {};
