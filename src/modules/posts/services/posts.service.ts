import { PostsRepository } from './../repository/posts.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostsRepository)
    private postsRepository: PostsRepository,
  ) {}
  async getPosts() {
    return await this.postsRepository.getPosts();
  }
}
