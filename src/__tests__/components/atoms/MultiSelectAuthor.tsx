import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiSelectAuthor from "../../../components/atoms/MultiSelectAuthor/MultiSelectAuthor";

import { Provider } from "react-redux";
import { store } from "../../../store";

beforeEach(() => {
  jest.resetAllMocks();
});

const mockedDispatch = jest.fn();
jest.mock("../../../store/hooks", () => {
  const actualHooks = jest.requireActual("../../../store/hooks");
  return {
    ...actualHooks,
    useAppDispatch: () => mockedDispatch,
  };
});

const authors = [
  { userId: 1, name: "Aidan Mckinney" },
  { userId: 2, name: "Adam Bars" },
];

describe("MultiSelectAuthor", () => {
  test("Should render a multi-select-author component", async () => {
    render(
      <Provider store={store}>
        <MultiSelectAuthor authors={authors} />
      </Provider>
    );

    expect(screen.getByText("Select author")).toBeInTheDocument();
  });

  test("Should render authors", async () => {
    render(
      <Provider store={store}>
        <MultiSelectAuthor authors={authors} />
      </Provider>
    );
    const selectCompoEl = screen.getByTestId("SelectElement");

    const button = within(selectCompoEl).getByRole("combobox");
    fireEvent.mouseDown(button);

    const listbox = within(screen.getByRole("presentation")).getByRole(
      "listbox"
    );

    const options = within(listbox).getAllByRole("option");
    const optionValues = options.map((li) => li.getAttribute("data-value"));

    expect(optionValues).toEqual(["", "Aidan Mckinney", "Adam Bars"]);
  });

  test("Should call dispatch function after an author is clicled", async () => {
    render(
      <Provider store={store}>
        <MultiSelectAuthor authors={authors} />
      </Provider>
    );
    const selectCompoEl = screen.getByTestId("SelectElement");

    const button = within(selectCompoEl).getByRole("combobox");
    fireEvent.mouseDown(button);

    const listbox = within(screen.getByRole("presentation")).getByRole(
      "listbox"
    );

    const options = within(listbox).getAllByRole("option");
    const optionValues = options.map((li) => li.getAttribute("data-value"));

    expect(optionValues).toEqual(["", "Aidan Mckinney", "Adam Bars"]);

    fireEvent.click(options[1]);

    expect(mockedDispatch).toHaveBeenCalledWith({
      payload: [1],
      type: "Posts/saveAuthorsIds",
    });
  });
});
