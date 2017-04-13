// define global variables
var songs = ["Keep Ya Head Up", "2 of Amerikaz Most Wanted", "Temptations", "God Bless the Dead", "Hail Mary", "Me Against the World", "How Do U Want It", "So Many Tears", "Unconditional Love", "Trapped", "Life Goes On", "Hit 'Em Up", "Troublesome '96", "Brenda's Got a Baby", "I Ain't Mad at Cha", "I Get Around", "Changes", "California Love", "Picture Me Rollin'", "How Long Will They Mourn Me?", "Toss It Up", "Dear Mama", "All Bout U", "To Live & Die in L.A.", "Heartz of Men"];

var wordToGuess;
var wordToGuessLower;

var placeholder = [];
var wrongGuesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;

var californialove = new Audio('assets/2Pac_CaliforniaLoveOriginalVersion_OldSchool_320VBR.mp3');

// define function to initialize game
function initialize() {
	placeholder = [];
	document.getElementById('picture').innerHTML = '<img src="assets/images/tupac-shakur.jpg">';
	wordToGuess = songs[Math.floor(Math.random() * songs.length)];
	wordToGuessLower = wordToGuess.toLowerCase();
	for (var i = 0; i < wordToGuessLower.length; i++) {
		placeholder.push('_');
	}
	document.getElementById('wordtoguesselement').textContent = placeholder;
	document.getElementById('wrongguesseselement').textContent = 'Wrong Guesses: ' + wrongGuesses;
	document.getElementById('guessesleftelement').textContent = 'Guesses Left: ' + guessesLeft;
	document.getElementById('winselement').textContent = 'Wins: ' + wins;
	document.getElementById('losseselement').textContent = 'Losses: ' + losses;
}

// initialize game
initialize();

// respond to user input
document.onkeyup = function (event) {
	if (event.key === '`' || event.key == '~' || event.key == '1' || event.key == '!' || event.key == '2' || event.key == '@' || event.key == '3' || event.key == '#' || event.key == '4' || event.key == '$' || event.key == '5' || event.key == '%' || event.key == '6' || event.key == '^' || event.key == '7' || event.key == '&' || event.key == '8' || event.key == '*' || event.key == '9' || event.key == '(' || event.key == '0' || event.key == ')' || event.key == '-' || event.key == '_' || event.key == '=' || event.key == '+' || event.key == 'q' || event.key == 'w' || event.key == 'e' || event.key == 'r' || event.key == 't' || event.key == 'y' || event.key == 'u' || event.key == 'i' || event.key == 'o' || event.key == 'p' || event.key == '[' || event.key == '{' || event.key == ']' || event.key == '}' || event.key == "\\" || event.key == '|' || event.key == 'a' || event.key == 's' || event.key == 'd' || event.key == 'f' || event.key == 'g' || event.key == 'h' || event.key == 'j' || event.key == 'k' || event.key == 'l' || event.key == ';' || event.key == ':' || event.key == '\'' || event.key == '"' || event.key == 'z' || event.key == 'x' || event.key == 'c' || event.key == 'v' || event.key == 'b' || event.key == 'n' || event.key == 'm' || event.key == ',' || event.key == '<' || event.key == '.' || event.key == '>' || event.key == '/' || event.key == '?' || event.key == ' ') {
		var isInWord = false;
		for (var i = 0; i < wordToGuessLower.length; i++) {
			// if user input matches a character in song name
			if (event.key === wordToGuessLower[i]) {
				isInWord = true;
				placeholder[i] = event.key;
				document.getElementById('wordtoguesselement').textContent = placeholder;
			}
		}

		// if user input does not match a character in song name
		if (isInWord === false) {
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
		stringplaceholder = placeholder.join('');
		console.log(stringplaceholder);
		console.log(wordToGuessLower);
		if (stringplaceholder == wordToGuessLower) {
			wins++;
			document.getElementById('winselement').textContent = 'Wins: ' + wins;
			placeholder = wordToGuess;
			document.getElementById('wordtoguesselement').textContent = placeholder;
			document.getElementById('picture').src = "../images/2pac-ppcorn-2016.jpg";
			californialove.play();
			initialize();
		}

		// check if lost
		else if (guessesLeft === 0) {
			losses++;
			document.getElementById('losseselement').textContent = 'Losses: ' + losses;
			alert('You let \'Pac down... (YOU LOST)!!!')
			initialize();
		}
	}
}