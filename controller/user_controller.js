var express = require("express");

var router = express.Router();

// Create routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// Export routes for server.js to use.
module.exports = router;
