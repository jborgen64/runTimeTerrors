// Requiring our models and passport as we've configured it
var db = require("../../models");

module.exports = function(app) {
  
  // route for saving comic to database for later usage

  app.put("/api/save/:id", function(req, res) {
    db.User.update(
        {saved: JSON.stringify(req.body)},
        {where: {id: req.params.id} }
      )
      .then(function() {
        res.send("I'm Sent");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // route for getting saved comics out of database for front end use

  app.get("/api/save/:id", function(req, res) {
    db.User.findAll(
        {where: {id: req.params.id} }
      )
      .then(function(data) {
        let parsedData = JSON.parse(data[0].saved);
        res.json(parsedData);
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

};