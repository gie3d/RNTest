import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	Linking,
} from 'react-native';

export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'NVJ Lab',
		};
	};

	componentDidMount() {
		Linking.addEventListener('url', this._handleOpenURL);
		Linking.getInitialURL().then(url => {
			console.log(url);
			if (url) {
				this._handleOpenURL({ url });
			}
		});
	}

	componentWillUnmount() {
		Linking.removeEventListener('url', this._handleOpenURL);
	}

	_handleOpenURL(evt) {
		console.log('handleOpenUrl', evt);
	}

	constructor(props) {
		super(props);
		this.state = {
			labs: [
				{
					id: 1,
					name: 'Flat List',
					target: 'FlatListLab',
					description: 'ทดสอบการ scroll to Index',
				},
				{
					id: 2,
					name: 'Image Picker',
					target: 'ImagePickerLab',
					description: 'ทดสอบการเลือกรูปและถ่ายรูป',
				},
				{
					id: 3,
					name: 'Image Zoom',
					target: 'ImagePanZoom',
					description: 'ทดสอบการ Zoom รูป',
				},
				{
					id: 4,
					name: 'Cache Image',
					target: 'CacheImage',
					description: 'ทดสอบการ Cache รูป',
				},
				{
					id: 6,
					name: 'Universal App Link',
					target: 'UniversalLinks',
					description: 'ทดสอบการ Link จากภายนอก',
				},
			],
		};
	}

	keyExtractor = item => {
		return 'home' + item.id;
	};

	renderFlatListItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => this.goto(item.id)}
				style={styles.rowContainer}
			>
				<Text style={styles.rowTitle}>{item.name}</Text>
				<Text style={styles.rowDescription}>{item.description}</Text>
			</TouchableOpacity>
		);
	};

	renderSeparator = () => {
		return <View style={styles.separator} />;
	};

	goto = targetId => {
		const target = this.state.labs.filter(lab => lab.id === targetId)[0];
		this.props.navigation.navigate({
			key: target.target,
			routeName: target.target,
			params: {
				...target.params,
			},
		});
	};

	render() {
		console.log('render home');
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.labs}
					extraData={this.state}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderFlatListItem}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	rowContainer: {
		minHeight: 60,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	rowTitle: {
		fontSize: 16,
	},
	rowDescription: {
		fontSize: 14,
		color: '#999999',
	},
	separator: {
		height: 1,
		backgroundColor: '#eeeeee',
	},
});
