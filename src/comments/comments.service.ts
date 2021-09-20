import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  /**
   * INSER new comment into DB
   * @param comment to insert
   */
  create(comment: Comment) {
    return this.commentRepository.save(comment);
  }

  /**
   * SELECT * from Comments
   */
  findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  /**
   * SELECT * from Comment WHERE commentNumber is commentCode
   *
   * @param commentCode
   */
  async findOne(commentCode: number): Promise<Comment> {
    try {
      const comment = await this.commentRepository.findOneOrFail(commentCode);
      return comment;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates comment
   *
   * @param comment updated version of the comment
   */
  update(comment: Comment): Promise<Comment> {
    return this.commentRepository.save(comment);
  }

  /**
   * Removes a comment
   *
   * @param commentNumber comment that should be deleted
   */
  async remove(commentNumber: number) {
    return await this.commentRepository.delete({
      commentNumber: commentNumber,
    });
  }
}
