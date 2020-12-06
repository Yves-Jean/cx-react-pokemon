import React from "react";
import "./PokemonIdentity.scss";

const PokemonIdentity = ({ pokemonIndentity }) => {
  return (
    <div className="container">
      <h2>Identity</h2>
      <div className="identity">
        {Object.keys(pokemonIndentity).map((key, i) => {
          if (pokemonIndentity[key]) {
            return (
              <div className="identity-item" key={i}>
                <div className="key">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
                <div className="value">{pokemonIndentity[key]}</div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
export default PokemonIdentity;
