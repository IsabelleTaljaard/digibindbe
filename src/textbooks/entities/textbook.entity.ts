//WHERE THE COLUMNS GO
import {
  Column,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Entity } from 'typeorm';
import { LearningOutcome } from '../../learning-outcomes/entities/learning-outcome.entity';
import { Chapter } from '../../chapters/entities/chapter.entity';

@Entity()
export class Textbook {
  @PrimaryGeneratedColumn()
  txtbCode: number;
  @Column()
  txtbName: string;
  @Column()
  txtbDescription: string;
  @Column()
  txtbPublishedStatus: string;

  @Column('text', { nullable: true })
  txtbCoverImage: string;

  @OneToMany(
    (type) => LearningOutcome,
    (learningOutcome) => learningOutcome.txtBCodeOutcome,
  )
  learningOutcomes: LearningOutcome[];

  @OneToMany((type) => Chapter, (chapter) => chapter.textbook)
  chapters: Chapter[];

  @ManyToOne((type) => User, (user) => user.userNumber)
  @JoinColumn()
  codeBookOwner: User;
}
