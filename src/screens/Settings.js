import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

export default function({navigation}) {
  function navigateBack() {
    navigation.goBack();
  }

  function BackAction() {
    return (
      <TopNavigationAction
        icon={style => <Icon {...style} name="arrow-ios-back-outline" />}
        onPress={navigateBack}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Settings"
        alignment="center"
        leftControl={BackAction()}
      />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">SETTINGS</Text>
      </Layout>
    </SafeAreaView>
  );
}
