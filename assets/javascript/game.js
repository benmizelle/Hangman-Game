// Array of possible answers
var words  = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Zelda", "Link", "Pikachu", "Pokemon", "Metroid"];
// Chooses a random word from the array named words
var answerWord = words[Math.floor(Math.random() * words.length)];
	console.log(answerWord);
var correctAnswer=[];
// for loop: the characters of the answer word with the character: "_"
for (var i=0; i < answerWord.length ; i++) {
    correctAnswer[i]= " _ ";
}
console.log(correctAnswer);


document.getElementById("blankSpaces").innerHTML = correctAnswer.join(" ");




var guessesLeft = 10;

var losses = 0;

var wins = 0;

var previousGuesses = [];

// Listen for key press, then...
 document.onkeyup=function(){
 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase;
 	console.log(letterGuessed);

 
// Loop through letters of Randomly generated answer word
for (var i = 0; i < answerWord.length; ++i) {
    var letterGuessed = answerWord.charAt(i);
    console.log(letterGuessed);
}
// if(letterGuess is not found in the previousGuesses array) {
// add the letterGuess into the previousGuesses array
if (letterGuessed !== previousGuesses); {
     previousGuesses.push(letterGuessed);
     console.log("new guess");
// close if
}

// close onkeyup function
}
