import { Reply } from '../../replies/entities/replies.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  body: string;

  @Column()
  like: number;

  @Column()
  attachment: string;

  @OneToMany(() => Reply, (reply) => reply.post, { eager: true })
  replies: Reply[];
}
