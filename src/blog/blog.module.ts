import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Blog } from './entities/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogImage } from './entities/blogImage.entity';
import { Post } from './entities/post.entity';
import { Tag } from './entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, BlogImage, Post, Tag])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
