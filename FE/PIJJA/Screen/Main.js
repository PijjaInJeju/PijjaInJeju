import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React,{ useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView,StyleSheet, Text, View, Image, Button, PixelRatio, Dimensions, FlatList } from 'react-native';


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

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const guideData = [
  {
    id : 1,
    title: "가이드1",
    uri: undefined,
    path: '../Image/k_guideimg1.jpg',
  },
  {
    id : 2,
    title: "가이드2",
    uri: undefined,
    path: '../Image/k_guideimg2.jpg',
  },
  {
    id : 3,
    title: "가이드3",
    uri: undefined,
    path: '../Image/k_guideimg3.jpg',
  },
  {
    id : 4,
    title: "가이드4",
    uri: undefined,
    path: '../Image/k_guideimg1.jpg',
  },
];

const foodData = [
  {
    id : 5,
    title: "맛집1",
    uri: undefined,
    path: '../Image/k_storeimg1.jpg',
  },
  {
    id : 6,
    title: "맛집2",
    uri: undefined,
    path: '../Image/k_storeimg2.jpg',
  },
  {
    id : 7,
    title: "맛집3",
    uri: undefined,
    path: '../Image/k_storeimg3.jpg',
  },
  {
    id : 8,
    title: "맛집4",
    uri: undefined,
    path: '../Image/k_storeimg1.jpg',
  },
];

const parkData = [
  {
    id : 9,
    title: "산책1",
    uri: undefined,
    path: '../Image/k_hikingimg1.jpg',
  },
  {
    id : 10,
    title: "산책2",
    uri: undefined,
    path: '../Image/k_hikingimg2.jpg',
  },
  {
    id : 11,
    title: "산책3",
    uri: undefined,
    path: '../Image/k_hikingimg3.jpg',
  },
  {
    id : 12,
    title: "산책4",
    uri: undefined,
    path: '../Image/k_hikingimg1.jpg',
  },
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const title = item.title;
    const uri = item.uri;
    const path = item.path;
    console.log(typeof path);
    return (
      <View style={styles.travelSpot}>
        <Text>{title}</Text>
        {
          uri === undefined ?
          <Image
            style={styles.travelSpotImg}
            source={require('../Image/k_guideimg1.jpg')}
          />
          :
          <Image
            style={styles.travelSpotImg}
            source={uri}
          />
        }
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={"메인화면"}/> 
      <View style={styles.logoWrapper}>
        <Image
          style={styles.logoImage}
          source={require('../Image/k_Logo.png')}
        />
      </View>
      <View style={styles.travelWrapper}>
        <View style={styles.travelGroup}>
          <FlatList
            data={guideData}
            renderItem={renderItem}
            keyExtractor={ item => item.id}
            horizontal={true}
          />
        </View>
        <View style={styles.travelGroup}>
          <FlatList
            data={foodData}
            renderItem={renderItem}
            keyExtractor={ item => item.id}
            horizontal={true}
          />
        </View>
        <View style={styles.travelGroup}>
          <FlatList
            data={parkData}
            renderItem={renderItem}
            keyExtractor={ item => item.id}
            horizontal={true}
          />
        </View>
      </View>
    </SafeAreaView>
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
        headerShown: false
      }}
      initialRouteName="Main"
    >
      <Drawer.Screen name="PIJJA" component={MainScreen} />
      <Drawer.Screen
        name="여행계획 만들기"
        component={MakeGroup}
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
    width: screenWidth,
  },
  logoWrapper: {
    alignSelf: 'center',
  },
  travelWrapper: {
    left: "2%",
    width: "96%",
    height: "72%",
    marginTop: 3,
  },
  logoImage: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.20,
    resizeMode: 'stretch',
  },
  travelGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: screenHeight * 0.01,
    borderWidth: 3.2,
    borderColor: '#f77f00',
    backgroundColor: '#fcbf49',
    borderRadius: 8,
  },
  travelSpot: {
    paddingHorizontal: 8,
  },
  travelSpotImg: {
    width: screenWidth * 0.25,
    height: 110,
    resizeMode: 'stretch',
    borderRadius: 3,
  },
});

export default Main;
