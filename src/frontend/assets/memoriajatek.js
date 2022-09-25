let startButton = document.getElementsByClassName("startButton")
let diffLevels = document.forms["chooseDiff"].elements["difficulty"]
let startMenu = document.getElementById("difficulty")
var clock = document.getElementById("clock")
var score = document.getElementById("score")
var inputField = document.getElementById("username")
var timer
var constDifficulty
//var username

const emojis = ["🍇", "🍉", "🍌", "🍎", "🍑", "🍆", "🍒", "🥝", "🍄", "🥒", "🥕", "🥭", "🥑", "🥔", "🍍", "🐻", "🦄", "🦠"]
var cardChosen = []
var pairs = {pairsfound:0,maxpairs:0}
var pointSystem = { userPoints : 0 , valueForScore : 0 }
var seconds = 0
var minutes = 0
var endTimes = {endMinutes : 0, endSeconds : 0}

function addSecond(startTime){

    let d = Date.now()
    seconds = Math.floor((d - startTime) / 1000)
    minutes = Math.floor(seconds / 60)
    
    if (seconds > 59){
        seconds -= minutes * 60
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }
    
    clock.innerHTML = "Idő: " + minutes + ":" + seconds
}

const shuffle = array => {
    const clonedArray = [...array]

    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[index]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const pickRandom = (array, items) => {
    const clonedArray = [...array]
    const randomPicks = []

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length)
        
        randomPicks.push(clonedArray[randomIndex])
        clonedArray.splice(randomIndex, 1)
    }

    return randomPicks
}

function start(){
    let size
    constDifficulty = diffLevels.value
    username = ""


    if (constDifficulty == "easy"){
        size = 16
        pointSystem.valueForScore = 400
    }
    else if (constDifficulty == "medium"){
        size = 24
        pointSystem.valueForScore = 500
    }
    else if (constDifficulty == "hard"){
        size = 36
        pointSystem.valueForScore = 600
    }
    else
        alert("Válassz nehézségi fokozatot!")

    if (inputField.value.replaceAll(" ", "") == ""){
        alert("Add meg a játékos neved!")
        inputField.value = ""
    }

    if (size != undefined && inputField.value.replaceAll(" ", "") != ""){
        fieldInit(Math.sqrt(size))
        username = inputField.value;
    }
}

function fieldInit(x){
    let board = document.getElementById("card-container")
    let numberOfColumns = ""
    let width = x * 100 + x * 20
    pairs.maxpairs = Math.ceil(Math.pow(x, 2) / 2)
    const picks = pickRandom(emojis, pairs.maxpairs) 
    const items = shuffle([...picks, ...picks])
    
    for (let i = 0; i < x; i++){
        numberOfColumns += "auto "
    }
    board.style.gridTemplateColumns = numberOfColumns
    board.style.width = width + "px"

    for (let i = 0; i < Math.pow(x, 2); i++){
        card = document.createElement("div")
        card.className = "card"
        card.innerHTML = items[i]
        board.appendChild(card)
    }

    clock.innerHTML = "Idő: 0:00"
    score.innerHTML = "Pontszám: 0"
    cards = document.getElementsByClassName("card")
    console.log(cards)
    startMenu.remove()
    let startTime = Date.now()
    timer = setInterval(addSecond, 1000, startTime)
}

document.addEventListener('click', function (event) {
            var eventTarget = event.target;
            if(eventTarget.className.includes("card")){
                flipCard(eventTarget)                
            }
});

function checkForMatch(){
    
    if(cardChosen[0].textContent == cardChosen[1].textContent)
        {          
            pairs.pairsfound++
            console.log(cardChosen[0].textContent,cardChosen[1].textContent)
            AddScore()
            
            let tcard = cardChosen.shift()
            tcard.style.backgroundColor="green"
            tcard = cardChosen.shift()
            tcard.style.backgroundColor="green"    
            
            if(pairs.pairsfound == pairs.maxpairs)
                {                   
                    clearInterval(timer)
                    endTimes.endMinutes = minutes
                    endTimes.endSeconds = seconds
                    submitScore()
                    setInterval(alert("yay you win you yay"), 1000)
                }
        }        
}

function flipCard(card){

    flipUp(card)
    cardChosen.push(card)
    if(cardChosen.length===2){
        checkForMatch()
        
    }else if(cardChosen.length>=3)
    {
       let tcard = cardChosen.shift()
       flipDown(tcard)
       tcard = cardChosen.shift()
       flipDown(tcard)
    }
}

function flipUp(card){
    card.style.fontSize = "50px"
    card.className = "flipped"
}

function flipDown(card){
    card.style.fontSize = "0px"
    card.className = "card"
}

var submitBtn = document.getElementById("gimbgomb")
var submitBtnOriValue = document.getElementById("gimbgomb").value;

submitBtn.onmouseover = function(){
    submitBtn.value = "Főoldal"
}

submitBtn.onmouseout = function(){
    submitBtn.value = submitBtnOriValue;
}

function showScoreBoard(difficulty){
    //var refreshButton = document.getElementById('refreshButton')
    var table = document.getElementById('scoreTable');
    table.style.display = 'flex'
    //refreshButton.style.display = 'block'
    let scorePosition = 1

    fetch(`https://memoria.onrender.com/scores?difficulty=${difficulty}`)
    .then(response => response.json())
    .then(data => 
        {data.forEach(score => {
            var row = table.tBodies[0].insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = `<td>` + scorePosition + `</td>`
            cell2.innerHTML = `<td>` + score.scoreUserName + `</td>`
            cell3.innerHTML = `<td>` + score.points + `</td>`
            cell4.innerHTML = `<td>` + score.completionTime + `</td>`

            scorePosition++
        })})
}

function refreshScoreboard(){
    document.getElementById('scoreTable').tBodies[0].innerHTML = '';
    showScoreBoard(constDifficulty)
}

function submitScore() {
    fetch('https://memoria.onrender.com/postToScoreboard', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 3,
            scoreUserName: username, 
            points: pointSystem.userPoints,
            completionTime: `000:${endTimes.endMinutes}:${endTimes.endSeconds}`,
            difficulty : constDifficulty
        })
        }).then(res => res.json())
        .then(jsonRes => showScoreBoard(constDifficulty));
}

function AddScore() {
    let addScore = (pointSystem.valueForScore - (minutes * 60 + seconds))
    if( addScore <= 0 )
        addScore = 1
    pointSystem.userPoints += addScore
    score.innerHTML = pointSystem.userPoints;
}
