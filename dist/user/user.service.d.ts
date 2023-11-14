/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { AuthDocument, User, UserPublicInfo } from './schema/register.schema';
import { Model } from 'mongoose';
import { RegisterUserDto } from './authDto/register.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<AuthDocument>);
    register(registerAuthDto: RegisterUserDto): Promise<UserPublicInfo>;
    findOne(email: string): Promise<User | undefined>;
    findByIdAndUpdate(id: any, obj: any): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>> & import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
