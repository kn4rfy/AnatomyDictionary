import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Drawer, DrawerHeaderFooter, Icon} from '@ui-kitten/components';

const drawerData = [{title: 'Home'}, {title: 'Settings'}, {title: 'About'}];

export default function({navigation}) {
  function onSelect(index) {
    const {[index]: selectedTabRoute} = navigation.state.routes;
    navigation.navigate(selectedTabRoute.routeName);
  }

  function Header() {
    return (
      <DrawerHeaderFooter
        title="John Doe"
        description="React Native Developer"
        icon={style => <Icon {...style} name="person" />}
      />
    );
  }

  function Footer() {
    return <DrawerHeaderFooter description="Drawer Footer" />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer
        data={drawerData}
        header={Header}
        footer={Footer}
        onSelect={onSelect}
      />
    </SafeAreaView>
  );
}
