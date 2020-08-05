const mongoose = require("mongoose");
const app=require('express')();
require("dotenv").config();
const { NODE_PORT, NODE_ENV, DATABASE_URL } = process.env;

mongoose
  .connect(DATABASE_URL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(NODE_PORT, () => {
      console.log(
        `DB connected and the server is runnning at ${NODE_PORT}-${NODE_ENV}`
      );
    });
  })
  .catch((err) => {
    console.error("Db connection failed", err);
  });

  module.exports = app;
