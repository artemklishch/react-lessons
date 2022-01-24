import { render, screen } from "@testing-library/react";
import App from "./App";

// describe("App", () => {
//   // it("render App component", () => {
//   //   render(<App />);
//   //   screen.debug();
//   //   expect(screen.getByText(/Search:/i)).toBeInTheDocument();
//   // });

//   // it("render App component", () => {
//   //   render(<App />);
//   //   expect(screen.getByText(/Search:/i)).toBeInTheDocument();
//   //   expect(screen.getByRole("textbox")).toBeInTheDocument(); // textbox - єлемент инпута
//   //   expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
//   //   expect(
//   //     screen.getByPlaceholderText("Type text here...")
//   //   ).toBeInTheDocument();
//   //   expect(screen.getByAltText("search image")).toBeInTheDocument();
//   //   expect(screen.getByDisplayValue("")).toBeInTheDocument();
//   // });

//   it("render App component", () => {
//     render(<App />);
//     expect(screen.queryByText(/Searches for React/i)).toBeNull();
//   });
// });

describe("App", () => {
  it("render App component", async () => {
    render(<App />);
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    screen.debug();
    expect(screen.getByAltText(/search image/i)).toHaveClass("image");
    expect(screen.getByLabelText(/search/i)).not.toBeRequired();
    // expect(screen.getByLabelText(/search/i)).toBeRequired();
    expect(screen.getByLabelText(/search/i)).toBeEmpty();
    expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");
  });
});
