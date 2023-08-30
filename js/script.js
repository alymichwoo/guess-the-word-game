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


//Add placeholders for each letter in the word
const addPlaceholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

addPlaceholder(word);


//Capture value of letter guessed and clear input for next guess
guessBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const playerGuess = letter.value;
    console.log(playerGuess);
    letter.value = "";
});
