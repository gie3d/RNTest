import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Alert,
	Share,
} from 'react-native';

export default class FBShare extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Facebook Share',
		};
	};

	constructor(props) {
		super(props);
	}

	onClick = () => {
		Share.share(
			{
				message: 'Test',
				url: 'http://google.com',
				title: 'Wow, did you see that?',
			},
			{
				// Android only:
				dialogTitle: 'Share BAM goodness',
				// iOS only:
				excludedActivityTypes: [
					'com.apple.UIKit.activity.PostToTwitter',
				],
			}
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={this.onClick}>
					<Text>Share link with ShareDialog</Text>
				</TouchableHighlight>
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
