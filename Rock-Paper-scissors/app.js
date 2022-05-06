const computerDisplay = document.getElementById('computer-id');
const userDisplay = document.getElementById('user-id');
const resultDisplay = document.getElementById('result-id');

const seletChoice = document.querySelectorAll('button');
let computerChoice;
let userChoice;
let result;

const AllFunction = () => {
    numberGenerate();
    getResult();
}

seletChoice.forEach(element => {
    element.addEventListener("click", (e)=>{
        userChoice = e.target.id;
        userDisplay.innerHTML = userChoice;
        AllFunction()
    });
});


const numberGenerate = () =>{
    let number = Math.floor(Math.random()*3)+1;

    if(number == 1) computerChoice = 'rock';  
    if(number == 2) computerChoice = 'paper';
    if(number == 3) computerChoice = 'scissors';
    
    computerDisplay.innerHTML = computerChoice;
}

const getResult = () => {
  if(userChoice == 'rock' && computerChoice == "scissors"){
    result = 'win';
  }
 else if(userChoice == 'rock' && computerChoice == "paper"){
    result = 'los';
  } 
  else if(userChoice == 'scissors' && computerChoice == "paper"){
    result = 'win';
  }
  else if(userChoice == 'scissors' && computerChoice == "rock"){
    result = 'lose';
  }
  else if(userChoice == 'paper' && computerChoice == "rock"){
    result = 'win';
  }
  else if(userChoice == 'paper' && computerChoice == "scissors"){
    result = 'lose';
  }
  else {
    result = 'draw';
  }
  resultDisplay.innerHTML = result;
}




