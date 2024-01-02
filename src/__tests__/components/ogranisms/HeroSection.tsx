import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-canvas-mock";

import HeroSection from "../../../components/organisms/HeroSection/HeroSection";

describe("Hero Section", () => {
  test("Should render hero section", () => {
    render(<HeroSection />);
    expect(screen.getByTestId("heroSection")).toBeTruthy();
  });
});
