import { Controller, Get } from '@nestjs/common';
import { PostService } from '../services/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}
  @Get()
  getPosts() {
    return this.postService.getPosts();
  }
}
