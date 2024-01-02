import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Error from "../../../components/molecules/Error/Error";

describe("Error component", () => {
  const refetch = jest.fn();
  const title = "Something went wrong";

  test("Should render an error component", () => {
    render(<Error title={title} refetch={refetch} />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  test("Should call refetch function after button is clicked", () => {
    render(<Error title={title} refetch={refetch} />);
    const button = screen.getByText("Try again!");
    fireEvent.click(button);
    expect(refetch).toBeCalledTimes(1);
  });
});
