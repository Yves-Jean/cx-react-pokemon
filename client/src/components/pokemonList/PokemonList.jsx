import React, { useState, useEffect } from "react";
import "./pokemonList.scss";
import PokemonItem from "./pokemonItem/PokemonItem";
import { getAllPokemons } from "../../services/pokemon.service";
import SearchBar from "../searchBar/SearchBar";

export const FilterContext = React.createContext();

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filterResult, setFilterResult] = useState([]);
  const [filterState, setfilterState] = useState(false);

  useEffect(() => {
    getAllPokemons()
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayPokemon = (collection) => {
    return collection.map((p, index) => (
      <PokemonItem key={p.numéro + index} pokemon={p} />
    ));
  };

  return (
    <FilterContext.Provider value={[setFilterResult, setfilterState, pokemons]}>
      <SearchBar />
      <div className="pokemon-list display-flex flex-wrap flex-justify-center mg-tp-4">
        {filterState ? displayPokemon(filterResult) : displayPokemon(pokemons)}
      </div>
    </FilterContext.Provider>
  );
};

export default PokemonList;
