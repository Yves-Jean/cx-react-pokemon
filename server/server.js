const express = require("express");
const PORT = process.argv[2] || 3001;
const knex = require("./knex/knex");
const bodyParser = require("body-parser");
const Provider = require("./PokemonsProvider");

let cors = require("cors");
const app = express();
let jsonParser = bodyParser.json();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome on the pokedex API!");
});

//? Yves
//* Get all pokemons
app.get("/pokemons", (req, res) => {
  Provider.getAllPokemons()
    .then((results) => {
      console.log(results);
      res.json(results);
    })
    .catch(function (err) {
      res.status(500).json({
        error: true,
        message: err.message,
      });
    });
});

//? Jean
//* Get pokemon match to id
app.get("/pokemons/:id", (req, res) => {
  //TODO: Update query request... || join
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

//?Jean
//* Insert all pokemons
app.post("/pokemons", jsonParser, (req, res) => {
  //TODO: post pokemon and post attaques
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

//?Jean
//TODO: request method PUT

//?Yves
//TODO: request method DELETE

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
