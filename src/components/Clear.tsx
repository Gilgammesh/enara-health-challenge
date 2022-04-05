/*********************************************************************************************************/
// Importa the dependencies //
/*********************************************************************************************************/
import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Platform
} from 'react-native';

/*********************************************************************************************************/
// Get the dimensions of the device //
/*********************************************************************************************************/
const width = Dimensions.get('window').width;

/*********************************************************************************************************/
// Componente interfaces //
/*********************************************************************************************************/
interface IProps {
	input: string;
	clearWord: () => void;
}

/*********************************************************************************************************/
// Define componente Clear //
/*********************************************************************************************************/
const Clear = (props: IProps) => {
	// Render
	return (
		<View style={styles.container}>
			<View style={styles.container_}>
				<Text
					style={[
						styles.text,
						props.input === '' ? styles.inactive : styles.active
					]}>
					clear word
				</Text>
				{props.input === '' ? (
					<View style={[styles.container_btn, styles.bg_inactive]}>
						<Text style={styles.text_btn}>×</Text>
					</View>
				) : (
					<TouchableOpacity onPress={props.clearWord}>
						<View style={[styles.container_btn, styles.bg_active]}>
							<Text style={styles.text_btn}>×</Text>
						</View>
					</TouchableOpacity>
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
		marginTop: 30,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	text: {
		fontSize: 0.05 * width
	},
	active: {
		color: '#333'
	},
	inactive: {
		color: '#c8c8c8'
	},
	container_btn: {
		marginLeft: 20,
		width: 0.125 * width,
		height: 0.125 * width,
		borderRadius: (0.125 * width) / 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bg_active: {
		backgroundColor: '#333'
	},
	bg_inactive: {
		backgroundColor: '#d8d8d8'
	},
	text_btn: {
		...Platform.select({
			ios: {
				marginTop: -0.04 * width
			},
			android: {
				marginTop: -0.058 * width
			}
		}),
		color: '#fff',
		fontSize: 0.15 * width
	}
});

/*********************************************************************************************************/
// Export the component //
/*********************************************************************************************************/
export default Clear;
