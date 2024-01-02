import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SinglePostTitle from "../../../components/atoms/SinglePostTitle/SinglePostTitle";

describe("SinglePostTitle", () => {
  test("Should render post title", () => {
    render(<SinglePostTitle title='ExampleTitle' />);
    expect(screen.getByText("ExampleTitle")).toBeInTheDocument();
  });
});
