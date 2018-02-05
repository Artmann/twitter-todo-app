var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    items: [
      {
        id: 1,
        text: 'Improve AJAX content loading',
        completed: false,
      },
      {
        id: 2,
        text: 'Advertaisment integration',
        completed: true,
      },
      {
        id: 3,
        text: 'Protection against Ad-Block',
        completed: false,
      },
    ]
  });
});

module.exports = router;
