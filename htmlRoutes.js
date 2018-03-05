var path = require("path");

// Routing
module.exports = function(app) {

    // HTML GET Requests Home and Survey Page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Routed to Home
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
