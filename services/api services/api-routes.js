var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {

app.get("/api/posts/", function (req, res){
    db.Post.findAll({})
    .then(function(myhero_DB){
      res.json(myhero_DB);
    });

    app.get("/api/posts/category/:category", function(req, res) {
      db.Post.findAll({
        where: {
          category: req.params.category
        }
      })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });

    app.get("/api/posts/:id", function(req, res) {
      db.Post.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });

    app.get("/api/posts/author/:author", function(req, res) {
      db.Post.findAll({
        where: {
          author: req.params.author
        }
      })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });

    app.get("/api/posts/title/:title", function(req, res) {
      db.Post.findAll({
        where: {
          title: req.params.title
        }
      })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });

    app.post("/api/posts", function(req, res) {
      console.log(req.body);
      db.Post.create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
      })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });

    app.delete("/api/posts/:id", function(req, res) {
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });

    app.put("/api/posts", function(req, res) {
      db.Post.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(myhero_DB) {
          res.json(myhero_DB);
        });
    });
  });
}