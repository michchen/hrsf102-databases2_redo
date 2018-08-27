var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var con = mysql.createConnection({
  database: 'chat',
  user: 'student',
  password: 'student'
})

con.connect(function(err, success){
  if (err) {
    // console.log('db: error');
    return;
  }
  // console.log('db: success');

});

module.exports = con;
