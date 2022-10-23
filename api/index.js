const express = require("express");
const morgan = require("morgan");
const { conn } = require("./db.js");

const server = express();
const port = 4000;

server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("Hello World!");
});

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
