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
import Fontisto from 'react-native-vector-icons/Fontisto';

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

  const [nowPlanData, setNowPlanData] = useState([]);
  const [historyPlanData, setHistoryPlanData] = useState([]);

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
          if (response.data.length > 0) {
            setNowPlanData([{ title: 'Now Trip', data: [response.data[0]] }]);

            if (response.data.length > 1) {
              setHistoryPlanData([
                { title: 'Trip History', data: response.data.slice(1) },
              ]);
            }
          }
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
  console.log('now plan: ', nowPlanData);
  console.log('history plan: ', historyPlanData);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.nowTravelContainer}>
        {/* <SectionList></SectionList> */}
        <SectionList
          sections={nowPlanData}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.nowTravelTitle}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.nowTravelContent}>
              <View style={styles.travelContentTitle}>
                <Text style={styles.travelTitleText}>{item.name}</Text>
              </View>
              <View style={styles.travelContentDay}>
                <Fontisto
                  name="ship"
                  size={26}
                  style={{ start: 40 }}
                  color="#003049"
                />
                <Text style={styles.travelContentText}>{`여행 출발: ${
                  item.startDay.split('T')[0].split('-')[0]
                }년 ${item.startDay.split('T')[0].split('-')[1]}월 ${
                  item.startDay.split('T')[0].split('-')[2]
                }일 `}</Text>
                <Text style={styles.travelContentText}>{`여행 도착: ${
                  item.startDay.split('T')[0].split('-')[0]
                }년 ${item.startDay.split('T')[0].split('-')[1]}월 ${
                  item.startDay.split('T')[0].split('-')[2]
                }일`}</Text>
              </View>
            </TouchableOpacity>
          )}
        ></SectionList>
      </View>
      {/* <View style={styles.historyTravelContainer}>
        <Text>일정 History</Text>
        <View style={styles.historyContentContainer}> */}
      <View style={styles.historyTravelWrapper}>
        <SectionList
          style={styles.historyTravelContainer}
          sections={historyPlanData}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.historyTravelTitle}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.historyTravelContent}>
              <View style={styles.travelContentTitle}>
                <Text style={styles.travelTitleText}>{item.name}</Text>
              </View>
              <View style={styles.travelContentHistory}>
                <Fontisto
                  name="ship"
                  size={22}
                  style={{ start: 40 }}
                  color="#003049"
                />
                <Text style={styles.historyContentText}>{`${
                  item.startDay.split('T')[0].split('-')[0]
                }.${item.startDay.split('T')[0].split('-')[1]}.${
                  item.startDay.split('T')[0].split('-')[2]
                } - `}</Text>
                <Text style={styles.historyContentText}>{`${
                  item.startDay.split('T')[0].split('-')[0]
                }.${item.startDay.split('T')[0].split('-')[1]}.${
                  item.startDay.split('T')[0].split('-')[2]
                }`}</Text>
              </View>
            </TouchableOpacity>
          )}
          scrollEnabled={true}
        ></SectionList>
      </View>
      {/* </View>
      </View> */}
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
    position: 'absolute',
    top: '6%',
    left: '10%',
    flexDirection: 'column',
    //marginTop: 50,
  },
  nowTravelTitle: {
    color: 'black',
    fontWeight: '200',
    fontSize: 18,
    marginLeft: 10,
  },
  nowTravelContent: {
    //width: (screenWidth * 80) / 100,
    width: (screenWidth * 80) / 100,
    height: (screenHeight * 18) / 100,
    backgroundColor: '#fcbf49',
    borderRadius: 26,
    marginTop: 10,
    color: '#747474',
  },
  travelContentTitle: {
    start: 30,
    marginTop: 18,
    height: (screenHeight * 4) / 100,
    //backgroundColor: '#aaaaaa',
  },
  travelContentDay: {
    marginTop: 6,
  },
  travelTitleText: {
    color: 'black',
    fontWeight: '100',
    fontSize: 18,
  },
  travelContentText: {
    start: 120,
  },
  historyTravelWrapper: {
    height: 310,
    top: 100,
  },
  historyTravelContainer: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    //position: 'absolute',
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderColor: '#C5C5C5',
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
  historyTravelTitle: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: '200',
    fontSize: 18,
  },
  historyTravelContent: {
    backgroundColor: '#eae2b7',
    width: 260,
    height: (screenHeight * 14) / 100,
    borderRadius: 14,
    marginTop: 20,
    marginBottom: 10,
  },
  travelContentHistory: {
    flexDirection: 'row',
    marginTop: 6,
  },
  historyContentText: {
    start: 70,
    marginTop: 10,
    color: '#747474',
  },
});

export default CheckTripPlan;
