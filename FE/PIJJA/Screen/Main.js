import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import Button from '../components/Button.js';
import MakeGroup from './MakeGroup.js';
import TripPlanCheck from './TripPlanCheck.js';
import TripPlanMake from './TripPlanMake.js';
import Gallery from './Gallery.js';
import AppSetting from './AppSetting.js';

const Drawer = createDrawerNavigator();
//const appDrawer = createNativeStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logoImage} source={require('../Image/Logo.png')} />
      </View>
      <View style={styles.travelWrapper}>
        <View style={styles.travelGroup}>
          <View style={styles.travelSpot}>
            <Text>가이드1</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/guideimg1.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>가이드2</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/guideimg2.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>가이드3</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/guideimg3.jpg')}
            />
          </View>
        </View>
        <View style={styles.travelGroup}>
          <View style={styles.travelSpot}>
            <Text>맛집1</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/storeimg1.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>맛집2</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/storeimg2.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>맛집3</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/storeimg3.jpg')}
            />
          </View>
        </View>
        <View style={styles.travelGroup}>
          <View style={styles.travelSpot}>
            <Text>산책1</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/hikingimg1.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>산책2</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/hikingimg2.jpg')}
            />
          </View>
          <View style={styles.travelSpot}>
            <Text>산책3</Text>
            <Image
              style={styles.travelSpotImg}
              source={require('../Image/hikingimg3.jpg')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Main = ({ navigation }) => {
  //let b_res = 0;
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="PIJJA" component={MainScreen} />
      <Drawer.Screen name="여행계획 만들기" component={TripPlanMake} />
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
