const displayScore = document.querySelector('#score')
let timer = document.querySelector('#time')
const squares = document.querySelectorAll('.square')
let hitId;
let score = 0
let timerId, randomId;
let currentTime = 10

function moveImage() {
    squares.forEach((square) => {
        square.classList.remove('mole')
    })

    let rand = Math.floor(Math.random() * 9)
    squares[rand].classList.add("mole")  
    hitId = squares[rand].id
}

squares.forEach((square) => {
   square.addEventListener('mousedown', ()=>{
       if(square.id === hitId) {
        score++
        displayScore.textContent = score
       }
   }) 
})

function checkTimer () {
    currentTime--
    timer.textContent = currentTime
   if( currentTime == 0) {
       clearInterval(randomId)
       clearInterval(timerId)
       alert("Time is over")
   }
}

randomId = setInterval(moveImage, 1000)
timerId = setInterval(checkTimer,1000)
