import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<User>;

@Schema()
export class User {
   _id: mongoose.Types.ObjectId;
   @Prop({ required: true, unique: true })
   nickName: string;
   @Prop({ required: true, unique: true })
   email: string;
   @Prop({ required: true, min: 5 })
   password: string;
   @Prop()
   token: string;
   @Prop()
   verificationToken: string;
}

export class UserPublicInfo {
   @Prop({ required: true, unique: true })
   nickName: string;
   @Prop({ required: true, unique: true })
   email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
