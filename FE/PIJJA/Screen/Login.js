import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';

const kakaoLogin = ({ navigation }) => {
  KakaoLogin.login()
    .then(result => {
      console.log('로그인 성공', JSON.stringify(result));
      navigation.navigate('Main');
    })
    .catch(error => {
      if (error.code === 'E_CANCELLED_OPERATION') {
        console.log('로그인 취소', error.message);
      } else {
        console.log(`로그인 실패(code:${error.code})`, error.message);
      }
    });
  // KakaoLogin.getProfile().then(result => {
  //   console.log('data', JSON.stringify(result));
  // });
};

const Login = ({ navigation }) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const pixelRatio = PixelRatio.get();

  // console.log('Pixel Ratio: ', pixelRatio);
  // console.log('Screen Width: ', screenWidth);
  // console.log('Screen Height: ', screenHeight);

  const login = require('../Image/s_kakao_logo.png');
  const logo = require('../Image/k_Logo.png');

  return (
    <View style={{ height: '100%' }}>
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
            width: screenWidth * 1.2,
            height: screenWidth * 0.95,
            borderRadius: screenWidth,
            backgroundColor: 'rgb(254, 196, 38)',
            top: screenHeight * 0.1,
          },
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          // kakaoLogin({ navigation });
          navigation.navigate('Main');
        }}
        style={[
          styles.login,
          {
            top: screenHeight * 0.8, // 아래에서 20% 위치에 고정
          },
        ]}
      >
        <Image source={login} />
      </TouchableOpacity>

      <Image
        source={logo}
        style={[
          styles.img,
          {
            top: screenHeight * 0.08,
          },
        ]}
      />
      {/* <Image
        source={logo}
        style={[
          styles.img,
          {
            top: screenHeight * 0.3, // 아래에서 20% 위치에 고정
          },
        ]}
      /> */}
    </View>
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

export default Login;
