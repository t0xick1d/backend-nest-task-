import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDocument, User, UserPublicInfo } from './schema/register.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from './authDto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
   constructor(@InjectModel(User.name) private userModel: Model<AuthDocument>) {}
   async register(registerAuthDto: RegisterUserDto): Promise<UserPublicInfo> {
      const { email, password } = registerAuthDto;
      const user = await this.userModel.findOne({ email });
      if (user) {
         throw new BadRequestException('Email is already exist');
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = {
         ...registerAuthDto,
         password: hashPassword,
         verificationToken: '',
      };

      const createUser = await this.userModel.create(newUser);

      return {
         nickName: createUser.nickName,
         email: createUser.email,
      };
   }
   async findOne(email: string): Promise<User | undefined> {
      return await this.userModel.findOne({ email });
   }
   async findByIdAndUpdate(id, obj) {
      return await this.userModel.findByIdAndUpdate(id, obj);
   }
}
