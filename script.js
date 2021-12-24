'use strict';

const numberLimit = 50;
const tryLimit = 20;

let secretNumber = Math.trunc(Math.random() * numberLimit) + 1;
let userScore = tryLimit;
let highScore = 0;

document.querySelector('.score').textContent = tryLimit;
document.querySelector(
  '.between'
).textContent = `(Between 1 and ${numberLimit})`;

document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);

  // No input
  if (!userGuess) {
    document.querySelector('.message').textContent = '⛔ No number entered';

    // Invalid input
  } else if (userGuess < 1 || userGuess > numberLimit) {
    document.querySelector(
      '.message'
    ).textContent = `⛔ Enter a number between 1 and ${numberLimit}`;

    // Player wins
  } else if (userGuess === secretNumber) {
    document.querySelector('.message').textContent =
      '🎉 You found the secret number!';
    document.querySelector('.number').textContent = secretNumber;
    if (userScore > highScore) highScore = userScore;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Guess is too low
  } else if (userGuess < secretNumber) {
    document.querySelector('.message').textContent = 'Your number is too low';
    if (userScore < 1) {
      document.querySelector('.message').textContent = '😭 You lost the game';
    } else {
      userScore--;
      document.querySelector('.score').textContent = userScore;
    }

    // Guess is too high
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

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * numberLimit) + 1;
  userScore = tryLimit;

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = userScore;
});
