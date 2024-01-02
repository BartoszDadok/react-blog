export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type GetPostsResponse = Post[];

export type GetPostQuery = string;

export type CommentTypes = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type GetCommentsResponse = CommentTypes[];

export type GetCommentsQuery = number;

export type GetPhotoQuery = string;

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type GetPhotosResponse = Photo[];

export type Refetch = () => void;
