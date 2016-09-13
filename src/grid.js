import Cell from 'GameOfLife/cell';

/**
 * @description Grid: Creates a Map of Cells.
 * @param cols
 * @param rows
 * @returns {Map}
 */
export default class Grid {

    constructor({cols, rows}={}) {
        this.cols = cols;
        let cells = [];
        let cellId = 0;
        for (let i = 0; i < rows; i++) {
            cells = cells.concat(Array(cols).fill().map(() => {
                cellId++;
                return [`cell-${cellId}`, new Cell(cellId)];
            }));
        }
        this.cells = new Map(cells);
    }

    /**
     * @description Finds a cell in the grid
     * @param cellId
     * @returns {Cell}
     */
    findCell(cellId) {
        return this.cells.get(cellId);
    }

    /**
     * @description Removes all event listeners from all cells
     */
    reset() {
        this.cells.forEach(cell => {
            cell.detachNeighbors();
        })
    }
}