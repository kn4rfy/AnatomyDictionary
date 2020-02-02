import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Drawer from './Drawer';
import TabBar from './TabBar';
import HomeScreen from '../components/Home';
import DetailsScreen from '../components/Details';
import SettingsScreen from '../components/Settings';
import AboutScreen from '../components/About';

const TabNavigator = createBottomTabNavigator(
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
