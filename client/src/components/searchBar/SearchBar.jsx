import React from "react";
import "./searchBar.scss";

import searchIcon from "../../assets/images/search.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <input placeholder="Search Pokemon" type="text" name="search" />
      <button>
        <img src={searchIcon} alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
