/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './components/Button.js';
import Login from './Screen/Login.js';
import Main from './Screen/Main.js';
import MakeGroup from './Screen/MakeGroup.js';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  const [b_res, setBtnRes] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MakeGroup" component={MakeGroup} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
