var express = require("express");

var router = express.Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Create routes
router.get("/", function(req, res) {
    
    res.render("index");
  
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("login");
});

router.get("/members", isAuthenticated, function(req, res) {
  res.render("members",{
    style: "members.css"
  });
});


// Export routes for server.js to use.
module.exports = router;
