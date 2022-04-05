/*********************************************************************************************************/
// Import the dependencies //
/*********************************************************************************************************/
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/*********************************************************************************************************/
// Get the dimensions of the device //
/*********************************************************************************************************/
const width = Dimensions.get('window').width;

/*********************************************************************************************************/
// Component interfaces //
/*********************************************************************************************************/
interface IProps {
	text: string;
	active: string;
	canPress: boolean;
	onPress: () => void;
}

/*********************************************************************************************************/
// Define component Tile Content //
/*********************************************************************************************************/
const TileContent = (props: IProps) => {
	// Render active conditional style
	return (
		<>
			{props.active === 'usable' && (
				<LinearGradient
					colors={['#f5515f', '#a0041c']}
					style={[styles.containerG, styles.sizeA]}>
					<LinearGradient
						colors={['#fad65f', '#f76f1f']}
						style={[styles.containerG, styles.sizeB]}>
						<Text style={styles.text}>{props.text}</Text>
					</LinearGradient>
				</LinearGradient>
			)}
			{props.active === 'active' && (
				<LinearGradient
					colors={['#b2eb50', '#439421']}
					style={[styles.containerG, styles.sizeA]}>
					<Text style={styles.text}>{props.text}</Text>
				</LinearGradient>
			)}
			{props.active === 'inactive' && (
				<LinearGradient
					colors={['#d8d8d8', '#c8c8c8']}
					style={[styles.containerG, styles.sizeA]}>
					<Text style={styles.text}>{props.text}</Text>
				</LinearGradient>
			)}
		</>
	);
};

/*********************************************************************************************************/
// Define component Tile //
/*********************************************************************************************************/
const Tile = (props: IProps) => {
	// Render component
	return (
		<View style={styles.container}>
			{props.canPress ? (
				<TouchableOpacity onPress={props.onPress}>
					<TileContent {...props} />
				</TouchableOpacity>
			) : (
				<TileContent {...props} />
			)}
		</View>
	);
};

/*********************************************************************************************************/
// Define the styles of the component //
/*********************************************************************************************************/
const styles = StyleSheet.create({
	container: {
		padding: 0.0125 * width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerG: {
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	sizeA: {
		width: 0.1875 * width,
		height: 0.1875 * width
	},
	sizeB: {
		width: 0.175 * width,
		height: 0.175 * width
	},
	text: {
		color: '#fff',
		fontSize: 0.1 * width,
		fontWeight: 'bold',
		textShadowColor: 'rgba(80,80,80, 0.7)',
		textShadowOffset: {width: -1, height: -1},
		textShadowRadius: 4
	}
});

/*********************************************************************************************************/
// Export the component //
/*********************************************************************************************************/
export default Tile;
