import React from "react";
import "./pokemonAttack.scss";

const PokemonAttack = ({ attaques }) => {
  console.log(attaques);
  return (
    <div className="container mg-y-4">
      <h2>Attacks</h2>
      <div className="attaques">
        {attaques.map((attaque) => (
          <div className="attaques-item" key={attaque.attaques_id}>
            {Object.keys(attaque).map((key, i) => {
              if (key !== "attaques_id" && key !== "pokemon_id") {
                return (
                  <div className="attaques-content" key={i}>
                    <div className="key">{key}</div>
                    <div className="value">{attaque[key]}</div>
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonAttack;
