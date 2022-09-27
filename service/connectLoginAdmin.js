var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "souji_db"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM admin", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });