let startTime = Date.now()
var timer = setInterval(addSecond, 1000)

function addSecond(){

    let d = Date.now()
    let seconds = Math.floor((d - startTime) / 1000)
    let minutes = Math.floor(seconds / 60)
    
    if (seconds > 59){
        seconds -= minutes * 60
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }
    
    clock.innerHTML = "Idő: " + minutes + ":" + seconds
}
