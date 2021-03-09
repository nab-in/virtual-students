import { Post } from 'src/modules/posts/entities/posts.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity()
export class Reply extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  body: string;

  @Column()
  like: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToOne((type) => Post, (post) => post.replies, { eager: false })
  post: Post;

  @TreeChildren()
  children: Reply[];

  @TreeParent()
  parent: Reply;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Reply, (reply) => reply.parent, { onDelete: 'CASCADE' })
  replies: Reply[];
}
