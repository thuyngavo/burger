//==========================================================================================
//require dependencies
//==========================================================================================
var mysql = require("mysql");

//==========================================================================================
//create connection to mysql database
//==========================================================================================
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Rememberme!1",
  database: "burgers_db"
});

//==========================================================================================
//initiate connection to mysql
//==========================================================================================
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//==========================================================================================
//export connection for orm.js to use
//==========================================================================================
module.exports = connection;
