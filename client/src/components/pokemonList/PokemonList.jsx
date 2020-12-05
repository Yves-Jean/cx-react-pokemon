import React, { useState, useEffect } from "react";
import "./pokemonList.scss";
import PokemonItem from "./pokemonItem/PokemonItem";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log("use effet");
    fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pokemon-list display-flex flex-wrap flex-justify-center mg-tp-4">
      {pokemons.map((p, index) => (
        <PokemonItem key={p.numéro + index} pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;
