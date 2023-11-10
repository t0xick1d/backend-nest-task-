import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './authDto/register.dto';

@Controller('auth')
export class UserController {
   constructor(private readonly authService: UserService) {}
   @Post('register')
   async createTopic(@Body() RegisterAuthDto: RegisterUserDto) {
      return this.authService.register(RegisterAuthDto);
   }
}
