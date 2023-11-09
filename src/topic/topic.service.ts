import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TopicDocument, Topic } from './schema/topic.shema';
import { Model } from 'mongoose';
import { CreateTopicDto } from './topicDto/create-topic.dto';

@Injectable()
export class TopicService {
   constructor(@InjectModel(Topic.name) private topicModel: Model<TopicDocument>) {}
   async createTopic(createTopicDto: CreateTopicDto): Promise<Topic> {
      const createTopic = await this.topicModel.create(createTopicDto);

      return createTopic;
   }
   async findAll(userId: string): Promise<Topic[]> {
      return this.topicModel.findById(userId);
   }
}
