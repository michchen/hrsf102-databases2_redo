var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', function(err, success){
        if (err) { console.log('ERROR in models > messages > get'); return; }
        console.log('models > messages > get > SUCCESS');
        console.log(success);
      })

    }, // a function which produces all the messages
    post: function (data, cb) {
      console.log(data)
      // console.log(data.message)
      var q = 'INSERT INTO messages (body, user, room) VALUES ("' + data.message + '", 1, 1);';
      // console.log(q);
      db.query(q, function(err, result){
        console.log(err)
        if (err) { console.log('ERROR in models > messages > post'); return; }
        console.log('models > messages > post > callback');
        cb();
        // console.log(result);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var q = 'SELECT * FROM users;'
      db.query(q, function(err, success){
        console.log('models > users > get > callback');
        // console.log(success);
      })
    },


    post: function (data, cb) {
      console.log('models > users > post-------------------');
      // console.log(cb);
      var q = 'INSERT INTO users (name) VALUES ("' + data + '")';
      db.query(q, function(err, success){
        if (err) {
          console.log('models > users > post > callback ERROR');
          return;
        }
        console.log('models > users > post > callback SUCCESS');
        // console.log(cb);
        cb();
      });
    }
  }
};
