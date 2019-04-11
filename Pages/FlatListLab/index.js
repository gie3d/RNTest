import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Dimensions,
	TextInput,
} from 'react-native';

import FlatListScrollHelper from './FlatListScrollHelper';

const { width } = Dimensions.get('window');

export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => {
		return {
			title: 'FlatList Lab',
		};
	};

	constructor(props) {
		super(props);
		this.scrollHelper = new FlatListScrollHelper(60, 20);
		this.state = {
			messages: [],
			scrollToIndex: {
				index: '0',
				viewOffset: '0',
				viewPosition: '0',
			},
		};
	}

	componentDidMount = () => {
		let messages = [];
		for (let i = 0; i < 1000; i++) {
			messages.push({
				id: i,
				title: i,
			});
		}

		this.setState({
			messages,
		});
	};

	scrollToIndexChange = (type, value) => {
		let scrollToIndex = { ...this.state.scrollToIndex };
		scrollToIndex[type] = value;
		this.setState({
			scrollToIndex,
		});
	};

	keyExtractor = item => {
		return 'lab' + item.id;
	};

	renderFlatListItem = ({ item, index }) => {
		return (
			<View
				style={{
					minHeight: index % 3 === 0 ? 120 : 60,
					backgroundColor: index % 3 === 0 ? '#99ff00' : '#ff9933',
					borderRadius: 5,
					borderWidth: 1,
					padding: 10,
					justifyContent: 'center',
					alignItems: 'flex-start',
					maxWidth: (70 * width) / 100,
					margin: 10,
				}}
				onLayout={event => {
					var { x, y, width, height } = event.nativeEvent.layout;
					// console.log('onLayout: ', index, height);
					this.scrollHelper.setItemHeight(index, height);
				}}
			>
				<Text>{item.title}</Text>
			</View>
		);
	};

	render() {
		console.log('render ------------');
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					ref="flatList"
					data={this.state.messages}
					extraData={this.state}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderFlatListItem}
					getItemLayout={this.scrollHelper.getItemLayout}
					initialScrollIndex={2}
					inverted
				/>
				<View
					style={{
						position: 'absolute',
						right: 5,
						top: 10,
						width: 150,
						backgroundColor: '#eeeeee',
						borderWidth: 1,
						padding: 5,
						borderRadius: 5,
					}}
				>
					<Text>Index</Text>
					<TextInput
						placeholder="Index"
						value={this.state.scrollToIndex.index}
						onChangeText={text =>
							this.scrollToIndexChange('index', text)
						}
						selectionColor="white"
						underlineColorAndroid="white"
						selectionColor="#666666"
					/>
					<View style={{ height: 10 }} />
					<Text>View Offset</Text>
					<TextInput
						placeholder="View Offset"
						value={this.state.scrollToIndex.viewOffset}
						onChangeText={text =>
							this.scrollToIndexChange('viewOffset', text)
						}
						selectionColor="white"
						underlineColorAndroid="white"
						selectionColor="#666666"
					/>
					<View style={{ height: 10 }} />
					<Text>View Position</Text>
					<TextInput
						placeholder="View Position"
						value={this.state.scrollToIndex.viewPosition}
						onChangeText={text =>
							this.scrollToIndexChange('viewPosition', text)
						}
						selectionColor="white"
						underlineColorAndroid="white"
						selectionColor="#666666"
					/>
					<View style={{ height: 10 }} />
					<TouchableOpacity
						onPress={() =>
							this.refs.flatList.scrollToIndex({
								index: parseInt(this.state.scrollToIndex.index),
								viewOffset: parseInt(
									this.state.scrollToIndex.viewOffset
								),
								viewPosition: parseInt(
									this.state.scrollToIndex.viewPosition
								),
							})
						}
					>
						<Text style={{ fontWeight: 'bold' }}>GO</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
