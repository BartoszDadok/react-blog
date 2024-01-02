import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../../components/molecules/Card/Card";

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../utils/findAuthorFullName", () => {
  return {
    findAuthorFullName: () => ({ userId: 0, name: "Test Name" }),
  };
});

describe("Card", () => {
  const card = { userId: 1, id: 0, title: "Test Title", body: "Lorem ipsum" };
  const image = {
    albumId: 1,
    id: 1,
    title: "Test Alt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/600/92c952",
  };

  test("Should render a card image", () => {
    render(<Card photo={image} card={card} />);
    expect(screen.getByAltText("Test Alt")).toBeInTheDocument();
  });

  test("Should render a card title", () => {
    render(<Card photo={image} card={card} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  test("Should render a card content", () => {
    render(<Card photo={image} card={card} />);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
  });

  test("Should render an author name", () => {
    render(<Card photo={image} card={card} />);
    expect(screen.getByText(/Test Name/i)).toBeInTheDocument();
  });

  test("Should render a button read more", () => {
    render(<Card photo={image} card={card} />);
    expect(screen.getByText("Read more")).toBeInTheDocument();
  });
});
