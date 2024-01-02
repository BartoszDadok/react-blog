import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FooterSection from "../../../components/organisms/FooterSection/FooterSection";
import { BrowserRouter } from "react-router-dom";

describe("Footer Section", () => {
  test("Should render footer section", () => {
    render(
      <BrowserRouter>
        <FooterSection />
      </BrowserRouter>
    );
    expect(screen.getByText("Follow Us")).toBeInTheDocument();
  });
});
