import React, { Component } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default class WebViewLink extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Web View Link',
		};
	};

	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	onMessage = event => {
		// alert(event);
		this.props.navigation.navigate('WebViewLink2');
	};

	renderLoading = () => {
		return (
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator />
			</View>
		);
	};

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'blue' }}>
				<WebView
					source={{ uri: 'http://localhost:3000' }}
					style={{ width: width }}
					onMessage={this.onMessage}
					renderLoading={this.renderLoading}
					startInLoadingState={true}
				/>
			</View>
		);
	}
}

const { height, width } = Dimensions.get('window');
