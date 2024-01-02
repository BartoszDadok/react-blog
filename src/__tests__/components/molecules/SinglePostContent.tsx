import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SinglePostContent from "../../../components/molecules/SinglePostContent/SinglePostContent";

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../utils/findAuthorFullName", () => {
  return {
    findAuthorFullName: () => ({ userId: 0, name: "Test Name" }),
  };
});

describe("SinglePostContent", () => {
  const postDetail = {
    userId: 1,
    id: 0,
    title: "Test Title",
    body: "Lorem ipsum",
  };
  const image = {
    albumId: 1,
    id: 1,
    title: "Test Alt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/600/92c952",
  };

  test("Should render post image", () => {
    render(<SinglePostContent postDetails={postDetail} image={image} />);
    expect(screen.getByAltText("Test Alt")).toBeInTheDocument();
  });

  test("Should render post content", () => {
    render(<SinglePostContent postDetails={postDetail} image={image} />);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
  });

  test("Should render author name", () => {
    render(<SinglePostContent postDetails={postDetail} image={image} />);
    expect(screen.getByText(/Test Name/i)).toBeInTheDocument();
  });
});
