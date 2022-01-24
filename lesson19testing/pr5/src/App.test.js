import {
  render,
  screen,
  fireEvent,
  findAllByRole,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "./App";

jest.mock("axios");
const URL = "http://hn.algolia.com/api/v1/search?query=React";
const hits = [
  { objectID: "1", title: "Angular" },
  { objectID: "2", title: "React" },
];

describe("App", () => {
  it("fetch news from api", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
    const { getByRole, findAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(2);

    // additional
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(URL);
  });

  it("fetch news from api and reject", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    const { getByRole, findByText } = render(<App />);
    userEvent.click(getByRole("button"));
    const message = await findByText(/Something went wrong/);
    expect(message).toBeInTheDocument();
  });

  it("fetch news from api and act", async () => {
    const promise = Promise.resolve({ data: { hits } });
    axios.get.mockImplementationOnce(() => promise);
    const { getByRole, getAllByRole } = render(<App />);
    userEvent.click(getByRole("button"));
    await act(() => promise);
    expect(getAllByRole("listitem")).toHaveLength(2);
  });
});
