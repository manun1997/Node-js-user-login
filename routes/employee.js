const express = require("express");
var app = express();
const bodyparser = require("body-parser");
require("../database");
const employee = require("../controller/employee");

app.get("/", employee.addemployee);

app.post("/addemployee", employee.saveemployee);

module.exports = app;

console.log("Employee-routes");
