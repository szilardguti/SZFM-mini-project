const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection(config.db);
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!')
});


function GETquery(sql, callback) {
    connection.query(sql, (err, rows) => 
    {
        if (err)
        {
            console.log(err);
            return;
        }

        console.log('Data received from Db:');
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