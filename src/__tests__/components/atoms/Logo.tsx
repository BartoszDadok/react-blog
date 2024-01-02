import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../../../components/atoms/Logo/Logo";
import { BrowserRouter } from "react-router-dom";

describe("Logo", () => {
  test("Should render logo", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );
    expect(screen.getByText("REACT BLOG")).toBeInTheDocument();
  });
});
