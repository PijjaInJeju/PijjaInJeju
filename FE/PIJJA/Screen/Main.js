import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../components/Button.js';
import MakeGroup from './MakeGroup.js';

import { StyleSheet, Text, View } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Main = ({ navigation }) => {
  //let b_res = 0;
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
      <Button
        title="go_to_Main"
        onPress={() => navigation.navigate('MakeGroup')}
        buttonStyle={{ width: 100, height: 100 }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
