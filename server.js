if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const mysql = require("mysql");
const methodoverride = require("method-override");
const initializePassport = require("./passport-config");
const mysqli = require("mysql");
const con = require("./database");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];
app.use("/public", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodoverride("_method"));

app.get("/", checkAuthenticated, (req, res) => {
  req.session.username = req.user.name;
  console.log(req.session);
  res.render("index.ejs", { username: req.session.username });
});

app.get("/database", (req, res) => {});

app.get("/dashboard", checkAuthenticated, (req, res) => {
  console.log(req.session);
  res.render("dashboard.ejs", { username: req.session.username });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

app.delete("/logout", (req, res) => {
  req.logOut();
  req.session.destroy();
  res.redirect("/login");
});
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register.ejs");
});

app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

app.use("/employee", require("./routes/employee"));

app.listen(3000);
