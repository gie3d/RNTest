import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/*
    iOS
    File apple-app-site-association ถูกเอาไปวางไว้ที่ https://navyjone.com/.well-known
    ทดสอบด้วยการเปิด https://navyjone.com ดู
*/

export default class UniversalLinks extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'Universal Link',
		};
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Test Universal Link</Text>
				<Text>ทดลองเปิด Web https://navyjone.com ดู</Text>
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
