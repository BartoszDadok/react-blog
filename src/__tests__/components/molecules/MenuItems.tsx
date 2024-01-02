import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import MenuItems from "../../../components/molecules/MenuItems/MenuItems";

describe("Menu Items", () => {
  const MenuLinks = [
    {
      Name: "Test1",
      Link: "TestLink1",
    },
  ];
  test("Should render menu items", () => {
    render(
      <BrowserRouter>
        <MenuItems MenuLinks={MenuLinks} />
      </BrowserRouter>
    );
    expect(screen.getByText("Test1")).toBeInTheDocument();
  });
});
