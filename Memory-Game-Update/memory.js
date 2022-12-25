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

  cardArray.sort(()=> 0.5 - Math.random())
  const resultDisplay = document.getElementById("result")
  resultDisplay.textContent = 0
  
  const grid = document.querySelector(".inside")

  function imageRotate() {
      for(let i =0; i< cardArray.length; i++) {
          let card = document.createElement('img')
          card.setAttribute('src', 'images/blank.png')
          card.setAttribute('data-id', i)
          card.addEventListener('click', cardClick)
          grid.appendChild(card)

      }
  }

  let chosen = []
  let chosenId = []
  let matchWon = []
   
  function checkMatch() {
    let cards = document.querySelectorAll('img') 
    let chosenIdOne = chosenId[0]
     let chosenIdTwo = chosenId[1]
     
     if(chosenIdOne === chosenIdTwo) {
      alert("You have clicked same image")
      cards[chosenIdOne].setAttribute('src', 'images/blank.png')
      cards[chosenIdTwo].setAttribute('src', 'images/blank.png')
    }else if(chosen[0]=== chosen[1]) {
        cards[chosenIdOne].setAttribute('src', 'images/white.png')
        cards[chosenIdOne].removeEventListener('click', cardClick)
        cards[chosenIdTwo].setAttribute('src', 'images/white.png')
        cards[chosenIdTwo].removeEventListener('click', cardClick)
        alert("you have match")
        matchWon.push(chosen)
        resultDisplay.textContent = matchWon.length
    }else{
       cards[chosenIdOne].setAttribute('src', 'images/blank.png')
       cards[chosenIdTwo].setAttribute('src', 'images/blank.png')
       alert('try again')
    }
    chosen = []
    chosenId = []

    if(matchWon.length == 6) {
        alert("You have won all")
     }
   }

  function cardClick() {
      const id = this.getAttribute('data-id')
      chosenId.push(id)
      chosen.push(cardArray[id].name)
      this.setAttribute('src', cardArray[id].img)
      if(chosen.length === 2) {
          setTimeout(checkMatch,500)
      }
    }

  imageRotate()