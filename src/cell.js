import event from 'event-js';
import throttle from 'lodash.throttle';

/**
 * @description A Cell
 */
export default class Cell {

    constructor(id) {
        this._neighbors = [];
        this.isAlive = false;
        this.lifeUpdated = new event.EventHandler(this);
        this.id = id;

        /**
         * @description Updates the state of the cell based on the states of its neighbors
         */
        this._setLifeState = function _setLifeState() {
            const numNeighbors = this._neighbors.filter(neighbor => {
                return neighbor ? neighbor.isAlive : false;
            }).length;
            if (!this.isAlive && numNeighbors === 3) {
                this.isAlive = true;
            }
            else if (numNeighbors < 2 || numNeighbors > 3) {
                this.isAlive = false;
            }

            this.lifeUpdated.publish(this);
        };
        this.setLifeState = throttle(this._setLifeState.bind(this), 1000);
    }

    /**
     * @description Toggles the life state
     */
    toggleLifeState() {
        this.isAlive = !this.isAlive;
    }

    /**
     * @description Adds a neighbor to the cell
     * @param neighbor
     */
    addNeighbor(neighbor) {
        this.lifeUpdated.subscribe(neighbor.setLifeState);
        this._neighbors.push(neighbor);
    }

    /**
     * @description Removes all neighbors from subscribing to events.
     * Essentially, causes the game to stop
     */
    detachNeighbors() {
        this._neighbors.forEach(neighbor => {
            this.lifeUpdated.unsubscribe(neighbor.setLifeState);
        });
    }
};
