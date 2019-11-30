// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

<<<<<<< HEAD
// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/newPet.html"));

    });
=======
<<<<<<< HEAD
module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });a
        });
    });
=======
// Dependencies
// =============================================================
var path = require("path");
>>>>>>> master


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/newPet.html"));
  });
>>>>>>> master
};
