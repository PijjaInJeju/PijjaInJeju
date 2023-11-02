import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
} from 'react-native';

screenWidth = Dimensions.get('window').width;
screenHeight = Dimensions.get('window').height;
// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const SetTravelPlan = ({ navigation }) => {
  const logo = require('../Image/k_Logo.png');

  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.outerRectangle} />
      <View
        style={[
          styles.outerCircle,
          {
            width: screenWidth * 1.2,
            height: screenWidth * 0.95,
            borderRadius: screenWidth,
            backgroundColor: 'rgb(254, 196, 38)',
            top: screenHeight * 0.1,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerRectangle: {
    position: 'absolute',
    top: '0%',
    width: screenWidth,
    height: screenHeight * 0.35,
    backgroundColor: 'rgb(254, 196, 38)',
  },
  outerCircle: {
    position: 'absolute',
    top: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SetTravelPlan;
