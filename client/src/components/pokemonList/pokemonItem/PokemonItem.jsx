import React from "react";
import { NavLink } from "react-router-dom";
import "./pokemonItem.scss";

const PokemonItem = ({ pokemon }) => {
  return (
    <NavLink to={`pokemon/${pokemon.numero}`}>
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
    </NavLink>
  );
};

export default PokemonItem;
