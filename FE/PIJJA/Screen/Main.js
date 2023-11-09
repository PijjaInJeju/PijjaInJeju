import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React, { useState, useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import One from './Carousel/One';
import Two from './Carousel/Two';

import MakeGroup from './MakeGroup.js';
import CheckTripPlan from './CheckTripPlan.js';

import AsyncStorage from '@react-native-async-storage/async-storage';
const pijjaTab = createBottomTabNavigator();

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const getTabBarIcon = ({ focused, color, size, iconName, toIconName }) => {
  const tabIcon = focused ? iconName : toIconName;
  return (
    <MaterialCommunityIcons
      name={tabIcon}
      color="fcbf49"
      size={24}
    ></MaterialCommunityIcons>
  );
};

const MainScreen = ({ navigation }) => {
  const [groupList, setGroupList] = useState([
    {
      id: 1,
      schedule: [
        {
          id: 1,
          title: '1번',
        },
        {
          id: 2,
          title: '2번',
        },
      ],
    },
    {
      id: 2,
    },
  ]);
  // let route.params;
  //console.log("Main Profile  :  ", route.params.profile);

  const [userData, setUserData] = useState(0);

  const load = async () => {
    try {
      const kakaoData = await AsyncStorage.getItem('user');
      //let user = JSON.parse(json);

      //console.log('get data1: ', kakaoData);
      //console.log('to data: ', user);
      if (kakaoData === null) {
        console.log('there is noting');
        //navigation.push('Login');
      } else {
        setUserData(kakaoData);
        //return kakaoData;
      }
    } catch (e) {
      console.log('Profile 불러오기 실패. : ', e);
    }
  };

  load();
  console.log('get k data\n');
  console.log(userData);

  const data = [
    {
      screen: One,
      data: {
        profile: userData,
        groupList: groupList,
        setGroupList: setGroupList,
      },
    },
    {
      screen: Two,
      data: {
        //...profile,
        nickName: 'asd',
      },
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <item.screen data={item.data} />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Carousel
        vertical={true}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        sliderHeight={screenHeight}
        itemHeight={screenHeight}
      />
    </SafeAreaView>
  );
};

const Main = () => {
  return (
    <pijjaTab.Navigator
      initialRouteName="홈"
      screenOptions={{
        headerShown: false,
      }}
    >
      <pijjaTab.Screen
        name="홈"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'home-circle' : 'home-circle-outline'}
              color={'#fcbf49'}
              size={30}
            ></MaterialCommunityIcons>
          ),
        }}
      />
      <pijjaTab.Screen
        name="일정 생성"
        component={MakeGroup}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? 'paper-plane' : 'paper-plane-o'}
              color={'#fcbf49'}
              size={30}
            ></FontAwesome>
          ),
        }}
      />
      <pijjaTab.Screen
        name="일정 보기"
        component={CheckTripPlan}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo
              name={focused ? 'text-document' : 'text-document-inverted'}
              color={'#fcbf49'}
              size={30}
            ></Entypo>
          ),
        }}
      />
    </pijjaTab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default Main;
