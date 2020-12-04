import React from "react";
import "./pokemonItem.scss";

const PokemonItem = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt="pokemon"
        />
      </div>
      <div className="card-body">
        <p>#001</p>
        <p>Carapuce</p>
      </div>
    </div>
  );
};

export default PokemonItem;
