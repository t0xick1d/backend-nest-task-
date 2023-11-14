import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicModule } from './topic/topic.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: ['.env'],
         isGlobal: true,
         cache: true,
      }),
      MongooseModule.forRoot(process.env.DB_HOST),
      TopicModule,
      AuthModule,
      UserModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
