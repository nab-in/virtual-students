import { generateUid } from 'src/core/helpers/makeuid';
import { Post } from 'src/modules/posts/entities/posts.entity';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity('reply')
export class Reply extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  body: string;

  @Column()
  like: number;

  @ManyToOne(() => Post, (post) => post.replies, { eager: false })
  post: Post;

  @TreeChildren()
  children: Reply[];

  @TreeParent()
  parent: Reply;

  @OneToMany(() => Reply, (reply) => reply.parent, { onDelete: 'CASCADE' })
  replies: Reply[];
  @BeforeInsert()
  beforeInsertTransaction() {
    this.uid = generateUid();
  }
}
