import event from 'event-js';

/**
 * @Description A Cell
 */
export default class Cell {

    constructor(id) {
        this._neighbors = [];
        this.isAlive = false;
        this.lifeUpdated = new event.EventHandler(this);
        this.id = id;
    }

    /**
     * @description Updates the state of the cell based on the states of its neighbors
     */
    setLifeState() {
        let isStateChanged = false;
        const numNeighbors = this._neighbors.filter(neighbor => {
            return neighbor ? neighbor.isAlive : false;
        }).length;
        if (!this.isAlive && numNeighbors === 3) {
            isStateChanged = true;
            this.isAlive = true;
        }
        else if (numNeighbors < 2 || numNeighbors > 3) {
            isStateChanged = true;
            this.isAlive = false;
        }
        if (isStateChanged) {
            this.lifeUpdated.publish(this);
        }
    }

    /**
     * @description Toggles the life state
     */
    toggleLifeState() {
        this.isAlive = !this.isAlive;
    }

    /**
     * Adds a neighbor to the cell
     * @param neighbor
     */
    addNeighbor(neighbor) {
        this.lifeUpdated.subscribe(neighbor.setLifeState);
        this._neighbors.push(neighbor);
    }
};
