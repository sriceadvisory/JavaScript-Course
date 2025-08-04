`use strict';`
//Selecting different elements in the DOM
console.log(document.querySelector('.message').textContent); //Reading the message
document.querySelector('.message').textContent = 'correct number!'; //Changing the message
console.log(document.querySelector('.message').textContent); //Reading the new message

document.querySelector('.number').textContent = 13; //Changing the number
document.querySelector('.score').textContent = 20; //Changing the score
document.querySelector('.guess').value = 23; //Changing the guess input value
console.log(document.querySelector('.guess').value); //Reading the guess input value


//Common Dom manipulations
document.querySelector('.number').textContent = '?'; //Display the ? in the UI
document.querySelector('.guess').value = ''; //Reset the guess input value

//Dom manipulation functions
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message; //Function to display the message
};

//Dom event button listeners
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); //Reading the guess input value on button click
});