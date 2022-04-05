/*********************************************************************************************************/
// Import the dependencies //
/*********************************************************************************************************/
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import dictionary from '../data/dictionary.json';

/*********************************************************************************************************/
// Get the dimensions of the device //
/*********************************************************************************************************/
const width = Dimensions.get('window').width;

/*********************************************************************************************************/
// Component interfaces //
/*********************************************************************************************************/
interface IProps {
	input: string;
}

/*********************************************************************************************************/
// Define component Input //
/*********************************************************************************************************/
const Input = (props: IProps) => {
	// Render
	return (
		<View style={styles.container}>
			<View style={styles.container_}>
				<Text style={styles.text}>{props.input}</Text>
				{dictionary.words.includes(props.input.toLocaleLowerCase()) ? (
					<Text style={[styles.text_, styles.valid]}>valid</Text>
				) : (
					<Text style={[styles.text_, styles.invalid]}>invalid</Text>
				)}
			</View>
		</View>
	);
};

/*********************************************************************************************************/
// Define the styles of the component //
/*********************************************************************************************************/
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 0.0875 * width
	},
	container_: {
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: '#979797',
		borderWidth: 2,
		paddingLeft: 0.07 * width,
		paddingRight: 0.04 * width,
		paddingVertical: 0.05 * width
	},
	text: {
		color: '#7ed321',
		letterSpacing: 4,
		fontSize: 0.075 * width,
		fontWeight: 'bold'
	},
	text_: {
		fontSize: 0.04 * width
	},
	valid: {
		color: '#5eba7d'
	},
	invalid: {
		color: '#c8c8c8'
	}
});

/*********************************************************************************************************/
// Export the component //
/*********************************************************************************************************/
export default Input;
