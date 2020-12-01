const contents = require("../../data/pokedex.json");
const keys = [];
const attaques = contents[0].attaques[0];
const columnsName = Object.keys(attaques);
columnsName.push("pokemon_id");
exports.up = function (knex) {
  return knex.schema
    .createTable("pokemon", function (table) {
      contents.forEach((element) => {
        Object.keys(element)
          .filter((x) => !keys.includes(x))
          .forEach((column) => {
            if (column != "attaques") {
              keys.push(column);
              if (column === "numéro") table.increments(column).primary();
              else if (
                ["rmq-insecte", "légende", "rmq-spectre"].includes(column) ||
                column.endsWith("desc")
              )
                table.text(column, "longtext");
              else table.string(column);
            }
          });
      });
    })
    .createTable("attaques", function (table) {
      table.increments("attaques_id").primary();
      columnsName.forEach((column) => {
        if (column === "pokemon_id") {
          table
            .integer(column, 11)
            .unsigned()
            .references("numéro")
            .inTable("pokemon");
        } else table.string(column);
      });
    });
};

exports.down = function (knex) {
<<<<<<< HEAD
  return knex.schema.dropTable("pokemon").dropTable("attaques");
=======
  return knex.schema.dropTable("attaques").dropTable("pokemon");
>>>>>>> origin
};
