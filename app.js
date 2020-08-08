let scores, dice, currentPlayer;

function init() {
	scores = [ 0, 0, 0, 0 ];

	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('current-2').textContent = 0;
	document.getElementById('current-3').textContent = 0;
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('score-2').textContent = 0;
	document.getElementById('score-3').textContent = 0;
	dice = document.querySelector('.dice');
	dice.style.display = 'none';
	currentPlayer = 0;
}

init();

/*  Double Player logic
document.querySelector('.btn-roll').addEventListener('click', function() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	console.log(randomNumber);

	dice.src = '././Images/dice-' + randomNumber + '.png';
	dice.style.display = 'block';

	if (randomNumber != 1) scores[activePlayer] += randomNumber;
	else {
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	}
	document.getElementById('current-' + activePlayer).textContent = scores[activePlayer];
});
*/

document.querySelector('.btn-roll').addEventListener('click', rollDice);
function rollDice() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	dice.src = '././Images/dice-' + randomNumber + '.png';
	dice.style.display = 'block';

	scores[currentPlayer] += randomNumber;
	document.getElementById('current-' + currentPlayer).textContent = randomNumber;
	console.log(randomNumber);
	if (parseInt(randomNumber) >= 5) {
		document.getElementById('score-' + currentPlayer).textContent = scores[currentPlayer];
	} else {
		calculateWinner();
		document.getElementById('score-' + currentPlayer).textContent = scores[currentPlayer];
		document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
		currentPlayer += 1;
		if (currentPlayer > 3) {
			currentPlayer = 0;
		}
		document.querySelector('.player-' + currentPlayer + '-panel').classList.add('active');
	}

	calculateWinner();
}

document.querySelector('.btn-new').addEventListener('click', function() {
	init();
});

function calculateWinner() {
	if (scores[currentPlayer] >= 100) {
		dice.style.display = 'none';
		document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + currentPlayer + '-panel').style.backgroundColor = 'Yellow';
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('#name-' + currentPlayer).textContent = 'Congrats!!! You are the Winner!!!!!!';
	}
}
