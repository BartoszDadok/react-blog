import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Posts from "../../../components/molecules/Posts/Posts";

describe("Posts", () => {
  const posts = [
    {
      userId: 1,
      id: 1,
      title: "Example Title",
      body: "Example Content",
    },
    {
      userId: 2,
      id: 2,
      title: "Example Title 1",
      body: "Example Content 1",
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

  test("Should render posts grid", () => {
    render(<Posts postsToDisplay={posts} dataPhotos={photos} />);
    expect(screen.getByText("Example Title")).toBeInTheDocument();
    expect(screen.getByText("Example Title 1")).toBeInTheDocument();
  });
});
