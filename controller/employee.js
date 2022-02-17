const express = require("express");
var router = express.Router();
const con = require("../database");
const flash = require("express-flash");
const session = require("express-session");

exports.addemployee = async (req, res) => {
  return res.render("./employee/addemployee", {
    message: req.flash("message"),
  });
};

exports.editemployee = async (req, res) => {
  let id = req.params.id;
  con.query("SELECT * FROM employww_info where  id=?", [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      req.flash("message", "Employee Details updated");

      res.render("./employee/editemployee", {
        title: "id",
        data: result[0],
      });
    }
  });
  // return res.render("./employee/editemployee");
};

exports.deleteemployee = async (req, res) => {
  let id = req.params.id;
  con.query(
    "UPDATE employww_info set status='inactive' where id=?",
    [id],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        res.redirect("/employee/list");
      }
    }
  );
};

exports.updateemployee = async (req, res) => {
  let id = req.params.id;

  const data = req.body;
  con.query(
    "UPDATE employww_info set? where id=?",
    [data, id],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        req.flash("message", "Employee Details Added");
        res.redirect("/employee/list");
      }
    }
  );

  console.log("UserId", id);
};

exports.saveemployee = async (req, res) => {
  const emp = req.body;
  con.query("INSERT INTO employww_info SET ?", [emp], (err, result) => {
    if (err) {
      throw err;
    } else {
      req.flash("message", "Employee Details Added");
      res.redirect("/employee");
    }
  });
};

exports.viewemployee = async (req, res) => {
  con.query(
    "SELECT * FROM employww_info where status='active'",
    (err, data, fields) => {
      if (err) {
        throw err;
      } else {
        console.log("Employee", data);
        return res.render("./employee/viewemployee", {
          title: "employee-data",
          empdata: data,
        });
      }
    }
  );
};

exports.logoutemployee = async (req, res) => {
  req.logOut();
  req.session.destroy();
  res.redirect("/login");
};

exports.loginemployee = async (req, res) => {
  return res.render("/login", {
    message: req.flash("message"),
  });
};

exports.loginpostemployee = async (req, res) => {
  const email1 = req.body.email;
  const password = req.body.password;

  const data = req.body;
  console.log(data);

  var sql = "SELECT * FROM employww_info WHERE email =? AND password =?";
  con.query(sql, [email1, password], function (err, data1) {
    if (err) throw err;
    if (data1.length > 0) {
      req.session.loggedinUser = true;
      req.session.emailAddress = email1;
      console.log(data1[0]);
      return res.render("./employee/loginemployee", {
        title: "employee-data",
        logindata: data1[0],
      });
    } else {
      req.flash("message", "Invalid username or Password is word");
      console.log("False");
      res.redirect("/login");
    }
  });
};
