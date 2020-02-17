import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Drawer, Layout} from '@ui-kitten/components';
import Logo from '../assets/logo.svg';

const drawerData = [{title: 'Home'}, {title: 'Settings'}, {title: 'About'}];

export default function({navigation}) {
  function onSelect(index) {
    const {[index]: selectedTabRoute} = navigation.state.routes;
    navigation.navigate(selectedTabRoute.routeName);
  }

  function Header() {
    return (
      <Layout
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 64,
        }}>
        <Logo />
      </Layout>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer data={drawerData} header={Header} onSelect={onSelect} />
    </SafeAreaView>
  );
}
