/**
 * @Description A Cell
 */
export default class Cell {

	constructor() {
		this._neighbors = [];
		this.isAlive =  false;
	}

	/**
	 * @description Updates the state of the cell based on the states of its neighbors
	 */
	setLifeState() {
		const numNeighbors = this._neighbors.filter(neighbor => {
			return neighbor ? neighbor.isAlive : false;
		}).length;
		if (!this.isAlive && numNeighbors === 3) {
			this.isAlive = true;
		}
		else if (numNeighbors < 2 || numNeighbors > 3) {
			this.isAlive = false;
		}
	}

	/**
	 * Adds a neighbor to the cell
	 * @param neighbor
	 */
	addNeighbor(neighbor) {
		this._neighbors.push(neighbor);
	}
};



