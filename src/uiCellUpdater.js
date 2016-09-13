var doc = document;

/**
 * @description Updates the display of the cell
 * @param cell
 */
export default function updateCellDisplay(cell) {
    const uiCell = doc.getElementById(`cell-${cell.id}`);
    uiCell.innerHTML = cell.isAlive ? 'X' : 'O';
}