const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

 let cardChosen = []
 let cardChosenIds = []
 let cardWon = []
 let grid = document.querySelector("#grid")
 let resultDisplay = document.getElementById('result')
  
function createBoard() {
    for(let i = 0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }    
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    console.log(cards)
    let cardChosenIdOne = cardChosenIds[0];
    let cardChosenIdTwo = cardChosenIds[1];
  
    if(cardChosenIdOne === cardChosenIdTwo ) {
     cards[cardChosenIdOne].setAttribute('src', 'images/blank.png')
     cards[cardChosenIdTwo].setAttribute('src', 'images/blank.png')
      alert("You Have clicked same image")
     }

    else if(cardChosen[0] === cardChosen[1]) {
      alert("You have matched")
      cards[cardChosenIdOne].setAttribute('src', 'images/white.png');
      cards[cardChosenIdTwo].setAttribute('src', 'images/white.png');
      cards[cardChosenIdOne].removeEventListener('click', flipCard);
      cards[cardChosenIdTwo].removeEventListener('click', flipCard);
      cardWon.push(cardChosen)
      resultDisplay.innerHTML = `You Have Won ${cardWon.length}`
    }else{
        cards[cardChosenIdOne].setAttribute('src', 'images/blank.png')
        cards[cardChosenIdTwo].setAttribute('src', 'images/blank.png')
        alert('sorry try again')
    }
    cardChosen = []
    cardChosenIds = []

    if(cardWon.length === 6) {
        resultDisplay.textContent = "you won all"
    }

}

function flipCard() {
  let cartId = this.getAttribute('data-id')
  cardChosen.push(cardArray[cartId].name)
  cardChosenIds.push(cartId)
  this.setAttribute('src', cardArray[cartId].img)
  if(cardChosen.length == 2 ) {
      setTimeout(checkForMatch, 500)
   }
}

createBoard()
