//==========================================================================================
//require dependencies
//==========================================================================================
var mysql = require("mysql");

//==========================================================================================
//create connection to mysql database
//==========================================================================================
// var connection;= mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Rememberme!1",
//   database: "burgers_db"
// });

if (process.env.JAWDB_URL){
  connection = sql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rememberme!1",
    database: "burgers_db"
  });
};

//==========================================================================================
//initiate connection to mysql
//==========================================================================================
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
connection.connect();

//==========================================================================================
//export connection for orm.js to use
//==========================================================================================
module.exports = connection;
