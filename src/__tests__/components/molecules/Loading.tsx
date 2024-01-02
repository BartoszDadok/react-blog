import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../../../components/molecules/Loading/Loading";

describe("Loading Spinner", () => {
  const title = "Loading...";
  test("Should render loading text", () => {
    render(<Loading title={title} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  test("Should render loading spinner", () => {
    render(<Loading title={title} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
