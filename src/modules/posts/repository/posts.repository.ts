import { Post } from './../entities/posts.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {
  async getPosts() {
    return await this.find();
  }
}
