var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controllers > messages > get');
      models.messages.get(function(err,success){
        console.log('controllers > messages > get > callback');
        res.json();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controllers > messages > post');
      models.messages.post(req.body, function(err, success){
        console.log('controllers > messages > post > callback');
        if (err) { console.log('ERROR in controllers > messages > post > callback'); return; }
        res.status(201).end();
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('controllers > users > get');
      models.users.get(function(err, success){
        res.json();
        console.log('controllers > users > get > callback');
      });
    },
    post: function (req, res) {
      console.log('controllers > users > post');
      models.users.post(req.body.username, function(err, success) {
        if (err) { console.log('ERROR in controllers > users > post'); return; }
        console.log('controllers > users > post > callback==============');
        // done();
        res.status(201).end();
      })
    }
  }
};
