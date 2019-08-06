import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './Pages/Home';
import FlatListLab from './Pages/FlatListLab';
import ImagePickerLab from './Pages/ImagePickerLab';
import ImagePanZoom from './Pages/ImagePanZoom';
import CacheImage from './Pages/CacheImage';
import UniversalLinks from './Pages/UniveralLinks';

const HomeStack = createStackNavigator(
	{
		Home: { screen: Home },
		FlatListLab: { screen: FlatListLab },
		ImagePickerLab: { screen: ImagePickerLab },
		ImagePanZoom: { screen: ImagePanZoom },
		CacheImage: { screen: CacheImage, path: '/cache-image' },
		UniversalLinks: {
			screen: UniversalLinks,
			path: '/universal-links/:abc',
		},
	},
	{
		initialRouteName: 'Home',
	}
);

const AppContainer = createAppContainer(HomeStack);
export default () => <AppContainer uriPrefix="https://navyjone.com/applink" />;
