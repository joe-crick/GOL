import gridFactory from 'GameOfLife/grid';

/**
 * @description Creates a Grid, sets up the relationships between the cells
 * @param config
 */
export default (config) => {
	const {cols, rows} = config;
	const grid = gridFactory({cols, rows});

	grid.forEach((row, rowIdx) => {
		row.forEach((cell, cellIdx) => {
			const hasTopRow = rowIdx -1 >= 0;
			const hasBottomRow = rowIdx +1 < grid.length;
			const hasLeft = cellIdx -1 >= 0;
			const hasRight = cellIdx +1 < row.length;

			if(hasTopRow) {
				const rowAbove = grid[rowIdx -1];
				cell.addNeighbor(rowAbove[cellIdx]);
				if(hasLeft) cell.addNeighbor(rowAbove[cellIdx +1]);
				if(hasRight) cell.addNeighbor(rowAbove[cellIdx -1]);
			}
			if(hasBottomRow) {
				const rowBelow = grid[rowIdx +1];
				cell.addNeighbor(rowBelow[cellIdx]);
				if(hasLeft) cell.addNeighbor(rowBelow[cellIdx -1]);
				if(hasRight) cell.addNeighbor(rowBelow[cellIdx +1]);
			}
			if(hasLeft) {
				cell.addNeighbor(row[cellIdx -1]);
			}
			if(hasRight) {
				cell.addNeighbor(row[cellIdx + 1]);
			}
		});
	});
	return grid;
}