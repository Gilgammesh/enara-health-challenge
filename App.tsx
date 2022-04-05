/*********************************************************************************************************/
// Import the dependencies //
/*********************************************************************************************************/
import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	useColorScheme,
	StyleSheet,
	Dimensions
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Game from './src/screens/Game';

/*********************************************************************************************************/
// Get the dimensions of the device //
/*********************************************************************************************************/
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

/*********************************************************************************************************/
// Define component App //
/*********************************************************************************************************/
const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
	};

	// Render
	return (
		<SafeAreaView style={[backgroundStyle, styles.container]}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
			/>
			<Game />
		</SafeAreaView>
	);
};

/*********************************************************************************************************/
// Define the styles of the component //
/*********************************************************************************************************/
const styles = StyleSheet.create({
	container: {
		width,
		height
	}
});

/*********************************************************************************************************/
// Export the component //
/*********************************************************************************************************/
export default App;
