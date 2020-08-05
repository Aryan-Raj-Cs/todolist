const app = require("express")();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
//const app=require('./connection/connection');
const authRoutes = require("./routes/auth");



const { NODE_PORT, NODE_ENV, DATABASE_URL } = process.env;
const PORT = NODE_PORT || 8000;

const isDevelopment = NODE_ENV === "development";

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/api", authRoutes);




mongoose
  .connect("mongodb://127.0.0.1:27017/todolist", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `DB connected and the server is runnning at ${PORT}-${NODE_ENV}`
      );
    });
  })
  .catch((err) => {
    console.error("Db connection failed", err);
  });