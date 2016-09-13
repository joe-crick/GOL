import initGrid from 'GameOfLife/grid-init';
import boardFactory from 'GameOfLife/init-board';
import 'GameOfLife/app.less';

let doc = document;
let grid;
let isGamePlaying = false;
const createUiGridButton = doc.querySelector('#init-grid');
const startButton = doc.querySelector('#start-button');
const stopButton = doc.querySelector('#stop-button');
const gameContainer = doc.querySelector('#game');
const click = 'click';

function setButtonStates() {
    createUiGridButton.disabled = isGamePlaying;
    stopButton.disabled = !isGamePlaying;
}

createUiGridButton.addEventListener(click, () => {
    const rows = doc.querySelector('#rows').value >> 0;
    const cols = doc.querySelector('#cols').value >> 0;
    const existingGrid = gameContainer.querySelector('div');
    grid = initGrid({cols, rows});
    const boardCreator = boardFactory(doc);
    gameContainer.replaceChild(boardCreator(grid), existingGrid);
    startButton.disabled = false;
});

gameContainer.addEventListener(click, (event) => {
    // Allow the user to seed the game only if the game is not active
    if (!isGamePlaying) {
        const target = event.target;
        const cell = grid.findCell(target.id);
        cell.toggleLifeState();
        target.textContent = cell.isAlive ? 'X' : 'O';
    }
});

startButton.addEventListener(click, () => {
    isGamePlaying = true;
    startButton.disabled = true;
    grid.cells.get('cell-1').setLifeState();
    setButtonStates();
});

stopButton.addEventListener(click, () => {
    isGamePlaying = false;
    startButton.disabled = true;
    setButtonStates();
    grid.reset();
});
