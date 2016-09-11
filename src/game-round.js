/**
 * @description Plays one round of the Game
 * @param grid
 */
export default grid => {
	let output = '';
	grid.forEach(row => {
		row.forEach(cell => {
			cell.setLifeState();
			output += cell.isAlive ? 'X': 'O';
		});
		output += '\n';
	});
	return output;
}
