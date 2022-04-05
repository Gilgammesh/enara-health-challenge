/*********************************************************************************************************/
// Import the dependencies //
/*********************************************************************************************************/
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Tile from '../components/Tile';
import Clear from '../components/Clear';
import Input from '../components/Input';
import data from '../data/test-board-2.json';
import neighborTile from '../helpers/neighborTile';

/*********************************************************************************************************/
// Get the dimensions of the device //
/*********************************************************************************************************/
const width = Dimensions.get('window').width;

/*********************************************************************************************************/
// Global variables //
/*********************************************************************************************************/
/* An array of 16 elements is needed */
// Number of rows of the array
const rows: number = 4;
// Number of columns of the array
const cols: number = 4;

/*********************************************************************************************************/
// Component interfaces //
/*********************************************************************************************************/
interface IPosition {
	row: number;
	col: number;
}

/*********************************************************************************************************/
// Define the component Game //
/*********************************************************************************************************/
const Game = () => {
	// State for tiles list
	const [tiles, setTiles] = useState<JSX.Element[]>([]);
	// State for tile
	const [active, setActive] = useState<string>('usable');
	// State to press tile
	const [canPress, setCanPress] = useState<boolean>(true);
	// State for tile position in the array
	const [position, setPosition] = useState<IPosition | null>(null);
	// State for entered word value
	const [input, setInput] = useState<string>('');
	// State of array of entered word values
	const [selected, setSelected] = useState<Array<string>>([]);

	// Effect to get the tiles
	useEffect(() => {
		// Get the initial tiles
		const getTiles = async () => {
			// Clean the tiles list
			setTiles([<React.Fragment key={0} />]);
			// Loop the data board array, using rows and columns
			const promises = data.board.slice(0, rows).map((row, i) => {
				return (
					<View key={i} style={styles.row}>
						{data.board.slice(0, cols).map((col, j) => {
							return (
								<Tile
									key={cols * i + j}
									text={data.board[cols * i + j]}
									active={active}
									canPress={canPress}
									onPress={() => {
										setPosition({
											row: i,
											col: j
										});
										setInput(
											prevInput =>
												`${prevInput}${
													data.board[cols * i + j]
												}`
										);
										setSelected([
											...selected,
											`${i}${j}_${
												data.board[cols * i + j]
											}`
										]);
									}}
								/>
							);
						})}
					</View>
				);
			});
			const result: JSX.Element[] = await Promise.all(promises);
			// Set the tiles list
			setTiles(result);
		};

		// Get the tiles, using the criteria neighbor and active tiles
		const getTiles_ = async () => {
			// Loop the data board array, using rows and columns
			const promises = data.board.slice(0, rows).map((row, i) => {
				return (
					<View key={i} style={styles.row}>
						{data.board.slice(0, cols).map((col, j) => {
							// Set the tiles states
							let active_: string = 'inactive';
							let canPress_: boolean = false;
							// If exist a position
							if (position) {
								// Get the state of tiles, using helper function
								const result = neighborTile(
									active_,
									canPress_,
									rows,
									cols,
									position.row,
									position.col,
									i,
									j
								);
								// Set the states obtained
								active_ = result.active;
								canPress_ = result.canPress;
							}
							// If word is contained in the selected array
							if (
								selected.includes(
									`${i}${j}_${data.board[cols * i + j]}`
								)
							) {
								active_ = 'active';
								canPress_ = false;
							}

							// Render
							return (
								<Tile
									key={cols * i + j}
									text={data.board[cols * i + j]}
									active={active_}
									canPress={canPress_}
									onPress={() => {
										setPosition({
											row: i,
											col: j
										});
										setInput(
											prevInput =>
												`${prevInput}${
													data.board[cols * i + j]
												}`
										);
										setSelected([
											...selected,
											`${i}${j}_${
												data.board[cols * i + j]
											}`
										]);
									}}
								/>
							);
						})}
					</View>
				);
			});
			const result: JSX.Element[] = await Promise.all(promises);
			// Set the tiles list
			setTiles(result);
		};
		// If the input is blank (initial and clear word)
		if (input === '') {
			getTiles();
		}
		// If the position changes
		if (position !== null) {
			getTiles_();
		}
	}, [input, active, canPress, position, selected]);

	// Function to clear the entered word
	const clearWord = () => {
		setActive('usable');
		setCanPress(true);
		setPosition(null);
		setInput('');
		setSelected([]);
	};

	// Render
	return (
		<View style={styles.container}>
			<Clear input={input} clearWord={clearWord} />
			<View style={styles.list}>{tiles}</View>
			<Input input={input} />
		</View>
	);
};

/*********************************************************************************************************/
// Define the styles of the component //
/*********************************************************************************************************/
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	list: {
		flex: 3,
		paddingHorizontal: 0.0625 * width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

/*********************************************************************************************************/
// Export the component //
/*********************************************************************************************************/
export default Game;
