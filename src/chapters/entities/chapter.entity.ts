import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JoinTable } from 'typeorm/browser';
import { Resource } from '../../resources/entities/resource.entity';
import { Textbook } from '../../textbooks/entities/textbook.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  chapCode: number;
  @Column()
  chapTitle: string;

  @ManyToOne(() => Textbook, (textbook) => textbook.chapters, {
    onDelete: 'SET NULL',
  })
  textbook: Textbook;

  //@JoinTable() -> a chapter can own resources
  @ManyToMany(() => Resource, (resource) => resource.chapters)
  @JoinTable()
  resources: Resource[];

  /*@ManyToMany((type) => Resource, (resource) => resource.chapters)
  @JoinTable()
  resources: Resource[];*/
}
