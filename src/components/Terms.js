import React, {useRef, useState} from 'react';
import {
  Divider,
  Icon, Input,
  Layout, List, ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import {terms} from '../mock/terms';

export default function({navigation}) {
  let inputRef = useRef(null);
  const [state, setState] = useState(terms);

  function onSearch(search) {
    const data = _.filter(terms, data => {
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
        title="Terms"
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
          placeholder={'Search terms'}
          icon={style => <Icon {...style} name={'search'} />}
          onIconPress={() => inputRef.focus()}
          onChangeText={onSearch}
        />
        <List data={state} renderItem={renderItem} />
      </Layout>
    </SafeAreaView>
  );
}
