/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/entities/blog.entity';
import { BlogImage } from './blog/entities/blogImage.entity';
import { Post } from './blog/entities/post.entity';
import { Tag } from './blog/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'codebrains',
      password: 'codebrains',
      database: 'codebrains',
      schema: 'typeORMBasics',
      entities: [Blog, BlogImage, Post, Tag],
      synchronize: true,
    }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
