// Dependency to get current path to file
var path = require("path");
 
// Make this available to server.js file
module.exports = function(app) { 
	// GET route to link survey.html
	app.get("/survey",function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
	// CSS routes
	app.get("/assets/:route", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/assets/" + req.params.route));
	});
	// Image routes
	app.get("/images/:image", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/images/" + req.params.image));
	});
	// USE to link home.html to / and use as default homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};