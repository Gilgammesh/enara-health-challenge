/*********************************************************************************************************/
// Function to get the states of the tile, based on the location of the pressed tile //
/*********************************************************************************************************/
const neighborTile = (
	active: string,
	canPress: boolean,
	rows: number,
	cols: number,
	row: number,
	col: number,
	i: number,
	j: number
) => {
	// Initial states
	let active_: string = active;
	let canPress_: boolean = canPress;

	// If the row is first
	if (row % rows === 0) {
		// If the col is first
		if (col % cols === 0) {
			if (i === row && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		}
		// If the col is last
		else if (col % cols === cols - 1) {
			if (i === row && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		} else {
			if (i === row && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		}
	}
	// If the row is last
	else if (row % rows === rows - 1) {
		// If the col is first
		if (col % cols === 0) {
			if (i === row && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		}
		// If the col is last
		else if (col % cols === cols - 1) {
			if (i === row && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		} else {
			if (i === row && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		}
	} else {
		// If the col is first
		if (col % cols === 0) {
			if (i === row && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		}
		// If the col is last
		else if (col % cols === cols - 1) {
			if (i === row && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		} else {
			if (i === row && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row + 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col - 1) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col) {
				active_ = 'usable';
				canPress_ = true;
			}
			if (i === row - 1 && j === col + 1) {
				active_ = 'usable';
				canPress_ = true;
			}
		}
	}
	// Return
	return {active: active_, canPress: canPress_};
};

/*********************************************************************************************************/
// Export the default function //
/*********************************************************************************************************/
export default neighborTile;
