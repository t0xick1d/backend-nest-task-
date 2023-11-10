import {
   Controller,
   Get,
   Post,
   Body,
   Patch,
   Param,
   Delete,
   HttpStatus,
   HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @HttpCode(HttpStatus.OK)
   @Post('login')
   singIn(@Body() signInDto: Record<string, any>) {
      return this.authService.singIn(signInDto.email, signInDto.password);
   }
}
