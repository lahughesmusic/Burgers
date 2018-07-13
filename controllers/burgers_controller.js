var express = require('express');
var app = express();

var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });



router.post("/burgers/create", function(req, res) {
    
    burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/");
    });
  });

router.put('/burgers/update', function(req, res){
    burger.update(req.body.burger_id, function(result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        res.redirect("/");
      });
    });

module.exports = router;

