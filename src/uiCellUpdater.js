/**
 * @description Updates the cell display
 * @param cell
 * @param uiCell
 */
function updateCellDisplay({cell, uiCell}={}) {
    if (cell.isAlive) {
        uiCell.textContent = 'X';
        uiCell.className += ' alive';
    } else {
        uiCell.textContent = 'O';
        uiCell.className = 'game-cell';
    }
}
/**
 * @description Updates the display of the cell
 * @param doc
 * @returns {function(*)}
 */
export function updateUiCellFactory(doc) {
    return cell => {
        const uiCell = doc.getElementById(`cell-${cell.id}`);
        updateCellDisplay({cell, uiCell});
    }
}



export {updateUiCellFactory, updateCellDisplay}