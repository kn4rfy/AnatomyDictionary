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
import {terms} from '../../mock/terms';
import {morphologies} from '../../mock/morphologies';
import {formsUsed} from '../../mock/formsUsed';
import {ScrollView} from 'react-navigation';

export default function({navigation}) {
  const [state, setState] = useState({
    term: {},
    morphologies: [],
    formsUsed: [],
  });
  const {term} = navigation?.state?.params;
  useEffect(getTerms, []);

  function getTerms() {
    const termData = terms[terms.map(e => e.id).indexOf(term?.id)];

    const morphologiesData = termData?.morphologies?.map(morphologyItem => {
      return morphologies[
        morphologies.map(e => e.id).indexOf(morphologyItem.id)
      ];
    });

    const formUsedData = termData?.roots?.map(rootItem => {
      return formsUsed[formsUsed.map(e => e.id).indexOf(rootItem.id)];
    });

    setState({
      term: termData,
      morphologies: morphologiesData,
      formsUsed: formUsedData,
    });
  }

  function renderItem(item) {
    return (
      <Layout key={item.id} style={{paddingTop: 8}}>
        <Text>{item?.description}</Text>
      </Layout>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title={term?.description}
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
          <Layout style={{paddingTop: 16}}>
            <Text>{state?.term?.description}</Text>
          </Layout>
          <Layout style={{marginLeft: 32, paddingVertical: 16}}>
            <Text style={{textDecorationLine: 'underline'}}>
              Term Morphology:
            </Text>
            {state?.morphologies?.map(renderItem)}
          </Layout>
          <Divider />
          <Layout style={{paddingVertical: 16}}>
            <Text style={{textDecorationLine: 'underline'}}>Forms Used:</Text>
            {state?.formsUsed?.map(renderItem)}
          </Layout>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}
