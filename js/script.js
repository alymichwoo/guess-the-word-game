//GLOBAL VARIABLES

//Unordered list where player's guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
//Letters player has guessed
const guessedLetters = [];


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
guessBtn.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const playerGuess = letter.value;
    const correctGuess = validateGuess(playerGuess);
    if (correctGuess) {
        makeGuess(guess);
    }
    letter.value = "";
});


//Check if player has submitted a valid guess
const validateGuess = function (playerGuess) {
    const acceptedLetter = /[a-zA-Z]/;
    if (playerGuess.lenght === 0) {
        //Is the input empty?
        message.innerText = "Oops! You forgot to guess a letter. Try again!";
    } else if (playerGuess.length > 1) {
        //Did you enter more than one letter?
        message.innerText = "You can only guess one letter at a time. Guess again!";
    } else if (!playerGuess.match(acceptedLetter)) {
        //Did you enter a number, special character or some other non letter?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        //Single letter was input
        return playerGuess;
    }
};

//Capture input
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter, silly! Guess a different letter.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};