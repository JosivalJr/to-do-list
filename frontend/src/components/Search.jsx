import React from "react";

const Search = ({ search, setSearch }) => (
  <div>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Pesquisar"
    />
  </div>
);

export default Search;
