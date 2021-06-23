import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/storm/i);
  expect(linkElement).toBeInTheDocument();
});

test("pass valid search to test search input field", () => {
  render(<App />);

  const inputEl = screen.getByText("storm");
  userEvent.type(inputEl, "storm");

  expect(screen.getByText("storm")).toHaveValue("storm");
  expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
});
