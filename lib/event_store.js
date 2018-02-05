var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function EventStore() {}

EventStore.prototype.createEvent = function(payload) {
  return client.post('statuses/update', {status: payload});
};

EventStore.prototype.getItems = function() {
  return new Promise(function(resolve, reject) {
    return client.get('statuses/user_timeline', { screen_name: 'EventDrivenTodo' }).then(function(tweets) {
      var events = tweets.map(function(t) {
        return JSON.parse(t.text);
      });

      var items = events.filter(function(e) {
        return e.type === 'ITEM.ADDED';
      });

      resolve(items);
    }).catch(function (error) {
      reject(error);
    });
  });
}

module.exports = EventStore;