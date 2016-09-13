import Cell from 'GameOfLife/cell';

/**
 * @description Grid: Creates a Map of Cells.
 * @param cols
 * @param rows
 * @returns {Map}
 */
function gridFactory ({cols, rows}={}) {
    let cells = [];
    let cellId = 0;
    for (let i = 0; i < rows; i++) {
        cells = cells.concat(Array(cols).fill().map(() => {
            cellId++;
            return [`cell-${cellId}`, new Cell(cellId)];
        }));
    }
    return {
        cols,
        rows,
        cells: new Map(cells)
    };
};

function findCell(grid, cellId) {
    return grid.find(cellId);
}

export {gridFactory};