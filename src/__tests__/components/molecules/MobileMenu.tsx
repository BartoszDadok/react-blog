import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MobileMenu from "../../../components/molecules/MobileMenu/MobileMenu";

describe("Menu Mobile", () => {
  const setOpen = jest.fn();

  const MenuLinks = [
    {
      Name: "Test1",
      Link: "TestLink1",
    },
  ];
  test("Should render mobile menu items", () => {
    render(
      <BrowserRouter>
        <MobileMenu open={true} setOpen={setOpen} MenuLinks={MenuLinks} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test1")).toBeInTheDocument();
  });
});
