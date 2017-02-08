var words  = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Zelda", "Link", "Pikachu", "Pokemon", "Metroid"];

var answerWord = words[Math.floor(Math.random() * words.length)];
	console.log(answerWord);
var correctAnswer=[];

for (var i=0; i < answerWord.length ; i++) {
    correctAnswer[i]= " _ ";
}
console.log(correctAnswer);


document.getElementById("blankSpaces").innerHTML = correctAnswer.join(" ");

  var guessesLeft = 10;
  var losses = 0;
  var wins = 0;
  var previousGuesses = [];
  var letterGuessed = [];

 document.onkeyup=function(){
 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase;
 	console.log(letterGuessed);

for (var i = 0; i < answerWord.length; ++i) {
    var letterGuessed = answerWord.charAt(i);
    console.log(letterGuessed);
}
}