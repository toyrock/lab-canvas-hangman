class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {

    return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
  }

  checkIfLetter(keyCode) {
      if (keyCode > 64 && keyCode < 91) {
        return true;
      } else {
        return false;
      }
    }
  
  

  checkClickedLetters(letter) {
    return this.letters.includes(letter) //? false : true;
    //return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    if(!this.guessedLetters.includes(letter)){
    this.guessedLetters += letter;
  }
  }
  addWrongLetter(letter) {
   if(!this.letter.includes(letter)){
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }
  }
  checkGameOver() {
    if(this.errorsLeft >0) return false;
    return true;
    
  }

  checkWinner() {
    let allLetters = true;
    this.secretWord.split('').forEach(letter => {
      if(!this.guessedLetters.includes(letter))
      allLetters = false;
    })
    return allLetters;
  }
}  


let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event.which)
});
