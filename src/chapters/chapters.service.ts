import { Injectable } from '@nestjs/common';
import { Chapter } from './entities/chapter.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(Chapter) private chapterRepository: Repository<Chapter>,
  ) {}

  /**
   * INSERT new chapter into DB
   * @param chapter new chapter
   */
  create(chapter: Chapter): Promise<Chapter> {
    return this.chapterRepository.save(chapter);
  }

  /**
   * SELECT * from chapter
   */
  findAll(): Promise<Chapter[]> {
    return this.chapterRepository.find();
  }

  /**
   * SELECT * from chapter WHERE chapCode is chapCode
   * @param chapCode to lookup
   */
  async findOne(chapCode: number): Promise<Chapter> {
    try {
      const chapter = await this.chapterRepository.findOneOrFail(chapCode);
      return chapter;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates chapter
   * @param chapter updates version of the chapter
   */
  async update(chapter: Chapter): Promise<Chapter> {
    return this.chapterRepository.save(chapter);
  }

  /**
   * Removes a chapter
   * @param chapCode chapter that should be deleted
   */
  async remove(chapCode: number) {
    return await this.chapterRepository.delete({ chapCode: chapCode });
  }
}
