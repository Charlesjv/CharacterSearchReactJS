import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(results.data);
      setItems(results.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
