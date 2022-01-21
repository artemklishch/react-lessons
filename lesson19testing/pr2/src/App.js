import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Search = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type text here..."
      />
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <div className="App">
      <img src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        SEARCH:
      </Search>
      <p>Search for: {search ? search : "..."}</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
