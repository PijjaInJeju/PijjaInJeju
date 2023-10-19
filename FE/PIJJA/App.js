/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView,View, Text, StyleSheet, Image,TouchableOpacity, PixelRatio, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

//@Flow
const App = () => {
  

  console.log('Pixel Ratio: ', pixelRatio);
  console.log('Screen Width: ', screenWidth);
  console.log('Screen Height: ', screenHeight);

  const login = require('./img/kakao_login_mobile.png');
  const logo = require('./img/logo_mobile.png');

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
        <View style={{ flex: 1 }}>
        <View
        style={{
          width: screenWidth,
          height: screenHeight * 0.35,
          backgroundColor: 'rgb(254, 196, 38)',
        }}
      />
      <View
        style={[
          styles.outerCircle,
          {
            width: screenWidth*1.2,
            height: screenWidth*0.95,
            borderRadius: screenWidth,
            backgroundColor: 'rgb(254, 196, 38)',
            top: screenHeight * 0.1,
          },
        ]}
      />
        </View>
        <TouchableOpacity 
          onPress={() => {
            alert('You tapped the button!');
          }} 
          style={[
            styles.login,
            {
              flex:1,
              top: screenHeight * 0.8, // 아래에서 20% 위치에 고정
            },
          ]}>
          <Image source={login}/>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            screenHeight,
            backgroundColor: 'rgb(254, 196, 38)',
            transform: [{ translateY: - screenHeight / 2 }],
            borderRadius: screenWidth,
          }}
        ></View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    position: 'absolute',
    top: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
