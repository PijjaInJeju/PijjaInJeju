import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Rest from '../lib/Rest';

const SaveProfile = async data => {
  //console.log('저장하는 데이터 : ', data);
  //console.log('profile data: ', data);
  try {
    await AsyncStorage.setItem('user', JSON.stringify(data)); // "Data" 대신 "data"를 사용
  } catch (e) {
    console.error('저장실패', data); // "Data" 대신 "data"를 사용
  }
  //await console.log("저장한 데이터  : " , await AsyncStorage.getItem('user'));
};

const kakaoLogin = async ({ navigation }) => {
  try {
    KakaoLogin.login();
    let token = await KakaoLogin.getAccessToken();
    let profile = await KakaoLogin.getProfile();
    //const addIdprofile = await BackEndLogin(profile);
    console.log('카카오 프로 파일 : ', profile);
    let id = new Number();
    await Rest(
      '/api/members/sign-up',
      'POST',
      {
        nickname: profile.nickname,
        email: profile.email,
        snsType: 'kakao',
        originalId: profile.id,
      },
      response => (id = response.data.id),
      error => {
        console.log('error:', error);
        if (error.data.id !== undefined) id = error.data.id;
      },
    );
    profile = { ...profile, backEndId: id };
    console.log('수정된 프로파일 : ', profile);
    SaveProfile(profile);
    navigation.push('Main', profile);
  } catch (error) {
    console.log('로그인 실패: ', error);
  }
};

screenWidth = Dimensions.get('window').width;
screenHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
  const pixelRatio = PixelRatio.get();

  // console.log('Pixel Ratio: ', pixelRatio);
  // console.log('Screen Width: ', screenWidth);
  // console.log('Screen Height: ', screenHeight);

  const login = require('../Image/s_kakao_logo.png');
  const logo = require('../Image/k_Logo.png');

  let user;
  //초기화
  useEffect(() => {
    async function load() {
      try {
        const json = await AsyncStorage.getItem('todos');
        user = JSON.parse(json);
        if (user !== null) {
          console.log("자동로그인 성공");
          navigation.push('Main', { user });
        }
        else{
          console.log("자동 로그인 실패");
        }
      } catch (e) {
        console.log('Profile 불러오기 실패. : ', e);
      }
    }
    load();
  }, []);

  return (
    <View style={{ height: '100%', flex: 1 }}>
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
            height: screenWidth * 0.88,
            borderRadius: screenWidth,
            backgroundColor: 'rgb(254, 196, 38)',
            top: screenHeight * 0.1,
          },
        ]}
      />
      <TouchableOpacity
        onPress={() => {
          kakaoLogin({ navigation });
          //navigation.navigate('Main');
        }}
      >
        <Image
          source={login}
          style={[
            {
              top: screenHeight * 0.36,
            },
            styles.login,
          ]}
        />
      </TouchableOpacity>

      <Image
        source={logo}
        style={[
          styles.img,
          {
            top: screenHeight * 0.1,
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
    //start: '0%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    width: (screenWidth * 40) / 100,
    height: (screenHeight * 7.6) / 100,
  },
  img: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
    width: screenWidth * 0.52,
    height: screenHeight * 0.36,
  },
});

export default Login;
