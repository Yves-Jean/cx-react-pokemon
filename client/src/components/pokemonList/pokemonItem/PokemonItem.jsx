import React from "react";
import "./pokemonItem.scss";

const PokemonItem = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.numero}.png`}
          alt="pokemon"
        />
      </div>
      <div className="card-body">
        <p>#{pokemon.numero}</p>
        <p>{pokemon.nom}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
