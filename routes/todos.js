var express = require('express')
var EventStore = require('../lib/event_store');
var UUIDv1 = require('uuid/v1');

var router = express.Router();


router.post('/todos', function(req, res, next) {
  var id = UUIDv1();
  var text = req.body.text;


  var payload = JSON.stringify({
    id: id,
    type: 'ITEM.ADDED',
    text: text,
  });

  new EventStore().createEvent(payload).then(function() {
    res.redirect('/');
  }).catch(function(error) {
    console.log(error);
    res.redirect('/');
  });
});

module.exports = router;
