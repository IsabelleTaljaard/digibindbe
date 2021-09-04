import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Textbook } from '../../textbooks/entities/textbook.entity';
import { JoinTable } from 'typeorm/browser';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userNumber: number;
  @Column()
  userType: string;
  @Column()
  userDisplayName: string;
  @Column()
  userPassword: string;
  @Column()
  userEmail: string;

  //@JoinTable() -> a user can own textbooks
  @ManyToMany(() => Textbook, (textbook) => textbook.users)
  @JoinTable()
  textbooks: Textbook[];

  /*@ManyToMany((type) => Textbook, (textbook) => textbook.users)
  @JoinTable()
  textbooks: Textbook[];*/
}
