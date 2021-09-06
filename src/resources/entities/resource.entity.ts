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

  // @ManyToMany((type) => Resource)
  // @JoinColumn()
  // resources: Resource[];

  @ManyToMany((type) => Chapter)
  chapters: Chapter[];

  //resourceContent: string/image/video?

  // @ManyToMany((type) => Chapter, (chapter) => chapter.resources)
  // chapters: Chapter[];
}
