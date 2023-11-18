import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React, { useState, useEffect, useRef } from 'react';
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

import Carousel, { Pagination } from 'react-native-snap-carousel';
import One from './Carousel/One';
import Two from './Carousel/Two';

import GroupSetting from './GroupSetting.js';
import CheckTripPlan from './CheckTripPlan.js';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Rest from '../lib/Rest';

const pijjaTab = createBottomTabNavigator();
// options:{
//   style ={
//     backgroundColor:"#red"
//   }
// }

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
      schedule: {
        title: '1번',
      },
    },
    {
      id: 2,
      schedule: {
        title: '2번',
      },
    },
  ]);
  // let route.params;
  //console.log("Main Profile  :  ", route.params.profile);

  const [nowTravelData, setNowTravelData] = useState([]);
  const [travelReco, setTravelReco] = useState([]);
  const [userData, setUserData] = useState(new Object());
  //let groupData = {};
  //let recoData = {};

  const load = async () => {
    try {
      const kakaoData = await AsyncStorage.getItem('user');
      if (kakaoData === null) {
        console.log('there is noting');
        //navigation.push('Login');
      } else {
        setUserData(JSON.parse(kakaoData));
        //return kakaoData;
      }
    } catch (e) {
      console.log('Profile 불러오기 실패. : ', e);
    }
    try {
      const getTravelData = async () => {
        const groupData = await Rest(
          '/api/companions/list',
          'GET',
          undefined,
          res => {
            return res.data;
            //setGroupData(res.data).then(console.log('all 그룹 data:', groupData));
            //console.log('all 그룹 data:', groupData);
          },
          err => console.error(err),
        );
        let nowGroupData = [];
        let latestGroupData = {};
        //setNowTravelData(groupData);
        console.log('all 그룹 data:', groupData);

        // 오늘 부터인 그룹중 가장 최근인 그룹
        let nowDate = new Date();
        let nowDay = new Date(
          nowDate.getFullYear(),
          nowDate.getMonth(),
          nowDate.getDate(),
        ).getTime();
        console.log(nowDay);

        let groupDay = new Date();
        // groupDay = new Date(groupData[0].startDay);
        // console.log(groupData[0].startDay);
        // console.log(groupData.length);

        for (ti = groupData.length - 1; ti > -1; ti--) {
          // groupDay = new Date(groupData[ti].startDay).getTime();
          groupDay = new Date(groupData[ti].startDay);
          // console.log(groupDay);

          if (groupDay >= nowDay) {
            // console.log(new Date(groupData[ti].startDay));
            nowGroupData = [groupData[ti]];
            break;
          }
        }

        setNowTravelData(nowGroupData);
        if (groupData.length > 0) {
          latestGroupData = groupData[0];
        }

        let tag = latestGroupData.tendencies[0];
        let mate = latestGroupData.mate;

        //console.log('all 그룹 data:', groupData);
        // console.log('오늘 여행: ', nowGroupData[0].startDay);
        // console.log('최근 여행: ', latestGroupData.startDay);
        const getRecoData = async () => {
          const recoData = await Rest(
            `/api/recommends/${tag}/${mate}`,
            'GET',
            undefined,
            res => {
              // console.log('추천데이터:', res.length);
              //setTravelReco(res);
              return res.splice(0, 5);
              //setGroupData(res.data).then(console.log('all 그룹 data:', groupData));
              //console.log('all 그룹 data:', groupData);
            },
            err => console.error(err),
          );
          //console.log('추천2: ', recoData.length);
          setTravelReco(recoData);
        };
        getRecoData();
      };
      getTravelData();
      //console.log(travelReco.length());
      // try {
      //   Rest(
      //     '/api/companions/list',
      //     'GET',
      //     undefined,
      //     res => {
      //       setGroupData(res.data);
      //       console.log('all 그룹 data:', groupData);
      //     },
      //     err => console.error(err),
      //   );
      // } catch (e) {
      //   console.log('group data get error'), e;
      // }
    } catch (e) {
      console.log('group data get error'), e;
    }
  };

  // console.log('추천데이터2:', travelReco);
  // console.log('다가올 여행:', nowTravelData);

  useEffect(() => {
    load();
    //loadPlan();
  }, []);

  const nowPlan = [];
  // for (let i=groupData.size();  )
  const placeStart = 0;
  const placeEnd = 0;

  const data = [
    {
      screen: One,
      data: {
        profile: userData,
        groupList: groupList,
        //setGroupList: setGroupList,
      },
    },
    {
      screen: Two,
      data: {
        profile: userData,
        nowTravelData: nowTravelData,
        travelReco: travelReco,
        //setGroupList: setGroupList,
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

  const [activeSlide, setActiveSlide] = useState();
  const activeRef = useRef(1);
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
        onSnapToItem={index => {
          setActiveSlide(index);
          console.log(index);
        }}
        ref={activeRef}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          height: screenHeight,
          position: 'absolute',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginVertical: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        vertical={true}
        carouselRef={activeRef}
        tappableDots={true}
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
        // color: 'red',
        // tabBarStyle: {
        //   position: 'absolute',
        //   backgroundColor: 'transparent',
        //   // top: 610,
        //   width: '100%',
        //   //start: 0,
        //   //height: 50,
        // },
        tabBarActiveTintColor: '#fcbf49',
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
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            // top: 610,
            width: '100%',
            //start: 0,
            //height: 50,
            color: 'red',
          },
        }}
      />
      <pijjaTab.Screen
        name="일정 생성"
        component={GroupSetting}
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
