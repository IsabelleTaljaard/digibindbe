import { Module } from '@nestjs/common';
import { LearningOutcomesService } from './learning-outcomes.service';
import { LearningOutcomesController } from './learning-outcomes.controller';

@Module({
  controllers: [LearningOutcomesController],
  providers: [LearningOutcomesService]
})
export class LearningOutcomesModule {}
