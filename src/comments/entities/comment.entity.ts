import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentNumber: number;
  @Column()
  commentUser: number;
  @Column()
  commentBook: number;
  @Column()
  commentContent: string;
}
