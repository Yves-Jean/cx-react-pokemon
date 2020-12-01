const contents = require("../../data/pokedex.json");

const pokemons = [];
const dataAttaques = [];
contents.forEach((element) => {
  const { attaques, ...data } = element;
  pokemons.push(data);
  attaques.forEach((att) => {
    att.pokemon_id = data.numéro || data.numero;
    dataAttaques.push(att);
  });
});

exports.seed = function (knex) {
  return knex("attaques")
    .del()
    .then(function () {
      return knex("pokemon")
        .del()
        .then(function () {
          return knex("pokemon").insert(pokemons);
        })
        .then(function () {
          return knex("attaques").insert(dataAttaques);
        });
    });
};
