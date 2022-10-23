const express = require("express");
const morgan = require("morgan");
const { conn } = require("./db.js");
const bodyParser = require('body-parser');
const loadDb = require("./src/controllers/loadDb.js")
const { User } = require("./db.js")

const server = express();
const port = 4000;

server.use(morgan("dev"));

server.get("/users", async (req, res) => {
  let users = await User.findAll()
  res.send(users)
});

conn.sync({ force: true }).then(() => {
    loadDb();
  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
