const p1 = {
	name: 'Player 1',
	score: 0,
	button: document.querySelector('#p1Button'),
	display: document.querySelector('#p1Display')
};

const p2 = {
	name: 'Player 2',
	score: 0,
	button: document.querySelector('#p2Button'),
	display: document.querySelector('#p2Display')
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
const winnerDisplay = document.querySelector('#winnerDisplay');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('winner');
			opponent.display.classList.add('notWinner');
			player.button.disabled = true;
			opponent.button.disabled = true;
			
			if (player.score > opponent.score) {
				winnerDisplay.textContent = displayWinner(player.name);
			} else {
				winnerDisplay.textContent = displayWinner(opponent.name);
			}
		}
		player.display.textContent = player.score;
		
	}
}

p1.button.addEventListener('click', () => {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
	updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('winner', 'notWinner');
		p.button.disabled = false;
		winnerDisplay.textContent = 'Game On!';
	}
}

winningScoreSelect.addEventListener('change', (e) => {
	winningScore = parseInt(e.target.value);
	reset(); // reset game to avoid continuing after changing winning score
});

function displayWinner(player) {
	return `🎉 ${player} won 🎊`;
}