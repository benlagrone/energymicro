const express = require("express");
const Nest = require("./models/nests_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "nests" });
});

app.get("/api/v1/nests", async (req, res) => {
  const nests = await Nest.find({});
  res.json(nests);
});

app.post("/api/v1/nests", async (req, res) => {
  const nest = new Nest({ name: req.body.name });
  const savedNest = await nest.save();
  res.json(savedNest);
});

module.exports = app;
