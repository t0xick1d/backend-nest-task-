import mongoose, { HydratedDocument } from 'mongoose';
export type AuthDocument = HydratedDocument<User>;
export declare class User {
    _id: mongoose.Types.ObjectId;
    nickName: string;
    email: string;
    password: string;
    token: string;
    verificationToken: string;
}
export declare class UserPublicInfo {
    nickName: string;
    email: string;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & User & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & mongoose.FlatRecord<User> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
