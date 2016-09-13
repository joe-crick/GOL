import uiCellUpdateFactory from 'GameOfLife/uiCellUpdater'

function isNewRow(cellNum, grid) {
    return cellNum % grid.cols === 0;
}

/**
 * Creates a document fragment that represents the game gr
 * @param doc
 * @returns {function(*=)}
 */
export default doc => {
    return grid => {
        const root = doc.createDocumentFragment();
        const wrapper = doc.createElement('div');
        let cellNum = 0;
        let domRow = doc.createElement('div');
        const cellUpdater = uiCellUpdateFactory(doc);
        grid.cells.forEach((cell, key) => {
            cell.lifeUpdated.subscribe(cellUpdater);
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
    }
};
