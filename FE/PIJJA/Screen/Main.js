import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React,{ useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


import MakeGroup from './MakeGroup.js';
import TripPlanCheck from './TripPlanCheck.js';
// import TripPlanMMakake from './TripPlanMake.js';
import Gallery from './Gallery.js';
import AppSetting from './AppSetting.js';

import Icon from 'react-native-vector-icons/Entypo'; 
import Header from '../component/Header.js';


const Drawer = createDrawerNavigator();
//const appDrawer = createNativeStackNavigator();

const Logo = require('../Image/k_Logo.png');



const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={"제목입니다."}/> 
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          source={require('../Image/k_Logo.png')}
        />
      </View>
      <View style={styles.travelWrapper}>
        <View style={styles.travelGroup}>
          <View style={styles.travelSpot}>
            <Text>가이드1</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_guideimg1.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>가이드2</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_guideimg2.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>가이드3</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_guideimg3.jpg')}
            />
          </View>
        </View>
        <View style={styles.travelGroup}>
          <View style={styles.travelSpot}>
            <Text>맛집1</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_storeimg1.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>맛집2</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_storeimg2.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>맛집3</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_storeimg3.jpg')}
            />
          </View>
        </View>
        <View style={styles.travelGroup}>
          <View style={styles.travelSpot}>
            <Text>산책1</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_hikingimg1.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>산책2</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_hikingimg2.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>산책3</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/k_hikingimg3.jpg')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Main = () => {
  //let b_res = 0;
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#eae2b7',
        },
        drawerLabelStyle: {
          fontsize: 6,
          color: 'black',
          backgroundcolor: '#fcbf49',
        },
        drawerItemStyle: {
          borderColor: '#f77f00',
          borderWidth: 3,
          // backgroundcolor: '#aaaaaa',
        },
        drawerInactiveBackgroundColor: '#fcbf49',
        
        headerRight: () => (
          <Icon 
            name='menu' 
            size={30} 
            color='#000000'
          />
        ),
        // drawerLabelStyle: {
        //   color:
        // },
        headerShown: false,
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen name="PIJJA" component={MainScreen} />
      <Drawer.Screen
        name="여행계획 만들기"
        component={MakeGroup}
        screenOptions={{
          animation: 'fade',
          headerTitle: () => <View></View>,
          headerRight: undefined,
        }}
      />
      <Drawer.Screen name="여행계획 보기" component={TripPlanCheck} />
      <Drawer.Screen name="갤러리" component={Gallery} />
      <Drawer.Screen name="설정" component={AppSetting} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logoWrapper: {
    position: 'absolute',
    top: 40,
    left: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  travelWrapper: {
    position: 'absolute',
    top: 220,
    left: 26,
    marginTop: 12,
  },
  logoImage: {
    width: 220,
    height: 180,
    resizeMode: 'stretch',
  },
  travelGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 16,
    paddingVertical: 15,
    borderWidth: 3.2,
    borderColor: '#f77f00',
    backgroundColor: '#fcbf49',
    borderRadius: 8,
  },
  travelSpot: {
    paddingHorizontal: 8,
  },
  travelSpotImg: {
    width: 100,
    height: 110,
    resizeMode: 'stretch',
    borderRadius: 3,
  },
});

export default Main;
