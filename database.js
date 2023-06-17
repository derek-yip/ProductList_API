var mysql = require('mysql2');
require('dotenv').config()

var pool = mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
});

pool.connect(function(err) {
  if (err) throw err;
    console.log("Connect to Mysql successfully!!");
});

module.exports = pool