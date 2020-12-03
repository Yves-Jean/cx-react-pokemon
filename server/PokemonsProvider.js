const knex = require("./knex/knex");

const PokemonsProvider = {
  getAllPokemons() {
    return knex.select().from("pokemon");
  },
  getAttaques(id) {
    return knex.select().from("attaques").where("pokemon_id", id);
  },
};

module.exports = PokemonsProvider;
