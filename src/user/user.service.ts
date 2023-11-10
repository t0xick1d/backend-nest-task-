import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AuthDocument, User } from './schema/register.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from './authDto/register.dto';

@Injectable()
export class UserService {
   constructor(@InjectModel(User.name) private userModel: Model<AuthDocument>) {}
   async register(registerAuthDto: RegisterUserDto): Promise<User> {
      const newUser = {
         ...registerAuthDto,
      };

      const createUser = await this.userModel.create(newUser);

      return createUser;
   }
   async findOne(email: string): Promise<User | undefined> {
      return await this.userModel.findOne({ email });
   }
   async findByIdAndUpdate(id, obj) {
      return await this.userModel.findByIdAndUpdate(id, obj);
   }
}
