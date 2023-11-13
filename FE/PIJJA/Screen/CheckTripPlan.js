import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import Rest from '../lib/Rest.js';

const getPlanList = async () => {
  let planData = {};
  try {
    await Rest(
      '/api/companions/list',
      'GET',

      response => {
        console.log('응답 데이터3 : ' + response.data);
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

const planHistory = ({ id, title, address, navigation }) => (
  <View
    style={{
      alignItems: 'center',
      marginTop: 0,
    }}
  >
    <View style={styles.stick} />
    <TouchableOpacity
      onPress={() => {
        console.log(id, title, address, '클릭되었습니다.');
      }}
      style={{
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
      }}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.address}>{address}</Text>
    </TouchableOpacity>
    <View style={styles.stick} />
    <Icon
      name="pluscircleo"
      size={30}
      color="#000000"
      onPress={() => console.log('추천해주세요')}
    />
  </View>
);

const CheckTripPlan = () => {
  //DATA[0].data = route.params.scheduleList;
  //console.log(route.params.scheduleList);
  getPlanList();

  return (
    <SafeAreaView style={[styles.container]}>
      <Text>현재 일정</Text>
      <View></View>
      <Text>일정 History</Text>
      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <planHistory/>}
      ></SectionList> */}

      <TouchableOpacity
        //style={styles.buttonNext}
        onPress={() => {
          //setTravelStyle();
          //navigation.navigate('CreateScheduleMap');
        }}
      >
        <Text>완료</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckTripPlan;
