import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import GetRest from '../lib/GetRest.js';

nowTrip = false;
moreTrip = false;

screenWidth = Dimensions.get('window').width;
screenHeight = Dimensions.get('window').height;

const planHistory = ({ name, startDay, endDay }) => {
  // return (
  //   <View>
  //     <Text>name</Text>
  //     <Text>startDay</Text>
  //     <Text>endDay</Text>
  //   </View>
  // );
};

const nowTripScreen = () => {
  return (
    <View>
      <TouchableOpacity style={styles.nowTripView}>
        <Text>현재 여행중</Text>
      </TouchableOpacity>
    </View>
  );
};

const CheckTripPlan = () => {
  //DATA[0].data = route.params.scheduleList;
  //console.log(route.params.scheduleList);

  const [planData, setPlanData] = useState([]);
  const [nowPlanData, setNowPlanData] = useState({});
  let someData = {
    name: 'Io',
    tendencies: ['레저와 체험', '공항', '천천히 걷기'],
    mate: '가족',
    startDay: '2023-11-14T00:00:00.000Z',
    endDay: '2023-11-15T00:00:00.000Z',
    memberId: 1,
  };

  let totalData = [
    {
      name: 'Io1',
      tendencies: ['레저와 체험', '공항', '천천히 걷기'],
      mate: '가족',
      startDay: '2023-11-14T00:00:00.000Z',
      endDay: '2023-11-15T00:00:00.000Z',
      memberId: 1,
    },
    {
      name: 'Io2',
      tendencies: ['레저와 체험', '공항', '천천히 걷기'],
      mate: '가족',
      startDay: '2023-11-14T00:00:00.000Z',
      endDay: '2023-11-15T00:00:00.000Z',
      memberId: 1,
    },
    {
      name: 'Io3',
      tendencies: ['레저와 체험', '공항', '천천히 걷기'],
      mate: '가족',
      startDay: '2023-11-14T00:00:00.000Z',
      endDay: '2023-11-15T00:00:00.000Z',
      memberId: 1,
    },
  ];

  const getPlanList = async () => {
    try {
      await GetRest(
        '/api/companions/list',
        'GET',
        response => {
          console.log('응답 데이터3 : ', response);
          setPlanData(response.data);
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

  useEffect(() => {
    getPlanList();
  }, []);
  //someData = {};
  const nowPlan = [{ title: 'nowData', data: [someData] }];
  const totalPlan = [{ title: 'totalData', data: totalData }];
  // const historyData = [];
  // console.log('plan data: ', planData);
  //console.log(planData.length());
  console.log(someData);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.nowTravelContainer}>
        <Text>Now Trip</Text>
        <View style={styles.nowTravelContent}>
          {/* <SectionList></SectionList> */}
          <SectionList
            sections={nowPlan}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View>
                <View style={styles.travelContentTitle}>
                  <Text style={styles.travelTitleText}>{item.name}</Text>
                </View>
                <View style={styles.travelContentDay}>
                  <Text style={styles.travelContentText}>{`출발일: ${
                    item.startDay.split('T')[0].split('-')[0]
                  }년 ${item.startDay.split('T')[0].split('-')[1]}월 ${
                    item.startDay.split('T')[0].split('-')[2]
                  }일 `}</Text>
                  <Text style={styles.travelContentText}>{`도착일: ${
                    item.startDay.split('T')[0].split('-')[0]
                  }년 ${item.startDay.split('T')[0].split('-')[1]}월 ${
                    item.startDay.split('T')[0].split('-')[2]
                  }일`}</Text>
                </View>
              </View>
            )}
          ></SectionList>
        </View>
      </View>
      <View style={styles.historyTravelContainer}>
        <Text>일정 History</Text>
        <View style={styles.historyContentContainer}>
          <SectionList
            sections={totalPlan}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.historyTravelContent}>
                <View style={styles.travelContentTitle}>
                  <Text style={styles.travelTitleText}>{item.name}</Text>
                </View>
                <View style={styles.travelContentHistory}>
                  <Text style={styles.travelContentText}>{`${
                    item.startDay.split('T')[0].split('-')[0]
                  }.${item.startDay.split('T')[0].split('-')[1]}.${
                    item.startDay.split('T')[0].split('-')[2]
                  } - `}</Text>
                  <Text style={styles.travelContentText}>{`${
                    item.startDay.split('T')[0].split('-')[0]
                  }.${item.startDay.split('T')[0].split('-')[1]}.${
                    item.startDay.split('T')[0].split('-')[2]
                  }`}</Text>
                </View>
              </View>
            )}
          ></SectionList>
        </View>
      </View>
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
  nowTripView: {
    width: 100,
    hieght: 100,
    backgroundColor: '#aaaaaa',
  },
  nowTravelContainer: {
    // position: 'absolute',
    // top: '5%',
    // left: '10%',

    flexDirection: 'column',
    top: 100,
  },
  nowTravelContent: {
    width: (screenWidth * 80) / 100,
    height: (screenHeight * 18) / 100,
    backgroundColor: '#aaaaaa',
    borderRadius: 14,
  },
  travelContentTitle: {
    start: 220,
    marginTop: 20,
    height: (screenHeight * 4) / 100,
  },
  travelContentDay: {
    start: 140,
    marginTop: 10,
  },
  travelTitleText: {
    color: 'black',
    fontWeight: '200',
    fontSize: 18,
  },
  travelContentText: {},
  historyTravelContainer: {
    top: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute',
    margintop: 20,
    //left: '0%',
    //left: '10%',
  },
  historyContentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //start: ,
  },
  historyTravelContent: {
    backgroundColor: '#aaaaaa',
    width: 260,
    height: (screenHeight * 14) / 100,
    borderRadius: 14,
    marginTop: 20,
  },
  travelContentHistory: {
    flexDirection: 'row',
    marginTop: 10,
    start: 80,
  },
});

export default CheckTripPlan;
