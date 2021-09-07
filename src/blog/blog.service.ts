import { Injectable } from '@nestjs/common';
import { CreateBlogDto, CreatePostDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { BlogImage } from './entities/blogImage.entity';
import { Post } from './entities/post.entity';
import { Tag } from './entities/tag.entity';
@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
    @InjectRepository(BlogImage)
    private blogImageRepository: Repository<BlogImage>,
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async create(createBlogDto: CreateBlogDto) {
    const image = await this.blogImageRepository.save(createBlogDto.blogImage);
    const blog = createBlogDto;
    blog.blogImage = image;
    return await this.blogRepository.save(blog);
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogRepository
      .createQueryBuilder('blog')
      .where('blog.active = :active', { active: true })
      .getMany();
  }

  async findOne(id: number): Promise<Blog | null> {
    return await this.blogRepository.findOneOrFail(id);
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = await this.blogRepository.findOneOrFail(id);
    if (!blog.id) {
      // tslint:disable-next-line:no-console
      console.error("blog doesn't exist");
    }
    await this.blogRepository.update(id, updateBlogDto);
    return await this.blogRepository.findOne(id);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.blogRepository.delete(id);
  }
}
