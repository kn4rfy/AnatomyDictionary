import React, {useRef, useState} from 'react';
import {
  Divider,
  Icon,
  Input,
  Layout,
  List,
  ListItem,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import _ from 'lodash';
import {roots} from '../mock/roots';

export default function({navigation}) {
  let inputRef = useRef(null);
  const [state, setState] = useState(roots);

  function onSearch(search) {
    const data = _.filter(roots, data => {
      return _.includes(data.description, search);
    });

    setState(data);
  }

  function renderItem({item}) {
    return <ListItem title={`${item.description}`} />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Roots"
        alignment="center"
        rightControls={
          <TopNavigationAction
            icon={style => <Icon {...style} name="menu-outline" />}
            onPress={() => navigation.toggleDrawer()}
          />
        }
      />
      <Divider />
      <Layout style={{flex: 1}}>
        <Input
          ref={ref => {
            inputRef = ref;
          }}
          placeholder={'Search roots'}
          icon={style => <Icon {...style} name={'search'} />}
          onIconPress={() => inputRef.focus()}
          onChangeText={onSearch}
        />
        <List data={state} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
}
