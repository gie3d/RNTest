import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
	onPress = () => {
		this.props.navigation.navigate('Settings');
	};
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>Home!</Text>
				<TouchableOpacity onPress={this.onPress}>
					<Text>Go to Settings</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

class SettingsScreen extends React.Component {
	onPress = () => {
		this.props.navigation.navigate('FlatListLab');
	};
	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>Settings!</Text>
				<TouchableOpacity onPress={this.onPress}>
					<Text>Go to Another stack</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const TabNavigator = createBottomTabNavigator({
	Home: { screen: HomeScreen, path: 'home' },
	Settings: { screen: SettingsScreen, path: 'settings' },
});

export default createAppContainer(TabNavigator);
