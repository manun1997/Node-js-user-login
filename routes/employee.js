const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const flash = require("express-flash");
require("../database");

app.use(flash());
const employee = require("../controller/employee");

app.get("/", employee.addemployee, (req, res) => {
  req.flash("message", "Success!!");
  res.send(req.flash("message"));
});

app.get("/list", employee.viewemployee, (req, res) => {});

app.get("/edit/:id", employee.editemployee);

app.get("/login", employee.loginemployee);

app.post("/login", employee.loginpostemployee);

app.post("/edit/:id", employee.updateemployee);
app.get("/delete/:id", employee.deleteemployee);
app.post("/addemployee", employee.saveemployee);

module.exports = app;

console.log("Employee-routes");
