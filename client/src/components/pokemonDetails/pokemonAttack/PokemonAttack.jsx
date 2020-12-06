import React from "react";
import "./pokemonAttack.scss";

const PokemonAttack = ({ attaques }) => {
  return (
    <div className="container mg-y-4">
      <h2>Attacks</h2>
      <div className="attaques">
        {attaques.map(({ attaques_id, pokemon_id, ...attaque }) => (
          <div className="attaques-item" key={attaques_id + pokemon_id}>
            {Object.keys(attaque).map((key, i) => {
              return (
                <div className="attaques-content" key={pokemon_id + i}>
                  <div className="key">{key}</div>
                  <div className="value">{attaque[key]}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonAttack;
