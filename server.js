//==========================================================================================
//requiring dependencies
//==========================================================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

//==========================================================================================
//serve static content for the app from the "public" directory in the application directory.
//==========================================================================================
app.use(express.static("public"));

//==========================================================================================
//parse app body as json
//==========================================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//==========================================================================================
//setting handlebars.
//==========================================================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//==========================================================================================
//import routes and give the server access to them.
//==========================================================================================
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//==========================================================================================
//start server so it can begin listening to client requests
//==========================================================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});