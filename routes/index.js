const express = require("express");
const bodyParser = require("body-parser");
const user = require("./user");
const InitiateMongoServer = require("../config/db");
// Initiate Mongo Server
InitiateMongoServer();
const app = express();
// PORT
const PORT = process.env.PORT || 4000;
// Middleware
app.use(bodyParser.json());
// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});
app.get("/", (req, res) => {
  res.json({message: "API Working!"});
  // res.sendFile(path.join(__dirname, 'client/src/index.js'));
});
/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

module.exports = app;