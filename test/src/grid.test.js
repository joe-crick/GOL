import gridFactory from 'GameOfLife/src/grid';

let grid;

describe('Grid', () => {

	beforeEach(() => {
		grid = gridFactory({cols: 10, rows: 4});
	});

	describe('Grid Generation', () => {

		it('contains the correct number of rows', () => {
			expect(grid.length).toBe(4);
		});

		it('contains rows with the correct number of cells', () => {
			expect(grid[0].length).toBe(10);
		});

	});

});
