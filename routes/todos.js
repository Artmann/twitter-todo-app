var express = require('express')
var Twitter = require('twitter');
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

  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  client.post('statuses/update', {status: payload}).then(function() {
    res.redirect('/');
  }).catch(function(error) {
    console.log(error);
    res.redirect('/');
  });
});

module.exports = router;
