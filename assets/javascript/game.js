// Array of possible answers
var words  = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Zelda", "Link", "Pikachu", "Pokemon", "Metroid"];
// Chooses a random word from the array named words
var answerWord = words[Math.floor(Math.random() * words.length)];
	console.log(answerWord);
var correctAnswer=[];
// for loop: displays the characters of the answer word with character: "_"
for (var i=0; i < answerWord.length ; i++) {
    correctAnswer[i]= " _ ";
}
console.log(correctAnswer);


document.getElementById("blankSpaces").innerHTML = correctAnswer.join(" ");

var alphabet = ['a','b','c','d','e','f','g','h','i',
'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
   console.log(wins);

var losses = 0;
   console.log(losses);

var guessesleft = 10;
	console.log(guessesleft);

var letterGuessed = alphabet[Math.floor(Math.random()*alphabet.length)];
	console.log(letterGuessed);
   
// Listen for key press
 document.onkeyup=function(){
 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase;
 	console.log(letterGuessed);
   
if(letterGuessed === answerWord){
   console.log(letterGuessed);
    console.log(answerWord);
   wins = wins +1;
   
}
else if(letterGuessed !== answerWord){
    guessesleft = guessesleft - 1;
    console.log(guessesleft);
    if (guessesleft === 0){
        alert("You lose.");
        losses = losses +1;
        guessesleft=10;
    }
}//end else if
}//end keyup function


