import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LearningOutcomesService } from './learning-outcomes.service';
import { LearningOutcome } from './entities/learning-outcome.entity';

@Controller('learning-outcomes')
export class LearningOutcomesController {
  constructor(
    private readonly learningOutcomesService: LearningOutcomesService,
  ) {}

  @Post()
  create(@Body() learningOutcome: LearningOutcome) {
    return this.learningOutcomesService.create(learningOutcome);
  }

  @Get(':id')
  findAll() {
    return this.learningOutcomesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learningOutcomesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() learningOutcome: LearningOutcome) {
    return this.learningOutcomesService.update(learningOutcome);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learningOutcomesService.remove(+id);
  }
}
