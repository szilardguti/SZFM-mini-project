const db = require('./services/db');
const express = require('express');
var app = express();
app.use(express.json());

app.listen(3000, () => console.log('Express server  is running at port no: 3000'));

app.get('/scores', (req, res) => {
    var results = db.GETquery('SELECT * FROM Scoreboard ORDER BY points DESC', (getRows) => {
        console.log(getRows);
        res.json(getRows);
    });
})

app.post('/postToScoreboard', (req, res) => {
    const postData = req.body;
    console.log(postData)
    db.POSTquery('INSERT INTO Scoreboard SET?', postData, (results) => {
        console.log(results);
        res.send(results);
    })
})