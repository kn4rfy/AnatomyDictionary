import React, {useEffect, useState} from 'react';
import {
  Divider,
  Icon,
  Layout,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import _ from 'lodash';
import {terms} from '../../mock/terms';
import {morphologies} from '../../mock/morphologies';
import {formsUsed} from '../../mock/formsUsed';

export default function({navigation}) {
  const [state, setState] = useState({terms: [], morphologies: [], forms: []});
  const {root} = navigation?.state?.params;
  const formUsedData = formsUsed[formsUsed.map(e => e.id).indexOf(root.id)];
  useEffect(getTerms, []);

  function getTerms() {
    const filteredTerms = terms.filter(term =>
      term?.roots?.every(rootItem => rootItem.id === root?.id),
    );

    let data = [];

    filteredTerms.forEach(term =>
      term?.morphologies?.forEach(morphologyItem => {
        data.push({
          morphologyId: morphologyItem.id,
          term: term,
        });
      }),
    );

    const test = _.map(
      _.groupBy(data, o => o.morphologyId),
      (i, k) => {
        return {
          ...morphologies[morphologies.map(e => e.id.toString()).indexOf(k)],
          terms: _.map(i, m => m.term),
        };
      },
    );

    setState(test);
  }

  function renderTerms({item}) {
    return (
      <Layout style={{paddingVertical: 4}}>
        <Text>{item.description}</Text>
      </Layout>
    );
  }

  function renderItem({item}) {
    return (
      <Layout style={{padding: 16}}>
        <List data={item.terms} renderItem={renderTerms} />
        <Layout style={{marginLeft: 32}}>
          <Text style={{textDecorationLine: 'underline'}}>
            Term Morphology:
          </Text>
          <Text>{item.description}</Text>
        </Layout>
      </Layout>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title={root?.description}
        alignment="center"
        leftControl={
          <TopNavigationAction
            icon={style => <Icon {...style} name="arrow-ios-back-outline" />}
            onPress={() => navigation.goBack()}
          />
        }
        rightControls={
          <TopNavigationAction
            icon={style => <Icon {...style} name="menu-outline" />}
            onPress={() => navigation.toggleDrawer()}
          />
        }
      />
      <Divider />
      <Layout style={{flex: 4}}>
        <List data={state} renderItem={renderItem} />
        <Layout style={{padding: 16}}>
          <Text style={{textDecorationLine: 'underline'}}>Forms Used:</Text>
          <Text>{formUsedData?.description}</Text>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
}
