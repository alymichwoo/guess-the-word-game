//GLOBAL VARIABLES

//Unordered list where player's guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");
//Guess button
const guessBtn = document.querySelector(".guess");
//Text input where player guesses a letter
const letter = document.querySelector(".letter");
//Word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//Remaining guesses left
const remainingGuesses = document.querySelector(".remaining");
//Remaining guesses span
const numGuessesSpan = document.querySelector("span");
//Message after guess
const message = document.querySelector(".message");
//Play again button *Hidden*
const playAgainBtn = document.querySelector(".play-again");
//Starting word
const word = "magnolia";
