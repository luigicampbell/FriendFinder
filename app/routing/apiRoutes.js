var friends = require("../data/friends");
var path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        // Initialize to hold comparison results
        var low = 10000000;
        var bestMatch;

        //For loop through each friend in friends
        for (var i = 0; i < friends.length; i++) {
            // Array to total the differences in scores for potential matches
            var compArray = [];

            for (var j = 0; j < friends[i].scores.length; j++) {

              // Abs value to get rid of negative values
                compArray.push(Math.abs(friends[i].scores[j] - req.body.scores[j]));

            }
            var matchScore = compArray.reduce((a, b) => a + b, 0);

            if (matchScore < low) {
                low = matchScore;
                bestMatch = friends[i];
            }
        }

        // Returns best match to client
        res.json(bestMatch);

        // Pushes user to friendsArray
        friends.push(req.body);
    });

}
