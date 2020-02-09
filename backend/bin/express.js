const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:abc1234@cluster0-hdgyo.mongodb.net/test?retryWrites=true&w=majority",
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = app;
