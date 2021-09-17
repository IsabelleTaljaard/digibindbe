import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TextbooksService } from './textbooks.service';
import { CreateTextbookDto } from './dto/create-textbook.dto';
import { UpdateTextbookDto } from './dto/update-textbook.dto';
import { Textbook } from './entities/textbook.entity';
import { response } from 'express';

@Controller('textbooks')
export class TextbooksController {
  constructor(private readonly textbooksService: TextbooksService) {}

  @Post('create')
  async create(@Body() textbook: Textbook) {
    return this.textbooksService.create(textbook);
  }

  @Get()
  findAll() {
    return this.textbooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.textbooksService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() textbook: Textbook) {
    return await this.textbooksService.update(textbook);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.textbooksService.remove(+id);
  }
}
