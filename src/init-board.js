import updateCellDisplay from 'GameOfLife/uiCellUpdater'

function isNewRow(cellNum, grid) {
    return cellNum % grid.cols === 0;
}
/**
 * @description Creates a document fragment that represents the game grid
 * @param grid
 * @returns {DocumentFragment}
 */
export default grid => {
    const doc = document;
    const root = doc.createDocumentFragment();
    const wrapper = doc.createElement('div');
    let cellNum = 0;
    let domRow = doc.createElement('div');
    grid.cells.forEach((cell, key) => {
        cell.lifeUpdated.subscribe(updateCellDisplay);
        if (isNewRow(cellNum, grid)) {
            domRow = doc.createElement('div');
            wrapper.appendChild(domRow);
        }
        const domCell = doc.createElement('span');
        domCell.id = key;
        domCell.innerHTML = 'O';
        domCell.className = 'game-cell';
        domRow.appendChild(domCell);
        cellNum++;
    });
    root.appendChild(wrapper);
    return root;
};
