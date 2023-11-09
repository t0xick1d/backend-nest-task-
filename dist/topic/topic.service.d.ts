import { TopicDocument, Topic } from './schema/topic.shema';
import { Model } from 'mongoose';
import { CreateTopicDto } from './topicDto/create-topic.dto';
export declare class TopicService {
    private topicModel;
    constructor(topicModel: Model<TopicDocument>);
    createTopic(createTopicDto: CreateTopicDto): Promise<Topic>;
    findAll(userId: string): Promise<Topic[]>;
}
