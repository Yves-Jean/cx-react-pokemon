import React, { useContext } from "react";
import "./searchBar.scss";
import searchIcon from "../../assets/images/search.svg";

import { FilterContext } from "../pokemonList/PokemonList";

const SearchBar = () => {
  const [setFilterResult, setfilterState, pokemons] = useContext(FilterContext);

  const filterPokemons = (event) => {
    const seachName = event.target.value;

    setfilterState(seachName !== "");

    const result = pokemons.filter(
      (pokemon) =>
        pokemon.nom.toLowerCase().includes(seachName.toLowerCase()) ||
        pokemon.numero.includes(seachName)
    );
    setFilterResult(result);
  };

  return (
    <div className="search">
      <input
        placeholder="Search Pokemon"
        type="text"
        name="search"
        onChange={filterPokemons}
      />
      <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
  );
};

export default SearchBar;
