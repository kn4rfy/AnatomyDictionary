import React, {useEffect, useState} from 'react';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import _ from 'lodash';
import {terms} from '../../mock/terms';
import {morphologies} from '../../mock/morphologies';
import {formsUsed} from '../../mock/formsUsed';
import {ScrollView} from 'react-navigation';

export default function({navigation}) {
  const [state, setState] = useState({morphologies: [], form: {}});
  const {root} = navigation?.state?.params;
  useEffect(getTerms, []);

  function getTerms() {
    const filteredTerms = terms.filter(term =>
      term?.roots?.every(rootItem => rootItem.id === root?.id),
    );

    let morphologyData = [];

    filteredTerms.forEach(term =>
      term?.morphologies?.forEach(morphologyItem => {
        morphologyData.push({
          morphologyId: morphologyItem.id,
          term: term,
        });
      }),
    );

    setState({
      morphologies: _.map(
        _.groupBy(morphologyData, o => o.morphologyId),
        (i, k) => {
          return {
            ...morphologies[morphologies.map(e => e.id.toString()).indexOf(k)],
            terms: _.map(i, m => m.term),
          };
        },
      ),
      form: formsUsed[formsUsed.map(e => e.id).indexOf(root.id)],
    });
  }

  function renderTerms(item) {
    return (
      <Layout key={item.id} style={{paddingBottom: 8}}>
        <Text>{item.description}</Text>
      </Layout>
    );
  }

  function renderItem(item) {
    return (
      <Layout key={item.id} style={{paddingTop: 16}}>
        {item?.terms?.map(renderTerms)}
        <Layout style={{marginLeft: 32, paddingTop: 8, paddingBottom: 16}}>
          <Text style={{textDecorationLine: 'underline'}}>
            Term Morphology:
          </Text>
          <Layout style={{paddingTop: 8}}>
            <Text>{item.description}</Text>
          </Layout>
        </Layout>
        <Divider />
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
      <ScrollView>
        <Layout style={{paddingHorizontal: 16}}>
          {state?.morphologies?.map(renderItem)}
          <Layout style={{paddingVertical: 16}}>
            <Text style={{textDecorationLine: 'underline'}}>Forms Used:</Text>
            <Layout style={{paddingTop: 8}}>
              <Text>{state?.form?.description}</Text>
            </Layout>
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}
