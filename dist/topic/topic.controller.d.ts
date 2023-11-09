import { TopicService } from './topic.service';
import { CreateTopicDto } from './topicDto/create-topic.dto';
export declare class TopicController {
    private topicService;
    constructor(topicService: TopicService);
    createTopic(createTopicDto: CreateTopicDto): Promise<import("./schema/topic.shema").Topic>;
}
