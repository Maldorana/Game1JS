'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let userScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);

  if (!userGuess) {
    document.querySelector('.message').textContent = '⛔ No number entered';
  } else if (userGuess < 1 || userGuess > 20) {
    document.querySelector('.message').textContent =
      '⛔ Enter a number between 1 and 20';
  } else if (userGuess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 You found the secret number!';
    if (userScore > highScore) highScore = userScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (userGuess < secretNumber) {
    document.querySelector('.message').textContent = 'Your number is too low';
    if (userScore < 1) {
      document.querySelector('.message').textContent = '😭 You lost the game';
    } else {
      userScore--;
      document.querySelector('.score').textContent = userScore;
    }
  } else if (userGuess > secretNumber) {
    document.querySelector('.message').textContent = 'Your number is too high';
    if (userScore < 1) {
      document.querySelector('.message').textContent = '😭 You lost the game';
    } else {
      userScore--;
      document.querySelector('.score').textContent = userScore;
    }
  }
});
