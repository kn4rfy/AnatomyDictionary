import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';

export default function({navigation}) {
  function onSelect(index) {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  }

  return (
    <SafeAreaView>
      <Divider />
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab title="ROOTS" />
        <BottomNavigationTab title="TERMS" />
      </BottomNavigation>
    </SafeAreaView>
  );
}
