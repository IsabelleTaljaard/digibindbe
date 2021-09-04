import { PartialType } from '@nestjs/mapped-types';
import { CreateLearningOutcomeDto } from './create-learning-outcome.dto';

export class UpdateLearningOutcomeDto extends PartialType(CreateLearningOutcomeDto) {}
