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
import CreateScheduleMap from './Screen/CreateScheduleMap.js';
import RecommendSchedule from './Screen/RecommendSchedule.js';


import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { Console } from 'console';

const Stack = createNativeStackNavigator();


const Logo = require('./Image/Logo.png');

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="CreateScheduleMap"
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
                <View style={{
                  flex: 1,
                }}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                    }}
                  >
                    제목입니다.
                  </Text>
                </View>
              ),
              headerRight: undefined,
              
            }
        }
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='MakeGroup' component={MakeGroup}/>
        <Stack.Screen name='CreateScheduleMap' component={CreateScheduleMap}/>
        <Stack.Screen name='RecommendSchedule' component={RecommendSchedule} />
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
