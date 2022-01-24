import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const getUser = () => Promise.resolve({ id: 1, name: "Bob" });

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
        // required
      />
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const loadedUser = await getUser();
      setUser(loadedUser);
    };
    loadUser();
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <div className="App">
      {user && <h2>Logged in as {user.name}</h2>}
      <img className="image" src="" alt="search image" />
      <Search value={search} onChange={handleChange}>
        SEARCH:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
