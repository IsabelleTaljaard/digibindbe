import { Module } from '@nestjs/common';
import { TextbooksService } from './textbooks.service';
import { TextbooksController } from './textbooks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Textbook } from './entities/textbook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Textbook])],
  controllers: [TextbooksController],
  providers: [TextbooksService],
  exports: [TextbooksService],
})
export class TextbooksModule {}
