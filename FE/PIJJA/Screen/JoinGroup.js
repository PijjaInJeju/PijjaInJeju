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
  TextInput,
  Image,
} from 'react-native';

screenWidth = Dimensions.get('window').width;
screenHeight = Dimensions.get('window').height;
// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const JoinGroup = ({ navigation }) => {
  const planLogo = require('../Image/k_setPlanLogo.png');

  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.outerRectangle} />
      <View style={styles.outerCircle} />
      <Image
        style={styles.setPlanImg}
        source={require('../Image/k_Logo.png')}
      />
      <Text
        style={{
          top: screenHeight * 0.6,
        }}
      >
        그룹 코드 입력
      </Text>
      <TextInput
        style={[
          styles.joinGroupStyle,
          {
            top: screenHeight * 0.58,
            backgroundColor: '#ffffff',
          },
        ]}
      ></TextInput>
      <TouchableOpacity
        style={[
          styles.joinGroupStyle,
          {
            top: screenHeight * 0.7,
            backgroundColor: '#fcbf49',
          },
        ]}
      >
        <Text style={styles.travelPlanText}>다음</Text>
      </TouchableOpacity>
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
    top: screenHeight * 0,
    width: screenWidth,
    height: screenHeight * 0.4,
    backgroundColor: 'rgb(254, 196, 38)',
  },
  outerCircle: {
    position: 'absolute',
    top: screenHeight * 0.03,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 1.2,
    height: screenWidth * 0.84,
    borderRadius: screenWidth,
    backgroundColor: 'rgb(254, 196, 38)',
  },
  planContentText: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  joinGroupStyle: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 74,
    borderRadius: 16,
    marginTop: 0,
  },
  travelPlanText: {
    fontSize: 24,
    color: '#ffffff',
  },
  setPlanImg: {
    position: 'absolute',
    top: screenHeight * 0.07,
    width: screenWidth * 0.46,
    height: screenHeight * 0.3,
    resizeMode: 'stretch',
    borderRadius: 3,
  },
});

export default JoinGroup;
