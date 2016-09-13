/**
 * @description Updates the display of the cell
 * @param doc
 * @returns {function(*)}
 */
export default doc => {
    return cell => {
        const uiCell = doc.getElementById(`cell-${cell.id}`);
        uiCell.innerHTML = cell.isAlive ? 'X' : 'O';
    }
}