import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Drawer from './Drawer';
import TabBar from './TabBar';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import SettingsScreen from './Settings';
import AboutScreen from './About';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    tabBarComponent: TabBar,
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Main: TabNavigator,
    Settings: SettingsScreen,
    About: AboutScreen,
  },
  {
    contentComponent: Drawer,
  },
);

export const AppNavigator = createAppContainer(DrawerNavigator);
