"use strict";

function generateRandomWholeNumber(max) {
  return Math.floor(Math.random() * (max) + 1);
}



function getInput (message){
  let input = prompt(message);
  return input;
}


function rollDice(sides) {
  let diceRoll;
  diceRoll = generateRandomWholeNumber(sides);
  return diceRoll;
}


function sortNumber(a,b) {
    return a - b;
}


function rollAllDice() {
  let diceArray = [];
  diceArray.push(rollDice(4));
  diceArray.push(rollDice(4));
  diceArray.push(rollDice(4));
  diceArray.push(rollDice(6));
  diceArray.push(rollDice(8));
  diceArray.push(rollDice(10));
  diceArray.push(rollDice(12));
  diceArray.push(rollDice(20));
  diceArray.push(rollDice(30));
  diceArray.push(rollDice(40));
  return diceArray.sort(sortNumber);
}


function createFibonacci(number) {
  let fibonacciArray = [];
  let firstNumber = number;
  let secondNumber = number;
  fibonacciArray.push(firstNumber, secondNumber);
  for (let i = 3; i <= 10; i++) {
  let thirdNumber = secondNumber + firstNumber;
   fibonacciArray.push(thirdNumber);
   firstNumber = secondNumber;
   secondNumber = thirdNumber;
 }
 return fibonacciArray;
}


function scoreArray(array) {
  let fibonacciArray = [];
  for (let i = 0; i < array.length; i ++) {
    fibonacciArray.push(createFibonacci(array[i]));
  }
  return fibonacciArray;
}



function add(a, b) {
    return a + b;
}



function totalScoreWithinArrays(array) {
  let arrayOfScores = [];
  for (let i = 0; i < array.length; i ++) {
    arrayOfScores.push(array[i].reduce(add, 0));
  }
  return arrayOfScores;
}



function flattenArrays(array) {
  let merged = [].concat.apply([], array);
  return merged;
}

function oneRoll() {
  let roll = ((flattenArrays(totalScoreWithinArrays(scoreArray((rollAllDice()))))).reduce(add, 0));
  return roll;
}

function scoreLog(array, player) {
  console.log(player + "Score: ");
  for (let i = 0; i < array.length; i ++) {
    console.log(player + "round " + (i + 1) +  " score: " + array[i] )
  }
}


function runGame() {
  let userInput = getInput("Welcome to FiboYahtzee!!! First one to get to 100,000 points wins. Each die you roll of ten dice is the starting number in a fibonacci sequence. The sum of all 10 sequences is added up to equal your score for the round. Type 'yes' to start playing against the computer.");
  let playerScore = [];
  let computerScore = [];
  if (userInput === "yes" || userInput.toLowerCase === "yes") {
    while(((playerScore.reduce(add, 0)) < 100000) && ((computerScore.reduce(add, 0)) < 100000)) {
      let playerRoll = oneRoll();
      playerScore.push(playerRoll);
      alert("Your score for this round is: " + playerRoll);
      let computerRoll = oneRoll();
      computerScore.push(computerRoll);
      alert("The computer scored: " + computerRoll);
    }
  }
  scoreLog(playerScore, "Your ");
  scoreLog(computerScore, "Computer ");
  playerScore = playerScore.reduce(add, 0)
  computerScore = computerScore.reduce(add, 0)
  if (playerScore > computerScore) {
    alert("You win!");
    console.log("WINNER: You");
  }
  else {
    alert("Computer wins! ");
    console.log("WINNER: Computer");
  }
  console.log("Your ending score: " + playerScore);
  console.log("Computer ending score: " + computerScore);
}
