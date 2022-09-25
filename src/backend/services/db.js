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

function simpleConnect(){
  console.log('simple connection to DB server!')
  connection = mysql.createConnection(config.db);
}

function simpleDisconnect(){
  console.log('disconnecting from DB server!')
  connection.end();
}

if(process.env.MODE_ENV != 'test'){
  handleDisconnect();
}
else
{
  simpleConnect()
}



function GETquery(sql, param, callback) {
    connection.query(sql, param, (err, rows) => 
    {
        if (err)
        {
            console.log(err);
            return;
        }

        if(process.env.MODE_ENV != 'test'){
          console.log('Data received from Db!');
        }

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
        if(process.env.MODE_ENV != 'test'){
          console.log('Data post to Db!');
        }
        return callback(results);
    })
}

module.exports = {
    simpleConnect,
    simpleDisconnect,
    GETquery,
    POSTquery
}