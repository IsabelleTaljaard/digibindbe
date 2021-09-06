import { Injectable } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chapter } from './chapters/entities/chapter.entity';
import { LearningOutcome } from './learning-outcomes/entities/learning-outcome.entity';
import { Resource } from './resources/entities/resource.entity';
import { Textbook } from './textbooks/entities/textbook.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Chapter) private chapterRepo: Repository<Chapter>,
    @InjectRepository(LearningOutcome)
    private learningOutRepo: Repository<LearningOutcome>,
    @InjectRepository(Resource) private resourceRepo: Repository<Resource>,
    @InjectRepository(Textbook) private textbookRepo: Repository<Textbook>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
}
