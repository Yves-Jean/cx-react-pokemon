const express = require("express");
const PORT = process.argv[2] || 3001;
const knex = require("./knex/knex");
const bodyParser = require("body-parser");
let cors = require("cors");
const app = express();
let jsonParser = bodyParser.json();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome on the pokedex API!");
});

app.get("/pokemons", (req, res) => {
  knex
    .select()
    .table("pokemon")
    .then(function (collection) {
      res.json(collection);
    })
    .catch(function (err) {
      res.status(500).json({
        error: true,
        data: {
          message: err.message,
        },
      });
    });
});

app.get("/pokemons/:id", (req, res) => {
  knex
    .select()
    .table("pokemon")
    .where({ numéro: req.params.id })
    .then(function (collection) {
      res.json(collection);
    })
    .catch(function (err) {
      res.status(500).json({
        error: true,
        data: {
          message: err.message,
        },
      });
    });
});

app.post("/pokemons", jsonParser, (req, res) => {
  let pokemon = {};
  for (const key in req.body) {
    if (key !== "attaques") {
      pokemon[key] = req.body[key];
    } else {
      pokemon[key] = JSON.stringify(req.body[key]);
    }
  }
  knex("pokemon")
    .insert(pokemon)
    .then(function (collection) {
      res.status(200).json({
        message: `Pokemon ${req.body.nom} created successfully!`,
        pokemon,
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: true,
        data: {
          message: err.message,
        },
      });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
