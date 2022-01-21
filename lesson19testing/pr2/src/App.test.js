import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  // it("render App component", () => {
  //   render(<App />);
  //   screen.debug();
  //   expect(screen.getByText(/Search:/i)).toBeInTheDocument();
  // });
  it("render App component", () => {
    render(<App />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument(); // textbox - єлемент инпута
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Type text here...")
    ).toBeInTheDocument();
    expect(screen.getByAltText("search image")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});
