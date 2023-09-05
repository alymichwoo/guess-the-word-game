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
const numGuessesLeft = document.querySelector(".remaining");
//Remaining guesses span
const numGuessesSpan = document.querySelector("span");
//Message after guess
const message = document.querySelector(".message");
//Play again button *Hidden*
const playAgainBtn = document.querySelector(".play-again");

//Starting word
let word = "magnolia";
//Letters player has guessed
const guessedLetters = [];
//Number of guesses
let remainingGuesses = 8;

//Fetch list of words
const getWord = async function () {
    const request = await fetch ("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await request.text();
    // console.log(data);
    const randomWordArray = words.split("\n");
    console.log(randomWordArray);
    const randomIndex = Math.floor(Math.random() * randomWordArray.length);
    word = randomWordArray[randomIndex].trim();
    addPlaceholder(word);
};

//Start the game
getWord();

//Add placeholders for each letter in the word
const addPlaceholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        // console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

//Capture value of letter guessed and clear input for next guess
guessBtn.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const playerGuess = letter.value;
    const correctGuess = validateGuess(playerGuess);
    if (correctGuess) {
        makeGuess(playerGuess);
    }
    letter.value = "";
});


//Check if player has submitted a valid guess
const validateGuess = function (playerGuess) {
    const acceptedLetter = /[a-zA-Z]/;
    if (playerGuess.length === 0) {
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
        // console.log(guessedLetters);
        showGuesses();
        countNumGuesses(guess);
    }
    updateWIP(guessedLetters);
};

//Show the guessed letters
const showGuesses = function () {
    guessedLettersElement.innerHTML = "";
    for (const li of guessedLetters) {
        document.createElement("li");
        guessedLettersElement.append(li);
    }
};

//Update the word in progress with correct letters guessed
const updateWIP = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    // console.log(wordArray);
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

//Count guesses remaining
const countNumGuesses = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        message.innerText = `I'm sorry! The word doesn't include the letter ${guess}.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `Good guess! The word has the letter ${guess}.`;
    }
    if (remainingGuesses === 0) {
        message.innerText = `Game over! The mystery word was <span class="highlight">${word}</span>.`;
    } else if (remainingGuesses === 1) {
        numGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
        numGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
};

//Check if the player won
const checkIfWin = function () {
    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = '<p class="highlight">You guessed the correct word! Congrats!</p>';
    }
};