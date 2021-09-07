/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Blog } from './blog.entity';
import { Tag } from './tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Blog, blog => blog.posts)
  blog: Blog;

  @ManyToMany(() => Tag, tag => tag.posts)
  tags: Tag[];
}
