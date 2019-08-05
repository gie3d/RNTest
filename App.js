import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './Pages/Home';
import FlatListLab from './Pages/FlatListLab';
import ImagePickerLab from './Pages/ImagePickerLab';
import ImagePanZoom from './Pages/ImagePanZoom';
import CacheImage from './Pages/CacheImage';
import FBShare from './Pages/FBShare';

const HomeStack = createStackNavigator(
	{
		Home: { screen: Home },
		FlatListLab: { screen: FlatListLab },
		ImagePickerLab: { screen: ImagePickerLab },
		ImagePanZoom: { screen: ImagePanZoom },
		CacheImage: { screen: CacheImage },
		FBShare: { screen: FBShare },
	},
	{
		initialRouteName: 'FBShare',
	}
);

export default createAppContainer(HomeStack);
