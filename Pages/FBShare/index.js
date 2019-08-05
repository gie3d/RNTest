import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Alert,
} from 'react-native';

import { LoginButton, ShareDialog } from 'react-native-fbsdk';

const SHARE_LINK_CONTENT = {
	contentType: 'link',
	contentUrl: 'https://facebook.com',
};

export default class FBShare extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Facebook Share',
		};
	};

	constructor(props) {
		super(props);
	}

	shareLinkWithShareDialog = async () => {
		const canShow = await ShareDialog.canShow(SHARE_LINK_CONTENT);
		if (canShow) {
			try {
				const { isCancelled, postId } = await ShareDialog.show(
					SHARE_LINK_CONTENT
				);
				if (isCancelled) {
					Alert.alert('Share cancelled');
				} else {
					Alert.alert('Share success with postId: ' + postId);
				}
			} catch (error) {
				Alert.alert('Share fail with error: ' + error);
			}
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={this.shareLinkWithShareDialog}>
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
