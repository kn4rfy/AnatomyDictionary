import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Drawer from './Drawer';
import TabBar from './TabBar';
import RootsScreen from '../screens/roots/Roots';
import RootDetailsScreen from '../screens/roots/RootDetails';
import TermsScreen from '../screens/Terms';
import SettingsScreen from '../screens/Settings';
import AboutScreen from '../screens/About';
import HomeScreen from '../screens/Home';
import BooksScreen from '../screens/Books';

const rootStackNavigator = createStackNavigator(
  {
    Roots: RootsScreen,
    RootDetails: RootDetailsScreen,
  },
  {
    initialRouteName: 'Roots',
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    rootStackNavigator: rootStackNavigator,
    Terms: TermsScreen,
  },
  {
    tabBarComponent: TabBar,
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Main: TabNavigator,
    Books: BooksScreen,
    Settings: SettingsScreen,
    About: AboutScreen,
  },
  {
    contentComponent: Drawer,
  },
);

export const AppNavigator = createAppContainer(DrawerNavigator);
