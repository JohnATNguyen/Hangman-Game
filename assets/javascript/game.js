// define global variables
var songs = ["Keep Ya Head Up", "2 of Amerikaz Most Wanted", "Temptations", "God Bless the Dead", "Hail Mary", "Me Against the World", "How Do U Want It", "So Many Tears", "Unconditional Love", "Trapped", "Life Goes On", "Hit 'Em Up", "Troublesome '96", "Brenda's Got a Baby", "I Ain't Mad at Cha", "I Get Around", "Changes", "California Love", "Picture Me Rollin'", "How Long Will They Mourn Me?", "Toss It Up", "Dear Mama", "All Bout U", "To Live & Die in L.A.", "Heartz of Men"];

var phraseToGuess;
var phraseToGuessLower;

var placeholder = [];
var wrongGuesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var californialove = new Audio('assets/2Pac_CaliforniaLoveOriginalVersion_OldSchool_320VBR.mp3');

function play() {

	// respond to user input
	document.onkeyup = function (event) {
		if (event.key === '`' || event.key == '~' || event.key == '1' || event.key == '!' || event.key == '2' || event.key == '@' || event.key == '3' || event.key == '#' || event.key == '4' || event.key == '$' || event.key == '5' || event.key == '%' || event.key == '6' || event.key == '^' || event.key == '7' || event.key == '&' || event.key == '8' || event.key == '*' || event.key == '9' || event.key == '(' || event.key == '0' || event.key == ')' || event.key == '-' || event.key == '_' || event.key == '=' || event.key == '+' || event.key == 'q' || event.key == 'w' || event.key == 'e' || event.key == 'r' || event.key == 't' || event.key == 'y' || event.key == 'u' || event.key == 'i' || event.key == 'o' || event.key == 'p' || event.key == '[' || event.key == '{' || event.key == ']' || event.key == '}' || event.key == "\\" || event.key == '|' || event.key == 'a' || event.key == 's' || event.key == 'd' || event.key == 'f' || event.key == 'g' || event.key == 'h' || event.key == 'j' || event.key == 'k' || event.key == 'l' || event.key == ';' || event.key == ':' || event.key == '\'' || event.key == '"' || event.key == 'z' || event.key == 'x' || event.key == 'c' || event.key == 'v' || event.key == 'b' || event.key == 'n' || event.key == 'm' || event.key == ',' || event.key == '<' || event.key == '.' || event.key == '>' || event.key == '/' || event.key == '?' || event.key == ' ') {
			var isInPhrase = false;
			for (var i = 0; i < phraseToGuessLower.length; i++) {
				// if user input matches a character in song name
				if (event.key === phraseToGuessLower[i]) {
					isInPhrase = true;
					placeholder[i] = event.key;
					document.getElementById('phrasetoguesselement').textContent = placeholder;
				}
			}

			// if user input does not match a character in song name
			if (isInPhrase === false) {
				// take action only if it's a fresh wrong letter
				var isNewInWrongGuesses = true;
				for (var i = 0; i < wrongGuesses.length; i++) {
					if (event.key === wrongGuesses[i]) {
						isNewInWrongGuesses = false;
					}
				}
				if (isNewInWrongGuesses === true) {
					wrongGuesses.push(event.key);
					document.getElementById('wrongguesseselement').textContent = 'Wrong Guesses: ' + wrongGuesses;
					if (guessesLeft > 0) {
						guessesLeft--;
						document.getElementById('guessesleftelement').textContent = 'Guesses Left: ' + guessesLeft;
					}
				}
			}

			// check if won
			var stringplaceholder = placeholder.join('');
			if (stringplaceholder == phraseToGuessLower) {
				wins++;
				document.getElementById('winselement').textContent = 'Wins: ' + wins;
				stringplaceholder = phraseToGuess;
				document.getElementById('phrasetoguesselement').textContent = stringplaceholder;
				document.getElementById('picture').innerHTML = '<img src="assets/images/hqdefault.jpg" alt="westside">';
				californialove.play();
				document.getElementById("start").disabled = false;
				document.onkeyup = null;
			}

			// check if lost
			else if (guessesLeft === 0) {
				losses++;
				document.getElementById('losseselement').textContent = 'Losses: ' + losses;
				alert('You let \'Pac down... (a.k.a. YOU LOST)!!! Press OK to retry haha =)')
				initialize();
			}
		}
	}
}

// define function to initialize game
function initialize() {
	document.getElementById('picture').innerHTML = '<img src="assets/images/tupac-shakur.jpg" alt="blackandwhite">';
	phraseToGuess = songs[Math.floor(Math.random() * songs.length)];
	phraseToGuessLower = phraseToGuess.toLowerCase();
	console.log(phraseToGuessLower);
	placeholder = [];
	wrongGuesses = [];
	guessesLeft = 10;
	for (var i = 0; i < phraseToGuessLower.length; i++) {
		placeholder.push('_');
	}
	document.getElementById('phrasetoguesselement').textContent = placeholder;
	document.getElementById('wrongguesseselement').textContent = 'Wrong Guesses: ' + wrongGuesses;
	document.getElementById('guessesleftelement').textContent = 'Guesses Left: ' + guessesLeft;
	document.getElementById('winselement').textContent = 'Wins: ' + wins;
	document.getElementById('losseselement').textContent = 'Losses: ' + losses;
	document.getElementById("start").disabled = true;
	californialove.pause();
	californialove.currentTime = 0;
	if (document.onkeyup == null) {
		play();
	}
}

play();