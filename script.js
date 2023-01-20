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

let guesses = 20;

// function declaration
const pickWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};

const setupAnswerArray = function (word) {
  const answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
};

const showPlayerProgress = function (answerArray) {
  return alert(answerArray.join(''));
};

const getGuess = function () {
  return prompt('Угадайте букву или нажмите Отмена для выхода из игры.');
};

const updateGameState = function (guess, word, answerArray) {
  let appearances = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }
  console.log(appearances);
  return appearances;
};

const showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert(`Отлично! Было загадано слово ${word}`);
};

// word: загагаданное число
let word = pickWord();
// answerArray: итоговый массив
let answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
let remainigLetters = word.length;

while (remainigLetters > 0) {
  showPlayerProgress(answerArray);
  //guess: ответ игрока
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Пожалуйста, введите одиночную букву.');
  } else {
    // correctGuesses: количество открытых букв
    let correctGuesses = updateGameState(guess, word, answerArray);
    remainigLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
// Show answer and congratulate

/*
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
*/
