import initGrid from 'GameOfLife/grid-init';
import initBoard from 'GameOfLife/init-board';
import 'GameOfLife/app.less';

let doc = document;
let gameInterval;
let grid;

const createUiGrid = doc.querySelector('#init-grid');
const startButton = doc.querySelector('#start-button');
const stopButton = doc.querySelector('#stop-button');
const click = 'click';

createUiGrid.addEventListener(click, () => {
    const rows = doc.querySelector('#rows').value >> 0;
    const cols = doc.querySelector('#cols').value >> 0;
    const gameContainer = doc.querySelector('#game');
    gameContainer.appendChild(initBoard(initGrid({cols, rows})));
    gameContainer.addEventListener(click, (event) => {
        const target = event.target;
        alert(`hello ${target.id}`);
    });
});

startButton.addEventListener(click, () => {
	gameInterval = setInterval(() => {
		playGameRound();
	}, 1000);
});

stopButton.addEventListener(click, () => {
	clearInterval(gameInterval);
});
