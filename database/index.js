var mysql = require('mysql');  //driver-- that converts js to sql

//Verification.
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Modernboy87^',
  database: 'bathroomFinder'
});


//Connect to database.
connection.connect(err => {
  if (err) throw err
  console.log('You are now connected...')
})


module.exports = connection;   //export