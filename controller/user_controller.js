var express = require("express");
var router = express.Router();
var axios = require("axios");


// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Create routes
router.get("/", function(req, res) {
    
    res.render("index", {
      style: "signup.css"
    });
  
});

router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.render("login", {
    style: "login.css"
  });
});

router.get("/members", isAuthenticated, function(req, res) {
  res.render("members",{
    style: "members.css",
    userId: req.user.id
  });
});
// Jared made this so we know it works.
// router.get("/api/comicvine/:first/:second/:last", function (req, res) {
//   var url = 'https://comicvine.gamespot.com/api/' + req.params.first + '/' + req.params.second + '/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&' + req.params.last
//   console.log("URL:", url)
//   axios.get(url).then((response) => {
//     console.log(response.data)
//     res.json(response.data)
//   })
//   .catch(function(e) {
//     console.error("PROXY ERROR:", e)
//   })
  
// })

// Axios call for characters by searched name. Will return all characters with searched name

router.get("/api/comicvine/:first", function (req, res) {
  var url = 'https://comicvine.gamespot.com/api/characters/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:asc&filter=name' + req.params.first + '&limit=20'
  console.log("URL:", url)
  axios.get(url).then((response) => {
    console.log(response.data)
    res.json(response.data)
  })
  .catch(function(e) {
    console.error("PROXY ERROR:", e)
  })
  
});

// Axios call for issues by searching character ID
// will return all issues descending by cover date

router.get("/api/comicvine/issues/:id/", function (req, res) {
  var url = 'https://comicvine.gamespot.com/api/issues/4005-' + req.params.id + '/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=cover_date:desc'
  axios.get(url).then((response) => {
    console.log(response.data)
    res.json(response.data)
  })
  .catch(function(e) {
    console.error("PROXY ERROR:", e)
  })
  
});

// Sepcific character search by id
router.get("/api/comicvine/character/:id/", function (req, res) {
  var url = 'https://comicvine.gamespot.com/api/character/4005-' + req.params.id + '/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json'
  axios.get(url).then((response) => {
    console.log(response.data)
    res.json(response.data)
  })
  .catch(function(e) {
    console.error("PROXY ERROR:", e)
  })
  
});



// Export routes for server.js to use.
module.exports = router;
