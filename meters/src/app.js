const express = require("express");
const Meter = require("./models/meters_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "meters" });
});

app.get("/api/v1/meters", async (req, res) => {
  const meters = await Meter.find({});
  res.json(meters);
});

app.post("/api/v1/meters", async (req, res) => {
  const meter = new Meter({ name: req.body.name });
  const savedMeter = await meter.save();
  res.json(savedMeter);
});

module.exports = app;
