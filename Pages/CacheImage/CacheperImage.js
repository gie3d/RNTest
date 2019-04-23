import React from 'react';
import { View, Image, Platform } from 'react-native';
import shorthash from 'shorthash';
let RNFS = require('react-native-fs');

export default class CacheImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: null,
		};
	}

	loadFile = path => {
		this.setState({ source: { uri: path } });
	};
	downloadFile = (uri, path) => {
		RNFS.downloadFile({ fromUrl: uri, toFile: path }).promise.then(res =>
			this.loadFile(path)
		);
	};
	componentDidMount() {
		const { uri } = this.props;
		const name = shorthash.unique(uri);
		const extension = Platform.OS === 'android' ? 'file://' : '';
		const path = `${extension}${RNFS.CachesDirectoryPath}/${name}.png`;
		console.log('path is: ', path);
		RNFS.exists(path).then(exists => {
			if (exists) this.loadFile(path);
			else this.downloadFile(uri, path);
		});
	}

	render() {
		return <Image style={this.props.style} source={this.state.source} />;
	}
}
