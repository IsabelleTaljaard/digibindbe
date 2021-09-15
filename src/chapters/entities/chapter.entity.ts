import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Resource } from '../../resources/entities/resource.entity';
import { Textbook } from '../../textbooks/entities/textbook.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  chapCode: number;
  @Column()
  chapIndexNumber: number;
  @Column()
  chapTitle: string;
  @Column()
  chaptComments: string;

  @ManyToOne((type) => Textbook, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  textbook: Textbook;

  @ManyToMany((type) => Resource)
  @JoinColumn()
  resources: Resource[];
}
