'use strict';

const numberLimit = 20;
const tryLimit = 10;

let secretNumber = Math.trunc(Math.random() * numberLimit) + 1;
let userScore = tryLimit;
let highScore = 0;

document.querySelector('.score').textContent = tryLimit;
document.querySelector(
  '.between'
).textContent = `(Between 1 and ${numberLimit})`;
document.querySelector('.guess').focus();

// function helpers
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

// Click check
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').focus();

  // No input
  if (!userGuess) {
    displayMessage('⛔ No number entered');

    // Invalid input
  } else if (userGuess < 1 || userGuess > numberLimit) {
    displayMessage(`⛔ Enter a number between 1 and ${numberLimit}`);

    // Player wins
  } else if (userGuess === secretNumber) {
    displayMessage('🎉 You found the secret number!');
    document.querySelector('.number').textContent = secretNumber;
    if (userScore > highScore) highScore = userScore;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Guess is wrong
  } else if (userGuess !== secretNumber) {
    displayMessage(
      `${document.querySelector('.guess').value} is too ${
        userGuess > secretNumber ? 'high' : 'low'
      }`
    );
    if (userScore < 1) {
      displayMessage('😭 You lost the game');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#b34747';
    } else {
      userScore--;
      document.querySelector('.score').textContent = userScore;
    }
  }
});

// Click again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * numberLimit) + 1;
  userScore = tryLimit;

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = userScore;
});
