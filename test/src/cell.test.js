import Cell from 'GameOfLife/src/cell';

let cell;
let neighbor;

describe('Cell', () => {

	beforeEach(() => {
		cell = new Cell();
		neighbor = new Cell()
	});

	it('Exists', () => {
		expect(cell).not.toBe(null);
	});

	it('has an initial state of dead', () => {
		expect(cell.isAlive).toBe(false);
	});

	it('can add a neighbor', () =>  {
		cell.addNeighbor(neighbor);
		expect(cell._neighbors.length).toBe(1);
	});

	it('returns dead if less than 2 neighbors are alive', () =>  {
		cell.setLifeState();
		expect(cell.isAlive).toBe(false);
	});

	it('returns dead if more than 3 neighbors are alive', () => {
		cell.isAlive = true;
		Array(4).fill(new Cell()).forEach(neighbor => {
			neighbor.isAlive = true;
			cell.addNeighbor(neighbor);
		});
		cell.setLifeState();
		expect(cell.isAlive).toBe(false);
	});

	it('returns alive if cell already alive, and 2 neighbors alive', () => {
		cell.isAlive = true;
		Array(2).fill(new Cell()).forEach(neighbor => {
			neighbor.isAlive = true;
			cell.addNeighbor(neighbor);
		});
		cell.setLifeState();
		expect(cell.isAlive).toBe(true);
	});

	it('returns alive if cell already alive, and 3 neighbors alive', () => {
		cell.isAlive = true;
		Array(3).fill(new Cell()).forEach(neighbor => {
			neighbor.isAlive = true;
			cell.addNeighbor(neighbor);
		});
		cell.setLifeState();
		expect(cell.isAlive).toBe(true);
	});

	it('returns alive if cell already dead, and 3 neighbors alive', () => {
		cell.isAlive = false;
		Array(3).fill(new Cell()).forEach(neighbor => {
			neighbor.isAlive = true;
			cell.addNeighbor(neighbor);
		});
		cell.setLifeState();
		expect(cell.isAlive).toBe(true);
	});

});
