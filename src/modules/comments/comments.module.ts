import { CommentsService } from '../../services/comments/comments.service';
import { Module } from '@nestjs/common';
import { CommentsController } from 'src/controllers/comments/comments.controller';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
