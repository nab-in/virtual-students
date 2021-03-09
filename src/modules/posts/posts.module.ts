import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PostsController } from 'src/modules/posts/controllers/posts.controller';
import { PostService } from 'src/modules/posts/services/posts.service';
import { PostsRepository } from './repository/posts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository])],
  providers: [PostService],
  controllers: [PostsController],
})
export class PostsModule {}
