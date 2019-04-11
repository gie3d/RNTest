import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImagePickerLab extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Image Picker Lab',
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			avatarSource: '',
		};
	}

	onPress = () => {
		const options = {
			title: 'Select Avatar',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};

		/**
		 * The first arg is the options object for customization (it can also be null or omitted for default options),
		 * The second arg is the callback which sends object: response (more info in the API Reference)
		 */
		ImagePicker.showImagePicker(options, response => {
			// console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log(
					'User tapped custom button: ',
					response.customButton
				);
			} else {
				const source = { uri: response.uri };

				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };
				console.log('select image', source);
			}
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.onPress}>
					<Text style={styles.label}> Open Image Picker </Text>
				</TouchableOpacity>
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
