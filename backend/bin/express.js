const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  process.env.MONGO_URL || "mongodb://localhost:27017/test",
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = app;
