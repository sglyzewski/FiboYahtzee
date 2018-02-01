//
"use strict";

let totalPlayerScore = {};

totalPlayerScore = {
    aces: 0,
    twos: 0,
    threes: 0,
    fours: 0,
    fives: 0,
    sixes: 0,
    totalUpperSectionScore: 0,
    bonus: 0,
    fiboYahtzee: 0,
    fiboYahtzeeMore: 0,
    grandTotalScore: 0
};


//obj["key3"] = "value3";

//Task: Create your own dice game that utilizes 6 different dice (4-sided, 6, 8, 10, 12, and 20).
//The rules are up to you, your game must simply be more complicated than war.



//create function for each dice ***
//FiboYahTzee
//create function that rolls all the dice at once ***
//create function that stores all the values in an array and sorts them **
//check for fibbonacci sequences
//creat function that scores accordingly
//create function that creates an object to store values for each game
//create function that house the entire game


//function to generate a randomwholenumber between 1 & max
function generateRandomWholeNumber(max) {
  return Math.floor(Math.random() * (max) + 1);
}




//function ro run any dice given the amount of sides
function rollDice(sides) {
  let diceRoll;
  diceRoll = generateRandomWholeNumber(sides);
  return diceRoll;
}


//functions for specific dice
//8 different dice
//3 4 sided dice
function roll4Sided() {
  return rollDice(4);
}

function roll6Sided() {
  return rollDice(6);
}

function roll8Sided() {
  return rollDice(8);
}

function roll10Sided() {
  return rollDice(10);
}

function roll12Sided() {
  return rollDice(12);
}

function roll20Sided() {
  return rollDice(20);
}

function roll30Sided() {
  return rollDice(30);
}


function roll40Sided() {
  return rollDice(40);
}


//function from problem solving solutions to show a fibonacci sequence
function displayFibonacci(upperBound) {
  let firstNumber = 1;
  let secondNumber = 1;
  console.log(firstNumber);
  console.log(secondNumber);
  for(let i = 1; i <= upperBound; i++){
    let thirdNumber = secondNumber + firstNumber;
    console.log(thirdNumber);
    firstNumber = secondNumber;
    secondNumber = thirdNumber;

}

}




function countInArray(array, number) {
    let count = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    return count;
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




function remove(array, element, count) {
    let index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, count - 1);
    }
    return array;
}


//console.log(remove(array, 5, (countInArray(array, 5))));


function removeRepeatArrays(array) {
  let count;
  let minimizedArray;
  array = convertArraysInArrayToString(array);
  for(let i = 0; i <= array.length; i++) {
    count = countInArray(array, array[i]);
    if (countInArray(array, array[i]) > 1) {
      array = remove(array, array[i], count)
    }
  }
  minimizedArray = convertArrayOfStringsIntoArrays(array);
  return convertArrayOfStringsIntoNumbers(minimizedArray);
}



function convertArraysInArrayToString(array) {
  for (let i = 0; i < array.length; i++ ) {
    array[i] = array[i].join(" ");
  }
  return array;
}



function convertArrayOfStringsIntoNumbers(array) {
  let finalArray = [];
    let newArray = [];
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i].map(Number).filter(Boolean);
    finalArray.push(array[i]);
  }

  return finalArray;
}


function convertArrayOfStringsIntoArrays(array) {
  for (let i = 0; i < array.length; i++ ) {
    array[i] = array[i].split(" ");
  }
  return array;
}




function checkFibonacci(array){
  let newFib = [];
  console.log(array);
  for( let i = 0; i <= array.length; i++) {
    if (countInArray(array, array[i]) > 1) {
      newFib.push(createFibonacci(array[i])); // creates array of arrays! including all the possible fibonacci sequences
      }
    }
  return removeRepeatArrays(newFib);
}



// console.log(remove(array, 2, countInArray(array, 2)));


//need to first find if two of the same number occur
//if so check for fibonacci until you're through the loop
//there can be more than one fibonacci in an array
//store each fibonacci in a new array
//get the length of each array and the amount of arrays

//function to make sure numbers are sorted numerically instead of 100, 20, 30 which is what .sort method will do
function sortNumber(a,b) {
    return a - b;
}

function rollAllDice() {
  let diceArray = [];
  diceArray.push(roll4Sided());
  diceArray.push(roll4Sided());
  diceArray.push(roll4Sided());
  diceArray.push(roll6Sided());
  diceArray.push(roll8Sided());
  diceArray.push(roll10Sided());
  diceArray.push(roll12Sided());
  diceArray.push(roll20Sided());
  diceArray.push(roll30Sided());
  diceArray.push(roll40Sided());
  return diceArray.sort(sortNumber);
}


function score(array) {
  //calculate custom score based on
}

//deletes repeats in an array
function deleteRepeats(array) {
  return array.filter(function(e,i,c) {
    return c.indexOf(e) === i;
  }
);
}


function checkSingleFibonacci(array) {
  for (let i = 2; i < array.length; i++) {
    if (array[i] != array[i - 1] + array[i - 2]){
      array.splice(i, 1)};
  }
  return array;
}
//compare the rolldice array with a checkFibonacci array of
//arrays and create new score arrays
function createScoreFibonacci(array) {
  let possibleFibonaccis = checkFibonacci(array);
  console.log("This is the possibleFibonaccis");
  console.log(possibleFibonaccis);
  let scoreArray = [];
  for(let i = 0; i < possibleFibonaccis.length; i ++) {
    let intersection = intersectionOfArrays(array, possibleFibonaccis[i]);
    scoreArray.push(intersection);

    }

  console.log("This is the score: ");
  console.log(scoreArray);

  console.log("Now to edit the score: ")
  let finalScore = [];
  for (let i = 0; i < scoreArray.length; i ++) {
    let scoreArrayElement = scoreArray[i];
    let firstElement = scoreArrayElement.shift();
    finalScore.push(deleteRepeats(scoreArrayElement));
    finalScore[i].unshift(firstElement);
  }
  console.log(finalScore);

console.log("further filtering: ");
for (let i = 0; i < finalScore.length; i ++) {
  finalScore[i] = checkSingleFibonacci(finalScore[i]);
}

console.log(finalScore);

}


//let array = [["3", "3"], ["5", "5"], ["5", "5"], ["6", "7"]];
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10];
let array2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


//find intersection of arrays
function intersectionOfArrays(array1, array2) {
  let t;
    if (array2.length > array1.length) t = array2, array2 = array1, array1 = t; // indexOf to loop over shorter
    return array1.filter(function(e) {
        return array2.indexOf(e) > -1;
          }
        );
}

//console.log(convertArrayOfStringsIntoNumbers(array));

let array = rollAllDice();
console.log("The roll is " + array);
(createScoreFibonacci(array));
