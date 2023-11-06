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
  //let b_res = 0;
  //let b_pressed = 0;

  // 그룹 성향 버튼
  // 누른 상태: 1, 안누른 상태:0
  // 그룹 성향
  const [tasteBtn, setTasteBtn] = useState([0, 0, 0, 0]);

  // // 좋아하는 음식 설정
  const [tasteFoodBtn, setFoodBtn] = useState([0, 0, 0, 0]);

  // // 여행 메이트 설정하기
  const [tasteMateBtn, setMateBtn] = useState([0, 0, 0, 0]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleTravel}>여행 그룹의 성향</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteBtn[0] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTasteBtn([
                  !tasteBtn[0],
                  tasteBtn[1],
                  tasteBtn[2],
                  tasteBtn[3],
                ]);
              }}
            >
              <Text>힐링</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteBtn[1] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTasteBtn([
                  tasteBtn[0],
                  !tasteBtn[1],
                  tasteBtn[2],
                  tasteBtn[3],
                ]);
              }}
            >
              <Text>레저</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteBtn[2] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTasteBtn([
                  tasteBtn[0],
                  tasteBtn[1],
                  !tasteBtn[2],
                  tasteBtn[3],
                ]);
              }}
            >
              <Text>문화 유산</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setTasteBtn([
                  tasteBtn[0],
                  tasteBtn[1],
                  tasteBtn[2],
                  !tasteBtn[3],
                ]);
              }}
            >
              <Text>먹거리</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.titleTravel}>좋아하는 음식 종류</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteFoodBtn[0] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setFoodBtn([
                  !tasteFoodBtn[0],
                  tasteFoodBtn[1],
                  tasteFoodBtn[2],
                  tasteFoodBtn[3],
                ]);
              }}
            >
              <Text>한식</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteFoodBtn[1] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setFoodBtn([
                  tasteFoodBtn[0],
                  !tasteFoodBtn[1],
                  tasteFoodBtn[2],
                  tasteFoodBtn[3],
                ]);
              }}
            >
              <Text>중식</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteFoodBtn[2] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setFoodBtn([
                  tasteFoodBtn[0],
                  tasteFoodBtn[1],
                  !tasteFoodBtn[2],
                  tasteFoodBtn[3],
                ]);
              }}
            >
              <Text>양식</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteFoodBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setFoodBtn([
                  tasteFoodBtn[0],
                  tasteFoodBtn[1],
                  tasteFoodBtn[2],
                  !tasteFoodBtn[3],
                ]);
              }}
            >
              <Text>제주 특산물</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={styles.titleTravel}>여행 메이트</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteMateBtn[0] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setMateBtn([
                  !tasteMateBtn[0],
                  tasteMateBtn[1],
                  tasteMateBtn[2],
                  tasteMateBtn[3],
                ]);
              }}
            >
              <Text>친구</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteMateBtn[1] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setMateBtn([
                  tasteMateBtn[0],
                  !tasteMateBtn[1],
                  tasteMateBtn[2],
                  tasteMateBtn[3],
                ]);
              }}
            >
              <Text>애인</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteMateBtn[2] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setMateBtn([
                  tasteMateBtn[0],
                  tasteMateBtn[1],
                  !tasteMateBtn[2],
                  tasteMateBtn[3],
                ]);
              }}
            >
              <Text>가족</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#fcbf49' },
                tasteMateBtn[3] && { backgroundColor: '#f77f00' },
                styles.tasteButton,
              ]}
              onPress={() => {
                setMateBtn([
                  tasteMateBtn[0],
                  tasteMateBtn[1],
                  tasteMateBtn[2],
                  !tasteMateBtn[3],
                ]);
              }}
            >
              <Text>아이와 함께</Text>
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
          //navigation.navigate('CreateScheduleMap');
          navigation.navigate('SetTravelPlan');
        }}
      >
        <Text>다음</Text>
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
    height: 70,
    borderRadius: 32,
    marginTop: 20,
    marginHorizontal: 14,
    paddingVertical: 26,
    paddingHorizontal: 30,
  },
  buttonNext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#f77f00',
    borderRadius: 16,
    marginVertical: 40,
  },
  scrollStyle: {},
});

export default GroupSetting;
