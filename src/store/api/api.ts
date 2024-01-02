import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiEndpoint } from "../apiEndpoint";
import {
  GetCommentsQuery,
  GetCommentsResponse,
  GetPhotoQuery,
  GetPhotosResponse,
  GetPostQuery,
  GetPostsResponse,
  Photo,
  Post,
} from "./types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiEndpoint,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<GetPostsResponse, void>({
      query: () => ({
        url: "/posts",
      }),
    }),
    getPost: builder.query<Post, GetPostQuery>({
      query: (postId) => ({
        url: `/posts/${postId}`,
      }),
    }),
    getComments: builder.query<GetCommentsResponse, GetCommentsQuery>({
      query: (postId) => ({
        url: `/comments?postId=${postId}`,
      }),
    }),
    getPhotos: builder.query<GetPhotosResponse, void>({
      query: () => ({
        url: "/photos",
      }),
      transformResponse: (response: GetPhotosResponse) =>
        response.filter((photo) => photo.id <= 100),
    }),
    getPhoto: builder.query<Photo, GetPhotoQuery>({
      query: (id) => ({
        url: `/photos/${id}`,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetPhotosQuery,
  useGetPhotoQuery,
  useGetPostQuery,
} = api;
