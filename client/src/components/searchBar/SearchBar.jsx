import React from "react";
import "./searchBar.scss";

const SearchBar = () => {
  return (
    <div className="search">
      <input placeholder="Search Pokemon" type="text" name="search" />
      <button>btn</button>
    </div>
  );
};

export default SearchBar;
