// Require existing user data from friends.js
var friendsData = require("../data/friends");
 
// Routing GET and POST requests
module.exports = function(app) {
	// Code to handle GET requests by the page i.e. when users visit the page /api/friends
	app.get("/api/friends", function(req, res) {
		// Display data from file
		res.json(friendsData);
	});

	// Code to handle POST requests i.e. when a new survey is submitted
	app.post("/api/friends", function(req, res) {
		// Compatibility logic
		var compatibleSpirit = {};
		var smallestDeviation = 0;
		var userStats = req.body.stats;
		// Get only the ones with type (theme) = type(theme) chosen by user
		var listItemToCompare = friendsData.filter(item => item.type === req.body.type);

		for(var i=0; i<listItemToCompare.length; i++) {
			// Array containing differences between two arrays
			var differenceArray = [];
			// Sum of differences between two arrays
			var sumOfDifferences = 0;
			// Store current object's stats 
			var currentFriendStats = listItemToCompare[i].stats;
			// Initiate calculation
			calculateDifferences(currentFriendStats, userStats);
			// Perform test
			if(i>0) {
				// If current 'person's' difference is smaller
				if(sumOfDifferences < smallestDeviation) {
					// Assign that to parent variable
					smallestDeviation = sumOfDifferences;
					// Assign this person as compatible spirit
					compatibleSpirit = listItemToCompare[i];
				}
			}else {
				// Assign current sum to parent variable
				smallestDeviation = sumOfDifferences;
				// Current friend data to compatible spirit
				compatibleSpirit = listItemToCompare[i];
			}

			// Calculate the difference array
			function calculateDifferences(arrayOne, arrayTwo) {
				// Get the difference array for current array and new array
				differenceArray = arrayOne.map(function(item, i) {
					return Math.abs(item - arrayTwo[i]);
				});
				// Get sum of differences using the calculated array
				sumOfDifferences = getSumOfDifferences(differenceArray);
			}

			// Get the sum of differences 
			function getSumOfDifferences(array) {
				return array.reduce((a,b) => a+b);
			}
		}
		// Send most compatible person after calculation
		res.json(compatibleSpirit);
		// Push the new user into friendsData
		friendsData.push(req.body);
	});
};