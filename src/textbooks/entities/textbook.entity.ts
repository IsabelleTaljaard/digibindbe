//WHERE THE COLUMNS GO
import {
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
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

  @OneToMany(
    () => LearningOutcome,
    (learningOutcome) => learningOutcome.textbook,
  )
  learningOutcomes: LearningOutcome[];

  @OneToMany(() => Chapter, (chapter) => chapter.textbook)
  chapters: Chapter[];

  @ManyToMany(() => User, (user) => user.textbooks)
  users: User[];

  // @ManyToMany((type) => User, (user) => user.textbooks)
  // users: User[];

  // @OneToMany(
  //   (type) => LearningOutcome,
  //   (learningOutcome) => learningOutcome.owner,
  // )
  // learningOutcomes: LearningOutcome[];

  // @OneToMany((type) => LearningOutcome, { eager: true })
  // @JoinColumn()
  // learningOutcomes: LearningOutcome[];
}
