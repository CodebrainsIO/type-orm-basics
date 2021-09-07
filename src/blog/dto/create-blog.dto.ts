export class CreateBlogImageDto {
  blogImageId!: number;
  imageLink: string;
  imageCaption: string;
}
export class CreateBlogDto {
  blogName: string;
  blogUrl: string;
  active: boolean;
  blogImage: CreateBlogImageDto;
}

export class CreatePostDto {
  postId!: number;
  title: string;
  content: string;
}

export class CreateTagDto {
  tagId: number;
  tag: string;
}
