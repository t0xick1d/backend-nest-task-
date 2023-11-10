import mongoose, { HydratedDocument } from 'mongoose';
export type AuthDocument = HydratedDocument<User>;
export declare class User {
    _id: any;
    nickName: string;
    email: string;
    password: string;
    token: string;
    verify: boolean;
    verificationToken: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}>;
