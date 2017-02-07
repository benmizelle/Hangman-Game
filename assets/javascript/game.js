var words  = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Zelda", "Link", "Pikachu", "Pokemon", "Metroid"];

var answerWord = words[Math.floor(Math.random() * words.length)];
	console.log(answerWord);
var correctAnswer=[];

for (var i=0; i < answerWord.length ; i++) {
    correctAnswer[i]= " _ ";
}
console.log(correctAnswer);


document.getElementById("blankSpaces").innerHTML = correctAnswer.join(" ");

