import initGame from 'GameOfLife/src/game-init';

let grid;

describe('Game Init', () => {

	beforeEach(() => {
		grid = initGame({cols: 4, rows: 4});
	});

	describe('Seed Game', () => {

		it('seeds the game with a random number of alive cells', () => {
			let aliveCells = 0;
			grid.forEach(row => {
				aliveCells += row.filter(cell => cell.isAlive).length;
			});
			expect(aliveCells).toBeGreaterThan(0);
		});

		it('sets up neighbor relationships for all cells', () => {
			const testCell = grid[1][2];
			expect(testCell._neighbors.length).toBe(8)
		});

	});

});
