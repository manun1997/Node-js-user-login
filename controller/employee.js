const express = require("express");
var router = express.Router();
const con = require("../database");

exports.addemployee = async (req, res) => {
  return res.render("./employee/addemployee", { title: req.body.empname });
};

exports.saveemployee = async (req, res) => {
  const username = req.body.fname;
  const surname = req.body.lname;
  const email = req.body.email;
  const gender = req.body.gender;

  const query =
    'insert into employww_info(id,firstname,lastname,gender,email) values (" ","' +
    username +
    '","' +
    surname +
    '","' +
    email +
    '","' +
    gender +
    '")';
};
