import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Drawer from './Drawer';
import TabBar from './TabBar';
import RootsScreen from '../components/Roots';
import TermsScreen from '../components/Terms';
import TermsMethodologyScreen from '../components/TermsMethodology';
import SettingsScreen from '../components/Settings';
import AboutScreen from '../components/About';

const TabNavigator = createBottomTabNavigator(
  {
    Roots: RootsScreen,
    Terms: TermsScreen,
    TermsMethodology: TermsMethodologyScreen,
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
