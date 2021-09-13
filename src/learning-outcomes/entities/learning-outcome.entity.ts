import {
  Column,
  Entity,
  JoinColumn,
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

  //@ManyToOne((type) => User, (user) => user.userNumber)
  //   @JoinColumn()
  //   codeBookOwner: User;
  //

  @ManyToOne((type) => Textbook, (textbook) => textbook.txtbCode)
  @JoinColumn()
  txtBCodeOutcome: Textbook;
}
