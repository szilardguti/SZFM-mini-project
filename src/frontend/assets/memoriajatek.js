let startButton = document.getElementsByClassName("startButton")
let diffLevels = document.forms["chooseDiff"].elements["difficulty"]
let startMenu = document.getElementsById("difficulty")
var clock = document.getElementById("clock")
var score = document.getElementById("score")

const emojis = ("🍇", "🍉", "🍌", "🍎", "🍑", "🍆", "🍒", "🥝", "🍄", "🥒", "🥕", "🥭", "🥑", "🥔", "🍍", "🐻", "🦄", "🦠")

function start(){
    let size
    let difficulty = diffLevels.value

    if (difficulty == "easy")
        size = 4
    else if (difficulty == "medium")
        size = 5
    else if (difficulty == "hard")
        size = 6
    else
        alert("Válassz nehézségi fokozatot!")

    if (size != undefined){
        if (size == 4)
            fieldInit(size)
        else if (size == 5)
            fieldInit(size)
        else 
            fieldInit(size)
        console.log(document)
    }
}

function fieldInit(x){
    let board = document.getElementById("card-container")
    let numberOfColumns = ""
    let width = x * 100 + x * 20
    
    for (let i = 0; i < x; i++){
        numberOfColumns += "auto "
    }
    board.style.gridTemplateColumns = numberOfColumns
    board.style.width = width + "px"

    for (let i = 0; i < Math.pow(x, 2); i++){
        div = document.createElement("div")
        cardFront = document.createElement("div")
        cardBack = document.createElement("div")
        cardCont = document.createElement("div")
        cardFront.className = "card-front"
        cardBack.className = "card-back"
        document.getElementsByClassName("card-back").innerHTML = "padlizsán emoji"
        cardCont.className = "card-cont"
        cardCont.appendChild(cardFront)
        cardCont.appendChild(cardBack)
        div.appendChild(cardCont)
        board.appendChild(div)
    }

    document.getElementById("clock").innerHTML = "Idő: 0:00"
    document.getElementById("score").innerHTML = "Pontszám: 0"
    cards = document.getElementsByClassName("card")
    console.log(cards)
    document.getElementById("difficulty").remove()
}

