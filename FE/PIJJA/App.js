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
import Login from './Screen/Login.js';
import MakeGroup  from './Screen/MakeGroup.js'
import Pre from './component/pre.js';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const Logo = require('./Image/Logo.png');

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MakeGroup"
        screenOptions={
            {
              animation:"fade",
              headerLeft: ({onPress}) => (
                <TouchableOpacity onPress={onPress}>
                  <Image
                    style={styles.logo} 
                    source={Logo}
                  /> 
                </TouchableOpacity>
              ),
              headerTitle: () => (
                <View>
                </View>
              ),
              headerRight: undefined,
              
            }
        }
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen 
          name='MakeGroup' 
          component={MakeGroup}
          // 최근 프로젝트
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
  }
});

export default App;
