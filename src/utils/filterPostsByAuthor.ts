import { GetPostsResponse } from "../store/api/types";

export const filterPostsByAuthor = (
  posts: GetPostsResponse,
  filteringAuthors: number[]
) => {
  return posts.filter((post) => {
    return filteringAuthors.find(
      (authorID: number) => post.userId === authorID
    );
  });
};
