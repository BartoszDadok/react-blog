import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import { BrowserRouter } from "react-router-dom";

describe("Navigation Bar", () => {
  test("Should render navigation bar", () => {
    render(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    );
    expect(screen.getByText("REACT BLOG")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByTestId("MenuIcon")).toBeTruthy();
    expect(screen.getByTestId("TwitterIcon")).toBeTruthy();
  });
});
