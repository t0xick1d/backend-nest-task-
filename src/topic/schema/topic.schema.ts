import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TopicDocument = HydratedDocument<Topic>;

@Schema()
export class Topic {
   @Prop({ required: true })
   topic: string;
   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true })
   idUser: string;
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
