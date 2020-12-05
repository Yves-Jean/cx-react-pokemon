const knex = require("./knex/knex");

const PokemonsProvider = {
  getAllPokemonsAndAttaques() {
    return knex("pokemon")
      .innerJoin("attaques", "pokemon.numéro", "attaques.pokemon_id")
      .select(["pokemon.*", knex.raw("json_agg(attaques) as attaques")])
      .groupBy("pokemon.numéro", "pokemon.nom")
      .orderBy("pokemon.numéro", "asc");
  },

  getAllPokemons() {
    return knex("pokemon")
      .select(["numéro", "nom", "numero"])
      .orderBy("pokemon.numéro", "asc");
  },

  getPokemon(id) {
    return knex("pokemon")
      .innerJoin("attaques", "pokemon.numéro", "attaques.pokemon_id")
      .select(["pokemon.*", knex.raw("json_agg(attaques) as attaques")])
      .where("numéro", id)
      .orWhere("numero", id)
      .groupBy("pokemon.numéro", "pokemon.nom")
      .orderBy("pokemon.numéro", "asc");
  },
  getAttaques(id) {
    return knex.select().from("attaques").where("pokemon_id", id);
  },
};

module.exports = PokemonsProvider;
