// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Creating an express server
var app = express();

// Set a port
var PORT = process.env.PORT || 8080;

// Use BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Pointing server to route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Set server to listen for requests
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
