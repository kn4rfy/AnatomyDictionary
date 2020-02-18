import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Divider,
  Icon,
  Input,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Logo from '../assets/logo.svg';

export default function({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Anatomy & Physiology Terms"
        alignment="center"
        rightControls={
          <TopNavigationAction
            icon={style => <Icon {...style} name="menu-outline" />}
            onPress={() => navigation.toggleDrawer()}
          />
        }
      />
      <Divider />
      <Layout style={{flex: 1, alignItems: 'center', padding: 32}}>
        <Layout style={{paddingBottom: 64}}>
          <Logo width={256} height={256} />
        </Layout>
        <Input
          placeholder={'Search roots'}
          icon={style => <Icon {...style} name={'search'} />}
          onIconPress={() => navigation.navigate('Roots', {search: true})}
          onFocus={() => navigation.navigate('Roots', {search: true})}
        />
      </Layout>
    </SafeAreaView>
  );
}
