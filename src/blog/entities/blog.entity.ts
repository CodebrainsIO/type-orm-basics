import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { BlogImage } from './blogImage.entity';
import { Post } from './post.entity';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  blogName: string;

  @Column()
  blogUrl: string;

  @Column({ nullable: true })
  active!: boolean;

  @OneToOne(() => BlogImage)
  @JoinColumn()
  blogImage: BlogImage;

  // eslint-disable-next-line prettier/prettier
  @OneToMany(() => Post, post => post.blog)
  posts: Post[];
}
