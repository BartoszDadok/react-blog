import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeroContent from "../../../components/molecules/HeroContent.tsx/HeroContent";

describe("Hero Content", () => {
  test("Should render a hero conent component", () => {
    render(<HeroContent />);
    expect(screen.getByText("React Demo Blog")).toBeInTheDocument();
  });
});
