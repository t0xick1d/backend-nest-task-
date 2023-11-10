import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<User>;

@Schema()
export class User {
   @Prop({ type: mongoose.Schema.Types.ObjectId })
   _id;
   @Prop({ required: true, unique: true })
   nickName: string;
   @Prop({ required: true, unique: true })
   email: string;
   @Prop({ required: true, min: 5 })
   password: string;
   @Prop()
   token: string;
   @Prop({ default: false })
   verify: boolean;
   @Prop({ required: true })
   verificationToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
