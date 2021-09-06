import { Module } from '@nestjs/common';
import { LearningOutcomesService } from './learning-outcomes.service';
import { LearningOutcomesController } from './learning-outcomes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LearningOutcome } from './entities/learning-outcome.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LearningOutcome])],
  controllers: [LearningOutcomesController],
  providers: [LearningOutcomesService],
})
export class LearningOutcomesModule {}
