var express = require("express");
var router = express.Router();


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

const data = {

}


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

router.get("/api/comicvine/:first", function (req, res) {
  var url = 'https://comicvine.gamespot.com/api/characters/?api_key=6d585bd220603de589bc80707c5dbd370ac7f030&format=json&sort=name:asc&filter=name' + req.params.first + '&limit=4'
  console.log("URL:", url)
  axios.get(url).then((response) => {
    console.log(response.data)
    res.json(response.data)
  })
  .catch(function(e) {
    console.error("PROXY ERROR:", e)
  })
  
})

// Export routes for server.js to use.
module.exports = router;
