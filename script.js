'use strict';

// Create arrays of words
const words = [
  'программа',
  'макака',
  'прекрасный',
  'оладушек',
  'фильм',
  'музыка',
];

// Choose a random word
let word = words[Math.floor(Math.random() * words.length)];

// Create array for answer
const answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainigLetters = word.length;
let guesses = 20;

// Game loop
while (remainigLetters > 0) {
  // Show game status
  alert(answerArray.join(' '));

  // Requiest for a letter
  let guess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');
  console.log(guess);
  if (guess === null) {
    // Abort the game loop
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    // Update game status
    guesses--;
    guess = guess.toLowerCase();
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === '_') {
        answerArray[j] = guess;
        remainigLetters--;
        console.log(remainigLetters);
      }
    }
  }
  // End of the game loop
}

// Show answer and congratulate

alert(answerArray.join(''));

if (guesses > 0) {
  alert(`Отлично! Было загадано слово ${word}`);
} else {
  alert(`Плохо! Было загадано слово ${word}`);
}
