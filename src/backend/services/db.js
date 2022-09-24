const mysql = require('mysql');
const config = require('../config');

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(config.db);
  console.log("New connection to database server!")

  connection.connect(function(err) {              
    if(err) {                                     
      console.log('Error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }                                     
  });                                     

  connection.on('error', function(err) {
    console.log('db error', err);
      handleDisconnect();                         
  });
}

handleDisconnect();


function GETquery(sql, param, callback) {
    connection.query(sql, param, (err, rows) => 
    {
        if (err)
        {
            console.log(err);
            return;
        }

        console.log('Data received from Db!');
        return callback(rows); 
    })
}

function POSTquery(sql, params, callback) {
    connection.query(sql, params, (err, results) => 
    {
        if (err)
        {
            console.log(err);
            return;
        }
        console.log('Data post to db!');
        return callback(results);
    })
}

module.exports = {
    GETquery,
    POSTquery
}