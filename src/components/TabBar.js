import React from 'react';
import {Tab, TabBar, TopNavigation} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';

export default function({navigation}) {
  function onSelect(index) {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  }

  return (
    <SafeAreaView>
      <TopNavigation title="Anatomy Dictionary" alignment="center" />
      <TabBar selectedIndex={navigation.state.index} onSelect={onSelect}>
        <Tab title="HOME" />
        <Tab title="DETAILS" />
      </TabBar>
    </SafeAreaView>
  );
}
