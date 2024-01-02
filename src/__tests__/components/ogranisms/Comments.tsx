import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useGetCommentsQuery } from "../../../store/api/api";
import Comments from "../../../components/organisms/Comments/Comments";

jest.mock("../../../store/api/api");

describe("Comments", () => {
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
  test("Should render comments", () => {
    (useGetCommentsQuery as jest.Mock).mockReturnValueOnce({
      data: comments,
      isLoading: false,
      isSuccess: true,
      isError: false,
      error: null,
    });

    render(<Comments />);

    expect(screen.getByText("Comment name")).toBeInTheDocument();
    expect(screen.getByText("Comment content")).toBeInTheDocument();
    expect(screen.getByText("Comment name 2")).toBeInTheDocument();
    expect(screen.getByText("Comment content 2")).toBeInTheDocument();
  });
});
