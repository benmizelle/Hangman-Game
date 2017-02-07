var words  = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Zelda", "Link", "Pikachu", "Pokemon", "Metroid"];
	console.log(words.length);

var answerWord = words[Math.floor(Math.random() * words.length)];
	console.log(answerWord);

function blanksFromAnswer ( answerWord ) {
    
 	var result = "words";
    
        for(var i = 0; i < words.length; i++) {
        answerWord[i] = "_";
    }
    
    return result;
}