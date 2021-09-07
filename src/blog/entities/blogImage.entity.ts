/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogImage {
  @PrimaryGeneratedColumn()
  blogImageId: number;

  @Column()
  imageLink: string;

  @Column()
  imageCaption: string;
}
