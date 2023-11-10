import { TopicDocument, Topic } from './schema/topic.schema';
import { Model } from 'mongoose';
import { CreateTopicDto } from './topicDto/create-topic.dto';
export declare class TopicService {
    private topicModel;
    constructor(topicModel: Model<TopicDocument>);
    createTopic(createTopicDto: CreateTopicDto): Promise<Topic>;
}
