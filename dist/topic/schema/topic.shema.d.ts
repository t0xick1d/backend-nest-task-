import mongoose, { HydratedDocument } from 'mongoose';
export type TopicDocument = HydratedDocument<Topic>;
export declare class Topic {
    topic: string;
    idUser: string;
}
export declare const TopicSchema: mongoose.Schema<Topic, mongoose.Model<Topic, any, any, any, mongoose.Document<unknown, any, Topic> & Topic & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Topic, mongoose.Document<unknown, {}, mongoose.FlatRecord<Topic>> & mongoose.FlatRecord<Topic> & {
    _id: mongoose.Types.ObjectId;
}>;
