import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LearningOutcome } from './entities/learning-outcome.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LearningOutcomesService {
  constructor(
    @InjectRepository(LearningOutcome)
    private learningOutcomeRepository: Repository<LearningOutcome>,
  ) {}

  /**
   * INSERT new learning outcome into DB
   * @param learningOutcome new learning outcome
   */
  create(learningOutcome: LearningOutcome) {
    return this.learningOutcomeRepository.save(learningOutcome);
  }

  /**
   * SELECT * from learningOutcome
   */
  findAll(): Promise<LearningOutcome[]> {
    return this.learningOutcomeRepository.find();
  }

  /**
   * SELECT * from learningOutcome WHERE learning outcome number is learnOutCode
   * @param learnOutCode to lookup
   */
  async findOne(learnOutCode: number): Promise<LearningOutcome> {
    try {
      const learningOutcome =
        await this.learningOutcomeRepository.findOneOrFail(learnOutCode);
      return learningOutcome;
    } catch (err) {
      //todo Add error handling here
      throw err;
    }
  }

  /**
   * Updates learning outcome
   * @param learningOutcome updated version of the learning outcome
   */
  update(learningOutcome: LearningOutcome): Promise<LearningOutcome> {
    return this.learningOutcomeRepository.save(learningOutcome);
  }

  /**
   * Removes a learning outcome
   * @param learnOutCode learning outcome to remvoe
   */
  async remove(learnOutCode: number) {
    return await this.learningOutcomeRepository.delete({
      learnOutCode: learnOutCode,
    });
  }
}
