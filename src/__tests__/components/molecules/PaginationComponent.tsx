import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import PaginationComponent from "../../../components/molecules/PaginationComponent/PaginationComponent";

describe("Pagination", () => {
  const paginate = jest.fn();

  test("Should render pagination", () => {
    render(
      <PaginationComponent
        amountOfPages={5}
        currentPage={1}
        paginate={paginate}
      />
    );
    expect(screen.getByTestId("NavigateBeforeIcon")).toBeTruthy();
    expect(screen.getByTestId("NavigateNextIcon")).toBeTruthy();
  });

  test("Should call paginate function after click in next page button", () => {
    render(
      <PaginationComponent
        amountOfPages={5}
        currentPage={1}
        paginate={paginate}
      />
    );
    const button = screen.getByTestId("NavigateNextIcon");
    fireEvent.click(button);

    expect(paginate).toHaveBeenCalledTimes(1);
  });
});
