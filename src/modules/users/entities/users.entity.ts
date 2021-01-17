import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { generateUid } from '../../../core/helpers/makeuid';

@Entity('user', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('char', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('varchar', {
    nullable: true,
    name: 'firstname',
  })
  firstname: string;

  @Column('varchar', {
    nullable: false,
    name: 'lastname',
  })
  lastname: string;

  @Column('varchar', {
    nullable: false,
    name: 'username',
  })
  username: string;

  @Column('varchar', {
    nullable: false,
    name: 'password',
  })
  password: string;

  @BeforeInsert()
  beforeUpdateTransaction() {
    this.uid = generateUid();
  }
}
