import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { Chapter } from './entities/chapter.entity';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post('create')
  create(@Body() chapter: Chapter): Promise<Chapter> {
    return this.chaptersService.create(chapter);
  }

  @Get()
  findAll() {
    return this.chaptersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.chaptersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() chapter: Chapter) {
    return await this.chaptersService.update(chapter);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chaptersService.remove(+id);
  }
}
