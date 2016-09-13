/**
 * @description Creates a document fragment that represents the game grid
 * @param grid
 * @returns {DocumentFragment}
 */
export default grid => {
    const doc = document;
    const root = doc.createDocumentFragment();
    let cellNum = 0;
    let domRow = doc.createElement('div');
    grid.cells.forEach((val, key) => {
        if (cellNum % grid.cols === 0) {
            domRow = doc.createElement('div');
            root.appendChild(domRow);
        }
        const domCell = doc.createElement('span');
        domCell.id = key;
        domCell.innerHTML = 'O';
        domCell.className = 'game-cell';
        domRow.appendChild(domCell);
        cellNum++;
    });
    return root;
};

// click event on the grid, that gets the calling cell, and, if the game is in init
// Allows you to set the alive state