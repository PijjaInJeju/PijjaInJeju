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
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Login from './Screen/Login.js';
import Main from './Screen/Main.js';
import InviteMember from './Screen/InviteMember.js';
import GroupSetting from './Screen/GroupSetting.js';
import CreateScheduleMap from './Screen/CreateScheduleMap.js';
import RecommendSchedule from './Screen/RecommendSchedule.js';
import SetTravelPlan from './Screen/SetTravelPlan.js';
import Gallery from './Screen/Gallery.js';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Logo = require('./Image/k_Logo.png');

const App = () => {
  return (
    <NavigationContainer>
      {/* // 최근 프로젝트 */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}
        // //   headerLeft: ({ onPress }) => (
        // //     <TouchableOpacity onPress={onPress}>
        // //       <Image style={styles.logo} source={Logo} />
        // //     </TouchableOpacity>
        // //   ),
        // //   headerTitle: () => (
        // //     <View
        // //       style={{
        // //         flex: 1,
        // //       }}
        // //     >
        // //       <Text
        // //         style={{
        // //           color: 'black',
        // //           textAlign: 'center',
        // //         }}
        // //       >
        // //         제목입니다.
        // //       </Text>
        // //     </View>
        // //   ),
        //   headerRight: undefined,
        // }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="MakeGroup" component={MakeGroup} /> */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="InviteMember" component={InviteMember} />
        <Stack.Screen name="GroupSetting" component={GroupSetting} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="CreateScheduleMap" component={CreateScheduleMap} />
        <Stack.Screen name="RecommendSchedule" component={RecommendSchedule} />
        <Stack.Screen name="SetTravelPlan" component={SetTravelPlan} />
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
