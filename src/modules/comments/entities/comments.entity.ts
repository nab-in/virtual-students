import { User } from 'src/modules/users/entities/users.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { generateUid } from '../../../core/helpers/makeuid';

@Entity('comment', { schema: 'public' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', {
    nullable: true,
    length: 13,
    name: 'uid',
  })
  uid: string;
  @Column()
  body: string;

  @ManyToMany(() => User, (user) => user.comments)
  @JoinTable({ name: 'userreplies' })
  user: User;
  @BeforeInsert()
  beforeUpdateTransaction() {
    this.uid = generateUid();
  }
}
