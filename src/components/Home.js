import React from 'react';
import {Button, Layout} from '@ui-kitten/components';

export default function({navigation}) {
  function navigateDetails() {
    navigation.navigate('Details');
  }

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button onPress={navigateDetails}>OPEN DETAILS</Button>
    </Layout>
  );
}
