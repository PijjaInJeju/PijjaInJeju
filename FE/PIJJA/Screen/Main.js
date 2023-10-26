import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Button from '../component/Button.js';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import MakeGroup from './MakeGroup.js';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//const appDrawer = createDrawerNavigator();
//const appDrawer = createNativeStackNavigator();

// const drawerMain = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//     </View>
//   );
// };

const Main = ({ navigation }) => {
  //let b_res = 0;
  return (
    <View style={styles.container}>
      {/* <appDrawer.Navigator initialRouteName="Main">
        <appDrawer.Screen name="Main" component={Main} />
        <appDrawer.Screen name="MakeGroup" component={MakeGroup} />
      </appDrawer.Navigator> */}

      <Button
        onPress={() => navigation.navigate('MakeGroup')}
        title="goToMakeGroup"
      />

      {/* <View style={styles.logoWrapper}>
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
      </View> */}
    </View>
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
