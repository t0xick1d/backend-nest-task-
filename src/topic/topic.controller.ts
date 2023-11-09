import { Controller, Post, Body, Get } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './topicDto/create-topic.dto';

@Controller('topic')
export class TopicController {
   constructor(private topicService: TopicService) {}

   @Post()
   async createTopic(@Body() createTopicDto: CreateTopicDto) {
      return this.topicService.createTopic(createTopicDto);
   }
}
