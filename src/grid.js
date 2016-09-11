import Cell from 'GameOfLife/cell';

/**
 * @description Grid: Creates a grid of Cells. Auto seeds, due to time constraints.
 * @param config
 * @returns {Array}
 */
export default (config) => {
	let {cols, rows} = config;
	const grid = [];
	while(rows--) {
		grid.push(Array(cols).fill().map((cell, cellIdx) => {
			cell = new Cell();
			if ((cellIdx + rows) % 2 === 0) {
				cell.isAlive = true;
			}
			return cell;
		}));
	}
	return grid;
};
