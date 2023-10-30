/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Screen/Login.js';
import MakeGroup from './Screen/MakeGroup.js';
import Main from './Screen/Main.js';
import Pre from './component/Pre.js';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* // 최근 프로젝트 */}
      <Stack.Navigator initialRoutName="Login">
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="MakeGroup" component={MakeGroup} /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
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
  logo: {
    height: 50,
    width: 50,
  },
});

export default App;
