import { Module } from '@nestjs/common';
import { PostsController } from 'src/controllers/posts/posts.controller';
import { PostsService } from 'src/services/posts/posts.service';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
