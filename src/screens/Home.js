import React, {useRef, useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Divider,
  Icon,
  Input,
  Layout,
  ListItem,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import Logo from '../assets/logo.svg';
import {roots} from '../mock/roots';

export default function({navigation}) {
  let inputRef = useRef(null);
  const [state, setState] = useState(roots);

  function onSearch(query) {
    setState(
      roots.filter(item =>
        item.description.toLocaleLowerCase().includes(query.toLowerCase()),
      ),
    );
  }

  function renderItem({item}) {
    return (
      <ListItem
        title={`${item.description}`}
        onPress={() => navigation.navigate('RootDetails', {root: item})}
      />
    );
  }

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
          ref={ref => {
            inputRef = ref;
          }}
          placeholder={'Search roots'}
          icon={style => <Icon {...style} name={'search'} />}
          onIconPress={() => inputRef.focus()}
          onChangeText={onSearch}
        />
      </Layout>
    </SafeAreaView>
  );
}
