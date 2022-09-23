let startButton = document.getElementsByClassName("startButton")
let diffLevels = document.forms["chooseDiff"].elements["difficulty"]
let startMenu = document.getElementById("difficulty")
var clock = document.getElementById("clock")
var score = document.getElementById("score")

const emojis = ["🍇", "🍉", "🍌", "🍎", "🍑", "🍆", "🍒", "🥝", "🍄", "🥒", "🥕", "🥭", "🥑", "🥔", "🍍", "🐻", "🦄", "🦠"]

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
    let difficulty = diffLevels.value

    if (difficulty == "easy")
        size = 16
    else if (difficulty == "medium")
        size = 25
    else if (difficulty == "hard")
        size = 36
    else
        alert("Válassz nehézségi fokozatot!")

    if (size != undefined){
        fieldInit(Math.sqrt(size))
    }
}

function fieldInit(x){
    let board = document.getElementById("card-container")
    let numberOfColumns = ""
    let width = x * 100 + x * 20
    const picks = pickRandom(emojis, Math.pow(x, 2) / 2) 
    const items = shuffle([...picks, ...picks])
    
    for (let i = 0; i < x; i++){
        numberOfColumns += "auto "
    }
    board.style.gridTemplateColumns = numberOfColumns
    board.style.width = width + "px"

    for (let i = 0; i < Math.pow(x, 2); i++){
        //div = document.createElement("div")
        card = document.createElement("div")
        card.className = "card"
        card.innerHTML = items[i]
        board.appendChild(card)
        //board.appendChild(div)
    }

    clock.innerHTML = "Idő: 0:00"
    score.innerHTML = "Pontszám: 0"
    cards = document.getElementsByClassName("card")
    console.log(cards)
    startMenu.remove()
}
const cardkatt = document.getElementsByClassName("card")
document.addEventListener('click', function (event) {
            var eventTarget = event.target;
            if(eventTarget.className.includes("card")){
                eventTarget.style.fontSize="50px"
                console.log(eventTarget)
            }
        });