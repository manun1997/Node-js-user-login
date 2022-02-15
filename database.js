const mysqli = require("mysql");
const con = mysqli.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});
module.exports = con;
