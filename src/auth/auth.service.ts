import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
   constructor(private userService: UserService, private jwtService: JwtService) {}

   async singIn(email: string, pass: string) {
      const user = await this.userService.findOne(email);
      if (!user) {
         throw new BadRequestException('Email or password are wrong');
      }
      const passwordCompare = await bcrypt.compare(pass, user.password);
      if (!passwordCompare) {
         throw new BadRequestException('Email or password are wrong');
      }
      const token = await this.jwtService.signAsync({ sub: user._id, email: user.email });
      await this.userService.findByIdAndUpdate(user._id, { token });
      return { token };
   }
}
