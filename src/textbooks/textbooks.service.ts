import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Textbook } from './entities/textbook.entity';

@Injectable()
export class TextbooksService {
  constructor(
    @InjectRepository(Textbook)
    private textbooksRepository: Repository<Textbook>,
  ) {}

  /**
   * INSERT new textbook into DB
   * @param textbook new textbook
   */
  create(textbook: Textbook) {
    return this.textbooksRepository.save(textbook);
  }

  /**
   * SELECT * from textbook
   */
  findAll(): Promise<Textbook[]> {
    return this.textbooksRepository.find();
  }

  /**
   * SELECT * from textbook WHERE textbookNumber = txtbCode
   * @param txtbCode to lookup
   */
  async findOne(txtbCode: number): Promise<Textbook> {
    try {
      const textbook = await this.textbooksRepository.findOneOrFail(txtbCode);
      return textbook;
    } catch (err) {
      //todo Add error handling here
      throw err;
    }
  }

  /**
   * Updates textbook
   * @param textbook updated version of the textbook
   */
  update(textbook: Textbook): Promise<Textbook> {
    return this.textbooksRepository.save(textbook);
  }

  /**
   * Removes textbook
   * @param txtbCode textbook to delete
   */
  async remove(txtbCode: number) {
    return await this.textbooksRepository.delete({ txtbCode: txtbCode });
  }
}
