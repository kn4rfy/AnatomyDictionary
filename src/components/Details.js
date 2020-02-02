import React from 'react';
import {Divider, Layout, Text, TopNavigation} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';

export default function() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title="Details" alignment="center" />
      <Divider />
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h1">DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
}
