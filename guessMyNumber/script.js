'use strict';
//selecting the elements
console.log(document.querySelector('.message').textContent);//reading the message
document.querySelector('.message').textContent = 'correct number!'; //change the message
console.log(document.querySelector('.message').textContent);//reading the new message

document.querySelector('.number').textContent = 13; //change the number
document.querySelector('.score').textContent = 20; //change the score
document.querySelector('.guess').value = 23; //change the guess input value
console.log(document.querySelector('.guess').value); //reading the guess input value

//setting the random number
const secretNumber = Math.trunc(Math.random() * 20) + 1; //generate a random number between 1 and 20
//setting the initial score
let score = 20;
//settingt the number as ?
document.querySelector('.number').textContent = '?'; //display the ? in the UI

//adding event listener to the button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); //reading the guess input value on button click

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!'; //change the message on button click

        //The player guesses the correct number
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!'; //change the message on button click
        document.querySelector('body').style.backgroundColor = '#60b347'; //change the background color of the body
        document.querySelector('.number').style.width = '30rem'; //change the width of the number element - has to be a a string with 'rem' unit
        document.querySelector('.number').textContent = secretNumber; //display the random number in the UI

        //The player guesses the wrong number
        //The player guesses a number that is higher than the secret number
    } else if (guess > secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = '📈 Too high!'; //change the message on button click
            score--; //decrease the score by 1
            document.querySelector('.score').textContent = score; //update the score in the UI
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0; //set score to 0 if the guess is wrong and score is less than 1
        }

        //The player guesses a number that is lower than the secret number
    } else if (guess < secretNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = '📉 Too low!'; //change the message on button click
            score--; //decrease the score by 1
            document.querySelector('.score').textContent = score; //update the score in the UI
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0; //set score to 0 if the guess is wrong and score is less than 1
        }
    }
});

//adding event listener to the again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20; //reset the score to 20
    document.querySelector('.score').textContent = score; //update the score in the UI
    document.querySelector('.message').textContent = 'Start guessing...'; //reset the message
    document.querySelector('body').style.backgroundColor = '#222'; //reset the background color of the body
    document.querySelector('.number').style.width = '15rem'; //reset the width of the number element
    document.querySelector('.number').textContent = '?'; //reset the number to ?
    document.querySelector('.guess').value = ''; //reset the guess input value
});

//adding highscore functionality
let highscore = 0; //initialize highscore variable
document.querySelector('.highscore').textContent = highscore; //display the highscore in the UI
document.querySelector('.check').addEventListener('click', function () {
    if (score > highscore) {
        highscore = score; //set the highscore to the current score if it is higher
        document.querySelector('.highscore').textContent = highscore; //update the highscore in the UI
    }
});