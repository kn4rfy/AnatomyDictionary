import React, {useEffect, useRef, useState} from 'react';
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
import {terms} from '../../mock/terms';

export default function({navigation}) {
  let inputRef = useRef(null);
  const [state, setState] = useState(terms);
  const search = navigation?.state?.params?.search;
  useEffect(init, []);

  function init() {
    if (search) {
      setTimeout(() => inputRef.focus(), 200);
    }
  }

  function onSearch(query) {
    setState(
      terms.filter(item =>
        item.description.toLocaleLowerCase().includes(query.toLowerCase()),
      ),
    );
  }

  function renderItem({item}) {
    return (
      <ListItem
        title={`${item.description}`}
        onPress={() => navigation.navigate('TermDetails', {term: item})}
      />
    );
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
