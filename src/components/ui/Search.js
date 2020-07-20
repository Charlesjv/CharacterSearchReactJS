import React, { useState } from "react";

import "../../App.css";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search for the characters"
          autofocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </form>
    </section>
  );
};

export default Search;
