const db = require('./services/db');
const express = require('express');
var app = express();
app.use(express.json());

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Express server is running at port no: ${PORT}`));

app.get('/scores', (req, res) => {
    let diff = req.query.difficulty;
    var results = db.GETquery('SELECT * FROM Scoreboard WHERE difficulty = ? ORDER BY points DESC', diff, (getRows) => {
        //console.log(getRows);
        res.json(getRows);
    });
})

app.post('/postToScoreboard', (req, res) => {
    const postData = req.body;
    console.log(postData)
    db.POSTquery('INSERT INTO Scoreboard SET?', postData, (results) => {
        //console.log(results);
        res.send(results);
    })
})