const mysql = require('mysql');
const config = require('../config');

function connect() {
    const connection = mysql.createConnection(config.db);
    connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!')});
}

function GETquery(sql) {
    connection.query(sql, (err, rows) => 
    {if (err) throw err;

    console.log('Data received from Db:');
    return rows;
    })
}

function POSTquery(sql, params) {
    connection.query(sql, (err, rows) => 
    {if (err) throw err;

    console.log('Data received from Db:');
    return rows;
    })
}

module.exports = {
    connect,
    GETquery,
    POSTquery
}