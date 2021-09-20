import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { TextbooksModule } from './textbooks/textbooks.module';
import { ChaptersModule } from './chapters/chapters.module';
import { ResourcesModule } from './resources/resources.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { LearningOutcomesModule } from './learning-outcomes/learning-outcomes.module';
import { Chapter } from './chapters/entities/chapter.entity';
import { LearningOutcome } from './learning-outcomes/entities/learning-outcome.entity';
import { Resource } from './resources/entities/resource.entity';
import { Textbook } from './textbooks/entities/textbook.entity';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    TypeOrmModule.forFeature([
      User,
      Chapter,
      LearningOutcome,
      Resource,
      Textbook,
    ]),
    UsersModule,
    TextbooksModule,
    ChaptersModule,
    ResourcesModule,
    AuthModule,
    LearningOutcomesModule,
    CommentsModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
    connection.synchronize();
  }
}
