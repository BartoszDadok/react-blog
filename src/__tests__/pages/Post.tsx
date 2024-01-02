import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  useGetPostQuery,
  useGetPhotoQuery,
  useGetCommentsQuery,
} from "../../store/api/api";
import Post from "../../pages/Post/Post";

jest.mock("../../store/api/api");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Post Page", () => {
  const post = {
    userId: 1,
    id: 1,
    title: "Example Title Post Page",
    body: "Example content",
  };
  const photo = {
    albumId: 1,
    id: 1,
    title: "Photo title Post Page",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/600/92c952",
  };
  const comments = [
    {
      postId: 1,
      id: 1,
      name: "Comment name",
      email: "email@email.com",
      body: "Comment content",
    },
    {
      postId: 2,
      id: 2,
      name: "Comment name 2",
      email: "email@email.com 2",
      body: "Comment content 2",
    },
  ];

  test("Should render post when request is successful", () => {
    (useGetPostQuery as jest.Mock).mockReturnValue({
      data: post,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });
    (useGetPhotoQuery as jest.Mock).mockReturnValue({
      data: photo,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });
    (useGetCommentsQuery as jest.Mock).mockReturnValue({
      data: comments,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });

    render(<Post />);
    expect(screen.getByText("Example Title Post Page")).toBeInTheDocument();
    expect(screen.getByAltText("Photo title Post Page")).toBeInTheDocument();
  });

  test("Should render loading component when request is pending", () => {
    (useGetPostQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });
    (useGetPhotoQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });

    render(<Post />);
    expect(screen.getByText("Loading article...")).toBeInTheDocument();
  });

  test("Should render error component when request failed", () => {
    (useGetPostQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: null,
    });
    (useGetPhotoQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: null,
    });

    render(<Post />);
    expect(
      screen.getByText(
        "Something went wrong with fetching post`s data. Try again in a moment!"
      )
    ).toBeInTheDocument();
  });
});
