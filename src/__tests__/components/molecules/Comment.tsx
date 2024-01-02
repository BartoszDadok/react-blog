import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comment from "../../../components/molecules/Comment/Comment";

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../utils/getRandomNumberBetween", () => {
  return {
    getRandomNumberBetween: () => 27,
  };
});

describe("Card", () => {
  const comment = {
    postId: 1,
    id: 1,
    name: "comment1",
    email: "222@222.com",
    body: "Exmaple text comment",
  };
  test("Should render an avatar", () => {
    render(<Comment commentData={comment} />);
    expect(screen.getByTestId("PersonIcon")).toBeTruthy();
  });

  test("Should render a comment name", () => {
    render(<Comment commentData={comment} />);
    expect(screen.getByText("comment1")).toBeInTheDocument();
  });

  test("Should render a comment content", () => {
    render(<Comment commentData={comment} />);
    expect(screen.getByText("Exmaple text comment")).toBeInTheDocument();
  });

  test("Should render a time", () => {
    render(<Comment commentData={comment} />);
    expect(screen.getByText("posted 27 minute ago")).toBeInTheDocument();
  });
});
