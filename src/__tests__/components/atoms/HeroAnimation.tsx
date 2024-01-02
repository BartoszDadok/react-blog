import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-canvas-mock";

import HeroAnimation from "../../../components/atoms/HeroAnimation/HeroAnimation";

describe("Hero Animation", () => {
  test("Should render Lottie hero animation", () => {
    render(<HeroAnimation />);
    expect(screen.getByTestId("HeroAnimationLottie")).toBeTruthy();
  });
});
