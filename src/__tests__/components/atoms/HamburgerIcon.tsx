import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HamburgerIcon from "../../../components/atoms/HamburgerIcon/HamburgerIcon";

describe("Hamburger Icon", () => {
  test("Should render hamburger icon", () => {
    render(<HamburgerIcon setOpen={() => {}} />);
    expect(screen.getByTestId("MenuIcon")).toBeTruthy();
  });
});
