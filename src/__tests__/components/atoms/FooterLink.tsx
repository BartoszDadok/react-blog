import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterLink from "../../../components/atoms/FooterLink/FooterLink";
import { BrowserRouter } from "react-router-dom";

describe("Footer Link", () => {
  test("Should render footer link", () => {
    render(
      <BrowserRouter>
        <FooterLink title={"Contact us"} />
      </BrowserRouter>
    );
    expect(screen.getByText("Contact us")).toBeInTheDocument();
  });
});
