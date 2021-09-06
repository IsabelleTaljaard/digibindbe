import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Textbook } from '../../textbooks/entities/textbook.entity';

@Entity()
export class LearningOutcome {
  @PrimaryGeneratedColumn()
  learnOutCode: number;
  @Column()
  learnOutItem: string;

  // @ManyToOne((type) => Textbook, {
  //   onDelete: 'SET NULL',
  // })
  // textbook: Textbook;

  @ManyToOne((type) => Textbook, {
    onDelete: 'SET NULL',
  })
  textbook: Textbook;

  // @ManyToOne((type) => Textbook, (textbook) => textbook.learningOutcomes)
  // owner: Textbook;

  // @ManyToOne((type) => Textbook, { eager: true })
  // @JoinColumn()
  // textbook: Textbook;
}
