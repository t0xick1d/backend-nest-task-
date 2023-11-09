import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicModule } from './topic/topic.module';

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: ['.env'],
         isGlobal: true,
         cache: true,
      }),
      MongooseModule.forRoot(
         'mongodb+srv://Zhenia:RtNHTvB1d1xyHjKV@cluster0.t3jxn0o.mongodb.net/questionGenDevs?retryWrites=true&w=majority)',
      ),
      TopicModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
