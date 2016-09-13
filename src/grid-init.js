import {gridFactory} from 'GameOfLife/grid';

/**
 * @description Creates a Grid, sets up the relationships between the cells
 * @param cols
 * @param rows
 */
export default ({cols, rows}={}) => {
    const grid = gridFactory({cols, rows});
    let rowNum = 0, colNum = 0, cellNum = 0;
    const cells = grid.cells;

    cells.forEach(cell => {
        if (colNum === cols) {
            colNum = 1;
            rowNum++;
        } else {
            colNum++;
        }
        cellNum++;

        const hasTopRow = rowNum - 1 >= 0;
        const hasBottomRow = rowNum + 1 < (grid.size / cols);
        const hasLeft = colNum - 1 > 0;
        const hasRight = colNum + 1 < cols;

        if (hasTopRow) {
            const topRow = cellNum - cols;
            cell.addNeighbor(cells.get(`cell-${topRow}`));
            if (hasLeft) cell.addNeighbor(cells.get(`cell-${topRow - 1}`));
            if (hasRight) cell.addNeighbor(cells.get(`cell-${topRow + 1}`));
        }
        if (hasBottomRow) {
            const bottomRow = cols + cellNum;
            cell.addNeighbor(cells.get(`cell-${bottomRow}`));
            if (hasLeft) cell.addNeighbor(cells.get(`cell-${bottomRow - 1}`));
            if (hasRight) cell.addNeighbor(cells.get(`cell-${bottomRow + 1}`));
        }
        if (hasLeft) {
            cell.addNeighbor(cells.get(`cell-${cellNum - 1}`));
        }
        if (hasRight) {
            cell.addNeighbor(cells.get(`cell-${cellNum + 1}`));
        }

    });

    return grid;
}