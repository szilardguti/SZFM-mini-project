const db = require('./services/db');
const express = require('express');
var app = express();

app.listen(3000, () => console.log('Express server  is running at port no: 3000'));

db.connect();

app.get('/scores', (req, res) => {
    db.GETquery('SELECT * FROM Scoreboard',(rows) => {
        console.log(rows);
        res.json(rows);
    })
})

app.post('/postToScoreboard', (req, res) => {
    db.POSTquery('SELECT * FROM Scoreboard',(rows) => {
        console.log(rows);
        res.json(rows);
    })
})