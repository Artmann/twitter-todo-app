var express = require('express');
var EventStore = require('../lib/event_store');

var router = express.Router();

router.get('/', function(req, res, next) {

  new EventStore().getItems().then(function(items) {
    res.render('index', { items: items });
  }).catch(function(error) {
    console.log(error);
    res.render('index');
  });
});

module.exports = router;
