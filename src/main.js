import initGame from 'GameOfLife/game-init';
import playRound from 'GameOfLife/game-round';

let doc = document;
let gameInterval;

const startButton = doc.querySelector('#start-button');
const stopButton = doc.querySelector('#stop-button');
startButton.addEventListener('click', () => {
	const rows = doc.querySelector('#rows').value >> 0;
	const cols = doc.querySelector('#cols').value >> 0;
	const grid = initGame({cols, rows});
	gameInterval = setInterval(() => {
		doc.querySelector('#main > pre').innerHTML = playRound(grid);
	}, 1000);
});

stopButton.addEventListener('click', () => {
	clearInterval(gameInterval);
});
