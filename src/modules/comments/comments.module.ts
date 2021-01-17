import { CommentsService } from './services/comments.service';
import { Module } from '@nestjs/common';
import { CommentsController } from 'src/modules/comments/controllers/comments.controller';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
