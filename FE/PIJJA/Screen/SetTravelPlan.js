import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
  Alert,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import JoinGroup from './JoinGroup.js';
import CreateScheduleMap from './CreateScheduleMap.js';
import Rest from '../lib/Rest.js';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors.js';
import { ScreenHeight } from 'react-native-elements/dist/helpers/index.js';

screenWidth = Dimensions.get('window').width;
screenHeight = Dimensions.get('window').height;

const pixelRatio = PixelRatio.get();

const getUserId = async () => {
  let userId = new Number();
  userId = await Rest(
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

  return userId;
};

const SetTravelPlan = ({ navigation, route }) => {
  const planLogo = require('../Image/k_setPlanLogo.png');

  // 그룹 데이터
  const { groupStyles, travelMate } = route.params;
  const [userData, setUserData] = useState(new Object());
  const [groupId, setGroupId] = useState(0);

  const load = async () => {
    try {
      const kakaoData = await AsyncStorage.getItem('user');
      if (kakaoData === null) {
        console.log('there is noting');
        //navigation.push('Login');
      } else {
        console.log('Login: ', JSON.parse(kakaoData));
        setUserData(JSON.parse(kakaoData));
        //return kakaoData;
      }
    } catch (e) {
      console.log('Profile 불러오기 실패. : ', e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const transmitGroupStyle = async () => {
    try {
      await Rest(
        '/api/companions',
        'POST',
        {
          name: titileText,
          tendencies: groupStyles,
          mate: travelMate,
          startDay: travelStartData,
          endDay: travelEndData,
          memberId: 10,
          // memberId: userData.backEndId,
        },
        response => {
          // console.log('응답 데이터2 id: ' + userData.backEndId);
          // console.log('응답 데이터2 id: ' + response.data);
          navigation.navigate('CreateScheduleMap', {
            companionId: 10,
            name: titileText,
            totalDay: elasedDay,
            travelMate: travelMate,
            groupStyles: groupStyles,
          });
        },
        error => {
          console.log('error:', error);
          // if (error.data.id !== undefined) id = error.data.id;
        },
      );
    } catch (error) {
      console.log('그룹 데이터 송신 실패', error);
    }
  };

  // console.log(groupStyles);
  // console.log(travelMate);
  // console.log(travelStartData);
  // console.log(travelEndData);
  // console.log(userData.backEndId);

  // 여행 제목
  const [titileText, setText] = useState(0);

  // 달력 설정
  const [dateModelShow1, setDateModel1] = useState(false);
  const [dateModelShow2, setDateModel2] = useState(false);

  // 입력 시간
  const [travelStartData, setTravelStartData] = useState(false);
  const [travelEndData, setTravelEndData] = useState(false);
  const [travelStart, setTravelStart] = useState('');
  const [travelEnd, setTravelEnd] = useState('');
  const [elasedDay, setElasedDay] = useState(false);

  // 입력 시간 text
  const [startTextContent, setStartTextContent] = useState(false);
  const [endTextContent, setEndTextContent] = useState(false);

  // 입력 시간 검사
  const [nextOk, setNextOk] = useState(false);

  // 달력 다루기
  const nowDate = new Date();

  const showDatePicker1 = () => {
    setDateModel1(true);
    console.log(dateModelShow1);
  };

  const dateModelCancle1 = () => {
    setDateModel1(false);
    console.log(dateModelShow1);
  };

  const showDatePicker2 = () => {
    setDateModel2(true);
  };

  const dateModelCancle2 = () => {
    setDateModel2(false);
    console.log(dateModelShow2);
  };

  const dateConfirm1 = date => {
    let confirmDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    setTravelStartData(confirmDate);
    setTravelStart(confirmDate.getTime());
    setStartTextContent(date.getMonth() + '월 ' + date.getDate() + '일');
    dateModelCancle1();
  };

  const dateConfirm2 = date => {
    let conNextOk = true;
    let confirmDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    setTravelEndData(confirmDate);
    setTravelEnd(confirmDate.getTime());

    let startDay = travelStart / (1000 * 60 * 60 * 24);
    let endDay = confirmDate.getTime() / (1000 * 60 * 60 * 24);
    let elasedDay = endDay - startDay + 1;

    if (travelStart == 0) {
      Alert.alert('여행 시작일을 입력해주세요.');
      conNextOk = false;
    } else if (elasedDay < 1) {
      Alert.alert('여행 도착일이 더 길게 입력해주세요.');
      conNextOk = false;
    }

    if (conNextOk === true) {
      setNextOk(true);
      setEndTextContent(date.getMonth() + '월 ' + date.getDate() + '일');
      setElasedDay(elasedDay);
    } else {
      setNextOk(false);
    }
    dateModelCancle2();
  };

  return (
    <SafeAreaView
      style={{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
      }}
    >
      <View style={styles.outerRectangle} />
      <View style={styles.outerCircle} />
      <Image
        style={{
          position: 'absolute',
          marginTop: screenHeight * 0.05,
          marginLeft: screenWidth * 0.275,
          width: screenWidth * 0.45,
          height: screenHeight * 0.3,
          resizeMode: 'stretch',
          borderRadius: 3,
        }}
        source={require('../Image/k_setPlanLogo.png')}
      />
      <TextInput
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: pixelRatio * 5,
          top: screenHeight * 0.35,
          textAlign: 'center',
          color: '#000000',
          width: screenWidth * 0.5,
          alignSelf: 'center',
          marginTop: screenHeight * 0.05,
        }}
        placeholder="여행 계획명을 입력하세요."
        placeholderTextColor={'#d3d3d3'}
        onChangeText={nowText => setText(nowText)}
        defaultValue={titileText}
      />
      <View
        style={{
          marginTop: '60%',
          width: screenWidth,
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            marginLeft: screenWidth * 0.2,
          }}
        >
          <View>
            <Text
              style={{
                width: screenWidth * 0.25,
                alignItems: 'center',
                marginLeft: '10%',
                textAlign: 'center',
                marginLeft: screenWidth * 0.1,
                marginTop: screenHeight * 0.1,
              }}
            >
              시작일
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: pixelRatio * 5,
                  width: screenWidth * 0.4, // 흰색 공간 확장
                  height: screenHeight * 0.05,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: screenWidth * 0.1,
                }}
                onPress={showDatePicker1}
              >
                <Icon name="calendar" size={20} color="orange" />
                <Text
                  style={{
                    color: 'orange',
                    width: screenWidth * 0.3, // 흰색 공간 확장
                    textAlign: 'center',
                    marginLeft: screenWidth * 0.01,
                  }}
                >
                  {startTextContent ? startTextContent : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: screenHeight * 0.02 }}>
            <Text
              style={{
                width: screenWidth * 0.25,
                alignItems: 'center',
                marginLeft: '10%',
                textAlign: 'center',
                marginLeft: screenWidth * 0.1,
              }}
            >
              종료일
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: pixelRatio * 5,
                  width: screenWidth * 0.4, // 흰색 공간 확장
                  height: screenHeight * 0.05,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: screenWidth * 0.1,
                }}
                onPress={showDatePicker2}
              >
                <Icon name="calendar" size={20} color="orange" />
                <Text
                  style={{
                    color: 'orange',
                    width: screenWidth * 0.3, // 흰색 공간 확장
                    textAlign: 'center',
                    marginLeft: screenWidth * 0.01,
                  }}
                >
                  {endTextContent ? endTextContent : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          ...styles.travelPlanButton,
          top: screenHeight * 0.05, // Adjust the top position as needed
        }}
        onPress={() => {
          if (nextOk) {
            transmitGroupStyle();
          } else {
            Alert.alert('여행 일정을 입력해주세요.');
          }
        }}
      >
        <Text style={{ width: screenWidth * 0.3, textAlign: 'center' }}>
          다음
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={dateModelShow1}
        mode="date"
        onConfirm={dateConfirm1}
        onCancel={dateModelCancle1}
        display="default"
      />
      <DateTimePickerModal
        isVisible={dateModelShow2}
        mode="date"
        onConfirm={dateConfirm2}
        onCancel={dateModelCancle2}
        display="default"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerRectangle: {
    position: 'absolute',
    top: screenHeight * 0,
    width: screenWidth,
    height: screenHeight * 0.4,
    backgroundColor: 'rgb(254, 196, 38)',
    zIndex: -1,
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
    zIndex: -1,
  },
  travelPlanButton: {
    alignItems: 'center',
    alignContent: 'space-around',
    top: screenHeight * 0.3,
    left: screenWidth * 0.35,
    width: '30%',
    height: '5%',
    backgroundColor: '#f77f00',
    borderRadius: pixelRatio * 5,
    flexDirection: 'row',
  },
});

export default SetTravelPlan;
