import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {dark, mapping} from '@eva-design/eva';
import {default as customTheme} from './config/custom-theme';
import {default as customMapping} from './config/custom-mapping';
import {AppNavigator} from './navigation/AppNavigator';

export default function() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={{...dark, ...customTheme}}
        customMapping={customMapping}>
        <AppNavigator />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
