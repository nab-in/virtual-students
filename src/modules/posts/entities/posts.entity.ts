import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
