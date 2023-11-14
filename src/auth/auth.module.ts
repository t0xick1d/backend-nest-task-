import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: ['.env'],
         isGlobal: true,
         cache: true,
      }),
      UserModule,
      JwtModule.register({
         global: true,
         secret: process.env.JWT_KEY,
         signOptions: { expiresIn: '30d' },
      }),
   ],
   controllers: [AuthController],
   providers: [AuthService, JwtStrategy],
   exports: [AuthService],
})
export class AuthModule {}
