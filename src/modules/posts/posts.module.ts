import { Module } from '@nestjs/common';
import { PostsController } from 'src/modules/posts/controllers/posts.controller';
import { PostsService } from 'src/modules/posts/services/posts.service';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
