import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
   constructor(private userService: UserService, private jwtService: JwtService) {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         ignoreExpiration: false,
         secretOrKey: process.env.JWT_KEY,
      });
   }

   async validate(payload: any) {
      return { id: payload.sub, username: payload.username };
   }

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
