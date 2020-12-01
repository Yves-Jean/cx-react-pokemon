const express = require("express");
const PORT = process.env.PORT || 3001;
const knex = require("./knex/knex");
const app = express();

app.get("/tasks", (req, res) => {
  // use the knex variable above to crseate dynamic queries
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
