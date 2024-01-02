import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SocialItems from "../../../components/molecules/SocialItems/SocialItems";
import { BrowserRouter } from "react-router-dom";

describe("Social Items", () => {
  test("Should render social items", () => {
    render(
      <BrowserRouter>
        <SocialItems />
      </BrowserRouter>
    );
    expect(screen.getByTestId("TwitterIcon")).toBeInTheDocument();
    expect(screen.getByTestId("InstagramIcon")).toBeInTheDocument();
    expect(screen.getByTestId("FacebookIcon")).toBeInTheDocument();
  });
});
