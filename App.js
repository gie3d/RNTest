import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './Pages/Home';
import FlatListLab from './Pages/FlatListLab';
import ImagePickerLab from './Pages/ImagePickerLab';

const HomeStack = createStackNavigator(
	{
		Home: { screen: Home },
		FlatListLab: { screen: FlatListLab },
		ImagePickerLab: { screen: ImagePickerLab },
	},
	{
		initialRouteName: 'ImagePickerLab',
	}
);

export default createAppContainer(HomeStack);
