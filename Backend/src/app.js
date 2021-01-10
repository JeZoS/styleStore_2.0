const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRoutes = require("./routes/product");
const userRoutes = require("./routes/userRoutes");
const favRoutes = require("./routes/favRourtes");

app.use("/products", productRoutes);

app.use("/user", userRoutes);

app.use("/fav", favRoutes);

module.exports = app;
