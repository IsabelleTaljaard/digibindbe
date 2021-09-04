import { Test, TestingModule } from '@nestjs/testing';
import { LearningOutcomesService } from './learning-outcomes.service';

describe('LearningOutcomesService', () => {
  let service: LearningOutcomesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningOutcomesService],
    }).compile();

    service = module.get<LearningOutcomesService>(LearningOutcomesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
