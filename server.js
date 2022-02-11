const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

const user = [];

app.use("/public", express.static(__dirname + "/public"));

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "manu" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  try {
    const haspasword = await bcrypt.hash(req.body.password, 10);
    user.push({
      id: Date.now().toString(),
      name: req.body.username,
      email: req.body.email,
      password: haspasword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(user);
});

app.listen(3000);
