import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Modal,
} from 'react-native';

import CachePerImage from './CacheperImage';

export default class CacheImage extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Cache Image Lab',
		};
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<CachePerImage
					uri="https://avatars2.githubusercontent.com/u/7970947?v=3&s=460"
					style={{ width: 200, height: 200, flex: 1 }}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		fontSize: 20,
		color: 'green',
	},
});
