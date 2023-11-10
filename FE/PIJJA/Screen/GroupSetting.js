import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

import SetTravelPlan from './SetTravelPlan.js';
import Gallery from './Gallery.js';

const GroupSetting = ({ navigation }) => {
  // 그룹 성향 버튼
  // 누른 상태: 1, 안누른 상태:0
  // 여행 목적
  const [travelTargetBtn, setTravelTargetBtn] = useState([0, 0, 0]);

  // 여행 스타일
  const [travelStyleBtn, setTravelStyleBtn] = useState([0, 0, 0, 0]);

  // 여행 메이트
  const [travelMateBtn, setTravelMateBtn] = useState([0, 0, 0, 0, 0]);

  const [groupStyles, setGroupStyles] = useState([]);
  const [travelMate, setTravelMate] = useState('');

  const travelTargets = ['식도락', '쇼핑', '레저 체험'];
  const travelStyles = ['공항', '문화 유산', '걷기', '힐링'];
  const travelMates = ['친구', '연인', '가족', '혼자', '아이'];

  const setTravelStyle = () => {
    let setStyle = [];
    let setStyle2 = '';
    let setMate = '';

    for (let i = 0; i < 3; i++) {
      if (travelTargetBtn[i] != 0) {
        setStyle[i] = travelTargets[i];
      } else {
        setStyle[i] = '';
      }
    }

    for (let i = 0; i < 4; i++) {
      if (travelStyleBtn[i] != 0) {
        setStyle[i + 3] = travelStyles[i];
      } else {
        setStyle[i + 3] = '';
      }
    }

    for (let i = 0; i < 5; i++) {
      if (travelMateBtn[i] != 0) {
        setMate = travelMates[i];
      }
    }

    //console.log(setStyle);
    //console.log(setMate);
    setGroupStyles(setStyle);
    setTravelMate(setMate);

    navigation.navigate('SetTravelPlan', {
      groupStyles: setStyle,
      travelMate: setMate,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.travelStyleContent}>
        <Text style={styles.titleTravel}>여행의 주 목적은?</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: '#fcbf49',
                },
                travelTargetBtn[0] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelTargetBtn([
                  !travelTargetBtn[0],
                  travelTargetBtn[1],
                  travelTargetBtn[2],
                ]);
                //setTravelStyle();
              }}
            >
              <Text>먹거리</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelTargetBtn[1] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelTargetBtn([
                  travelTargetBtn[0],
                  !travelTargetBtn[1],
                  travelTargetBtn[2],
                ]);
              }}
            >
              <Text>쇼핑</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelTargetBtn[2] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelTargetBtn([
                  travelTargetBtn[0],
                  travelTargetBtn[1],
                  !travelTargetBtn[2],
                ]);
              }}
            >
              <Text>레저 체험</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelTargetBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelStyleBtn([
                  travelTargetBtn[0],
                  travelTargetBtn[1],
                  travelTargetBtn[2],
                  !travelTargetBtn[3],
                ]);
              }}
            >
              <Text>먹거리</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.titleTravel}>당신의 여행 스타일은?</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelStyleBtn[0] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelStyleBtn([
                  !travelStyleBtn[0],
                  travelStyleBtn[1],
                  travelStyleBtn[2],
                  travelStyleBtn[3],
                ]);
              }}
            >
              <Text>공항</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelStyleBtn[1] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelStyleBtn([
                  travelStyleBtn[0],
                  !travelStyleBtn[1],
                  travelStyleBtn[2],
                  travelStyleBtn[3],
                ]);
              }}
            >
              <Text>문화 유적</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelStyleBtn[2] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelStyleBtn([
                  travelStyleBtn[0],
                  travelStyleBtn[1],
                  !travelStyleBtn[2],
                  travelStyleBtn[3],
                ]);
              }}
            >
              <Text>걷기</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelStyleBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelStyleBtn([
                  travelStyleBtn[0],
                  travelStyleBtn[1],
                  travelStyleBtn[2],
                  !travelStyleBtn[3],
                ]);
              }}
            >
              <Text>힐링</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.titleTravel}>함께 여행할 메이트</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelMateBtn[0] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelMateBtn([!travelMateBtn[0], 0, 0, 0, 0]);
              }}
            >
              <Text>친구</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelMateBtn[1] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelMateBtn([0, !travelMateBtn[1], 0, 0, 0]);
              }}
            >
              <Text>연인</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelMateBtn[2] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelMateBtn([0, 0, !travelMateBtn[2], 0, 0]);
              }}
            >
              <Text>가족</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelMateBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelMateBtn([0, 0, 0, !travelMateBtn[3], 0]);
              }}
            >
              <Text>혼자</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                travelMateBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTravelMateBtn([0, 0, 0, 0, !travelMateBtn[3]]);
              }}
            >
              <Text>아이</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonNext}
        onPress={() => {
          setTravelStyle();
          //navigation.navigate('CreateScheduleMap');
        }}
      >
        <Text style={styles.nextBtnText}>다음</Text>
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
    backgroundColor: '#ffffff',
  },
  titleTravel: {
    fontSize: 20,
    marginLeft: 24,
    marginTop: 40,
  },
  travelStyleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonFollower: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasteButton: {
    width: 128,
    height: 74,
    //backgroundColor: '#fcbf49',
    borderRadius: 33,
    borderWidth: 3,
    borderColor: '#f77f00',
    marginVertical: 10,
    marginHorizontal: 12,
    paddingVertical: 26,
    paddingHorizontal: 30,
  },
  buttonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 60,
    backgroundColor: '#f77f00',
    //borderWidth: 4,
    borderColor: '#f77f00',
    borderRadius: 16,
    marginVertical: 40,
  },
  nextBtnText: {
    fontSize: 24,
    color: '#ffffff',
  },
  travelStyleContent: {
    marginTop: 24,
    marginBottom: 10,
  },
  scrollStyle: {},
});

export default GroupSetting;
