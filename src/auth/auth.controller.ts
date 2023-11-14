import {
   Controller,
   Get,
   Post,
   Request,
   Body,
   HttpStatus,
   HttpCode,
   UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwt-auth.guard';

@Controller('auth')
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @HttpCode(HttpStatus.OK)
   @Post('login')
   singIn(@Body() signInDto: Record<string, any>) {
      return this.authService.singIn(signInDto.email, signInDto.password);
   }

   @UseGuards(JwtAuthGuard)
   @Get('profile')
   getProfile(@Request() req) {
      return req.user;
   }
}
