import { Test, TestingModule } from '@nestjs/testing';
import { LearningOutcomesController } from './learning-outcomes.controller';
import { LearningOutcomesService } from './learning-outcomes.service';

describe('LearningOutcomesController', () => {
  let controller: LearningOutcomesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningOutcomesController],
      providers: [LearningOutcomesService],
    }).compile();

    controller = module.get<LearningOutcomesController>(LearningOutcomesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
