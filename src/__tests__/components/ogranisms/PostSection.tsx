import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useGetPhotosQuery, useGetPostsQuery } from "../../../store/api/api";
import PostsSection from "../../../components/organisms/PostsSection/PostsSection";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import posts from "../../../store/state/posts";

export const store = configureStore({
  reducer: {
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);

jest.mock("../../../store/api/api");

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../store/hooks", () => {
  const actualHooks = jest.requireActual("../../../store/hooks");
  return {
    ...actualHooks,
    useAppSelector: () => ({ filteringAuthorsIds: [1, 2] }),
  };
});

describe("Post Section", () => {
  const posts = [
    {
      userId: 1,
      id: 1,
      title: "Example Title",
      body: "Example content",
    },
    {
      userId: 2,
      id: 2,
      title: "Example Title 2",
      body: "Example content 2",
    },
    {
      userId: 3,
      id: 3,
      title: "Example Title 3",
      body: "Example content 3",
    },
  ];
  const photos = [
    {
      albumId: 1,
      id: 1,
      title: "Photo title",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/600/92c952",
    },
    {
      albumId: 2,
      id: 2,
      title: "Photo title 1",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/600/92c952",
    },
  ];

  test("Should render posts when request is successful", () => {
    (useGetPostsQuery as jest.Mock).mockReturnValue({
      data: posts,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });
    (useGetPhotosQuery as jest.Mock).mockReturnValue({
      data: photos,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });

    render(
      <Provider store={store}>
        <PostsSection />
      </Provider>
    );
    expect(screen.getByText("Example Title")).toBeInTheDocument();
    expect(screen.getByText("Example Title 2")).toBeInTheDocument();
    expect(screen.getByAltText("Photo title")).toBeInTheDocument();
    expect(screen.getByAltText("Photo title 1")).toBeInTheDocument();
  });

  test("Should render loading component when request is pending", () => {
    (useGetPostsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });
    (useGetPhotosQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isSuccess: false,
      isError: false,
      error: null,
    });

    render(
      <Provider store={store}>
        <PostsSection />
      </Provider>
    );
    expect(screen.getByText("Loading articles...")).toBeInTheDocument();
  });

  test("Should render error component when request failed", () => {
    (useGetPostsQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: null,
    });
    (useGetPhotosQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isSuccess: false,
      isError: true,
      error: null,
    });

    render(
      <Provider store={store}>
        <PostsSection />
      </Provider>
    );
    expect(
      screen.getByText(
        "Something went wrong with fetching posts. Try again in a moment!"
      )
    ).toBeInTheDocument();
  });

  test("Should show posts of user with id 1 and 2", () => {
    (useGetPostsQuery as jest.Mock).mockReturnValue({
      data: posts,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });
    (useGetPhotosQuery as jest.Mock).mockReturnValue({
      data: photos,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });

    render(
      <Provider store={store}>
        <PostsSection />
      </Provider>
    );
    expect(screen.getByText("Example Title")).toBeInTheDocument();
    expect(screen.getByText("Example Title 2")).toBeInTheDocument();
    expect(screen.queryByText("Example Title 3")).not.toBeInTheDocument();
  });
});
