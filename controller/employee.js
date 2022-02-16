const express = require("express");
var router = express.Router();
const con = require("../database");
const flash = require("express-flash");

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

exports.loginemployee = async (req, res) => {
  return res.render("./employee/login");
};

exports.loginpostemployee = async (req, res) => {
  const email1 = req.body.email;
  const password = req.body.password;

  var sql = "SELECT * FROM employww_info WHERE email =? AND password =?";
  con.query(sql, [email1, password], function (err, data, fields) {
    if (err) throw err;
    if (data.length > 0) {
      req.session.loggedinUser = true;
      req.session.emailAddress = email1;
      return res.render("/employee/list", {
        title: "employee-data",
        empdata2: email1,
      });
      res.redirect("/employee/list");
    } else {
      res.render("./login", {
        alertMsg: "Your Email Address or password is wrong",
      });
    }
  });
};
