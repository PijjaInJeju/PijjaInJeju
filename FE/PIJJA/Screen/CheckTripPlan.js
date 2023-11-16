import React, { useState, useEffect } from 'react';
import { SectionList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import GetRest from '../lib/GetRest.js';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CheckTripPlanDetail from './CheckTripPlanDetail.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define global variables or constants (if needed)
let nowTrip = false;
let moreTrip = false;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const nowTripScreen = () => {
  return (
    <View>
      <TouchableOpacity style={styles.nowTripView}>
        <Text>현재 여행중</Text>
      </TouchableOpacity>
    </View>
  );
};

const CheckTripPlan = ({ navigation }) => {
  const [nowPlanData, setNowPlanData] = useState([]);
  const [historyPlanData, setHistoryPlanData] = useState([]);
  let id;

  const load = async () => {
    try {
      const kakaoData = await AsyncStorage.getItem('user');
      id = JSON.parse(kakaoData).backEndId;
      console.log("id : " + id);
    } catch (e) {
      console.log('Profile 불러오기 실패. : ', e);
    }
  };

  const getPlanList = async () => {
    try {
      await load();

      await GetRest(
        '/api/companions/list',
        // '/api/companions/list/'+ id,
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

  const renderNoTripMessage = (data) => {
    if (data.length === 0) {
      return <Text style={styles.noTripMessage}>여행 기록이 없습니다.</Text>;
    }
    return null;
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.nowTravelContainer}>
        <SectionList
          sections={nowPlanData}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.nowTravelTitle}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.nowTravelContent}
              onPress={() => {
                navigation.navigate('CheckTripPlanDetail', {
                  companionId: item.id,
                });
              }}
            >
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
        {renderNoTripMessage(nowPlanData)}
      </View>

      <View style={styles.historyTravelWrapper}>
  <SectionList
    style={styles.historyTravelContainer}
    sections={historyPlanData}
    keyExtractor={(item, index) => item + index}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={styles.historyTravelTitle}>{title}</Text>
    )}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.historyTravelContent}
        onPress={() => {
          navigation.navigate('CheckTripPlanDetail', {
            companionId: item.id,
          });
        }}
      >
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
    ListEmptyComponent={() => (
      <Text style={styles.noTripMessage}>지난 여행 기록이 없습니다.</Text>
    )}
    scrollEnabled={true}
  ></SectionList>
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
    position: 'absolute',
    top: '6%',
    left: '10%',
    flexDirection: 'column',
  },
  nowTravelTitle: {
    color: 'black',
    fontWeight: '200',
    fontSize: 18,
    marginLeft: 10,
  },
  nowTravelContent: {
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
    top: 100,
    width: '80%',
    height: '60%',
    alignSelf: 'center',
  },
  historyTravelContainer: {
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 14,
    borderColor: '#C5C5C5',
    margin: 10,
  },
  historyContentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  historyTravelTitle: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: '200',
    fontSize: 18,
  },
  historySectionList: {
    flex: 1,
  },
  historyTravelContent: {
    backgroundColor: '#eae2b7',
    width: '100%',
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
  noTripMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default CheckTripPlan;
