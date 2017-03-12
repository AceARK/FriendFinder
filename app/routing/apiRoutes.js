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

		var listItemToCompare = friendsData.filter(item => item.type === req.body.type);
		
		for(var i=0; i<listItemToCompare.length; i++) {
			// console.log("Character data: " + friendsData);
			
			console.log("Line 22 Current character: " + listItemToCompare[i].name);
			// Array containing differences between two arrays
			var differenceArray = [];
			// Sum of differences between two arrays
			var sumOfDifferences = 0;
			// console.log("Line 29 compatible spirit before compare: " + compatibleSpirit);
			// Store current object's stats 
			var currentFriendStats = listItemToCompare[i].stats;
			console.log("Line 29 current Friend stats: " + currentFriendStats);
			// Perform test
			calculateDifferences(currentFriendStats, userStats);

			if(i>0) {
				// If current 'person's' difference is smaller
				if(sumOfDifferences < smallestDeviation) {
					// Assign that to parent variable
					smallestDeviation = sumOfDifferences;
					console.log("Line 38 Current deviation: " + smallestDeviation);
					// Assign this person as compatible spirit
					compatibleSpirit = listItemToCompare[i];
					console.log("Line 41 Current compatible: " + compatibleSpirit);
				}
			}else {
				// Assign current sum to parent variable
				smallestDeviation = sumOfDifferences;
				console.log("Line 46 Current deviation: " + smallestDeviation);
				// Current friend data to compatible spirit
				compatibleSpirit = listItemToCompare[i];
				console.log("Line 49 Current compatible: " + compatibleSpirit);
			}

			// Calculate the difference array
			function calculateDifferences(arrayOne, arrayTwo) {
				// Get the difference array for current array and new array
				differenceArray = arrayOne.map(function(item, i) {
					return Math.abs(item - arrayTwo[i]);
				});
				console.log("Line 61 Calculated difference array: " + differenceArray);
				// Get sum of differences using the calculated array
				sumOfDifferences = getSumOfDifferences(differenceArray);
				console.log("Line 64 Sum of differences: " + sumOfDifferences);
			}

			// Get the sum of differences 
			function getSumOfDifferences(array) {
				return array.reduce((a,b) => a+b);
			}
		}
		// Send most compatible person after calculation
		console.log("Data to be sent: " + JSON.stringify(compatibleSpirit));
		res.json(compatibleSpirit);
		// Push the new user into friendsData
		friendsData.push(req.body);
	});
};