/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './components/Button.js';
import Login from './Screen/Login.js';
import Main from './Screen/Main.js';
import MakeGroup from './Screen/MakeGroup.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = ({ navigation }) => {
  const [b_res, setBtnRes] = useState(0);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRoutName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MakeGroup" component={MakeGroup} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator> */}
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="MakeGroup" component={MakeGroup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
