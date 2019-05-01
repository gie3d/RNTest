import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Modal,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
	{
		// Simplest usage.
		url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
		props: {
			// headers: ...
		},
	},
];

export default class ImagePanZoom extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Image Picker Lab',
		};
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Modal
					visible={true}
					transparent={true}
					supportedOrientations={[
						'portrait',
						'portrait-upside-down',
						'landscape',
						'landscape-left',
						'landscape-right',
					]}
				>
					<ImageViewer imageUrls={images} />
				</Modal>
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
