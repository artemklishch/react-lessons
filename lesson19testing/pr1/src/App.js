import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Search = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
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
      <header className="App-header">
        <Search value={search} onChange={handleChange}>
          Search:
        </Search>
        <p>Search for: {search ? search : "..."}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
