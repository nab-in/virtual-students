import { Reply } from 'src/modules/replies/entities/replies.entity';
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
  uuid: string;

  @Column()
  body: string;

  @Column()
  like: number;

  @Column()
  attachment: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Reply, (reply) => reply.post, { eager: true })
  replies: Reply[];
}
