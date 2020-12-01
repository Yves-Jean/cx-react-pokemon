let pokedex = require("../../data/pokedex.json");
let pokemons = [];

pokedex.forEach((pokemon) => {
  let pokemonInfo = {};
  for (const key in pokemon) {
    if (key !== "attaques") {
      pokemonInfo[key] = pokemon[key];
    } else {
      pokemonInfo[key] = JSON.stringify(pokemon[key]);
    }
  }
  pokemons.push(pokemonInfo);
});

exports.seed = function (knex, Promise) {
  return knex("pokemon")
    .del()
    .then(function () {
      return knex("pokemon").insert(pokemons);
    });
};
