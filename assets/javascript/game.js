//define variables
var songs = ["Keep Ya Head Up", "2 of Amerikaz Most Wanted", "Temptations", "God Bless the Dead", "Hail Mary", "Me Against the World", "How Do U Want It", "So Many Tears", "Unconditional Love", "Trapped", "Life Goes On", "Hit 'Em Up", "Troublesome '96", "Brenda's Got a Baby", "I Ain't Mad at Cha", "I Get Around", "Changes", "California Love", "Picture Me Rollin'", "How Long Will They Mourn Me?", "Toss It Up", "Dear Mama", "All Bout U", "To Live & Die in L.A.", "Heartz of Men"]

var wordToGuess;
var wordToGuessLower;

var placeholder = [];
var wrongGuesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var californialove = new Audio('assets/2Pac_CaliforniaLoveOriginalVersion_OldSchool_320VBR.mp3');

//define functions
function initialize() {
	wordToGuess = songs[Math.floor(Math.random() * songs.length)];
	wordToGuessLower = wordToGuess.toLowerCase();
	for (var i = 0; i < wordToGuessLower.length; i++) {
		placeholder.push('_');
	}
	document.getElementById('wordtoguesselement').textContent = placeholder;
}

//initialize game
initialize();

//respond to user input
document.onkeyup = function (event) {
	for (var i = 0; i < wordToGuessLower.length; i++) {
		//if user input matches a character in song name
		if (event.key === 'wordToGuessLower[i]') {
			placeholder[i] = event.key;
			document.getElementById('wordtoguesselement').textContent = placeholder;
			guessesLeft--;
			document.getElementById('guessesleftelement').textContent = 'Guesses Left: ' + guessesLeft;
		}
		//if user input does not match a character in song name
		else if (event.key != 'wordToGuessLower[i]') {
			wrongGuesses.push(event.key);
			document.getElementById('wrongguesseselement').textContent = 'Wrong Guesses: ' + wrongGuesses;
			guessesLeft--;
			document.getElementById('guessesleftelement').textContent = 'Guesses Left: ' + guessesLeft;
		}
	}
	//check if won
	if (placeholder === wordToGuessLower) {
		wins++;
		document.getElementById('winselement').textContent = 'Wins: ' + wins;
		document.getElementById('picture').innerHTML = '<img src="assets/images/hqdefault.jpg">'
		californialove.play();
		initialize();
	}
	//check if lost
	else if (guessesLeft === 0) {
		losses++;
		document.getElementById('losseselement').textContent = 'Losses: ' + losses;
		initialize();
	}
}