import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Chapter } from '../../chapters/entities/chapter.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  resourceCode: number;
  @Column()
  resourceDescription: string;
  @Column()
  resourceType: string;
  @Column()
  resourceName: string;

  //Encoded resource content to store it as a string
  @Column('text')
  resourceContent: string;

  @Column({ default: 999 })
  resourceTextbookCode: number;

  @ManyToMany((type) => Chapter)
  chapters: Chapter[];
}
