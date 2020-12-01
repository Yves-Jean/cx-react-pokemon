let pokedex = require("../../data/pokedex.json");

const keys = [];
pokedex.forEach((element) => {
  for (const key in element) {
    if (!keys.includes(key)) {
      keys.push(key);
    }
  }
});

exports.up = function (knex) {
  return knex.schema.dropTableIfExists("pokemon").then(function () {
    return knex.schema.createTable("pokemon", function (table) {
      keys.forEach((key) => {
        if (key !== "attaques") {
          if (key === "numéro") {
            return table.string(key).notNullable().primary();
          }
          table.string(key, 700);
        } else {
          table.string(key, 2000);
        }
      });
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pokemon");
};
