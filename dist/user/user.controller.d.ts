import { UserService } from './user.service';
import { RegisterUserDto } from './authDto/register.dto';
export declare class UserController {
    private readonly authService;
    constructor(authService: UserService);
    createTopic(RegisterAuthDto: RegisterUserDto): Promise<import("./schema/register.schema").User>;
}
