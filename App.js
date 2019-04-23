import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './Pages/Home';
import FlatListLab from './Pages/FlatListLab';
import ImagePickerLab from './Pages/ImagePickerLab';
import ImagePanZoom from './Pages/ImagePanZoom';
import CacheImage from './Pages/CacheImage';

const HomeStack = createStackNavigator(
	{
		Home: { screen: Home },
		FlatListLab: { screen: FlatListLab },
		ImagePickerLab: { screen: ImagePickerLab },
		ImagePanZoom: { screen: ImagePanZoom },
		CacheImage: { screen: CacheImage },
	},
	{
		initialRouteName: 'Home',
	}
);

export default createAppContainer(HomeStack);
