import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const URL = "http://hn.algolia.com/api/v1/search";

function App() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    try {
      const result = await axios.get(`${URL}?query=React`);
      setNews(result.data.hits);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div className="App">
      <button type="button" onClick={handleFetch}>
        Fetch News
      </button>
      {error && <span>Something went wrong...</span>}
      <ul>
        {news.map(({ objectID, url, title }) => (
          <li key={objectID}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
