import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  SectionList,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Rest from '../lib/Rest.js';

const RecommendSchedule = ({ route, navigation }) => {
  console.log('라우트로 받은 데이터 ', route.params.scheduleList);
  console.log('라우트로 받은 데이터 len ', route.params.scheduleList.length);
  //console.log('라우트로 받은 데이터2 ', route.params.scheduleList.planList);

  if (route.params.scheduleList.planList.length < 5) {
    for (let i = 5 - route.params.scheduleList.planList.length; i > 0; i--) {
      route.params.scheduleList.planList.push({});
    }
  }

  const [DATA, setDATA] = useState(route.params.scheduleList.planList);
  const [selectDay, setSelectDay] = useState(DATA[0].day);
  const [schedule, setSchedule] = useState(DATA[0].data);
  const travelMate = route.params.travelMate;
  const groupStyles = route.params.groupStyles;
  const groupStyle = '';

  for (let i = 0; i < groupStyle.length; i++) {
    if (groupStyle[i] != '') {
      groupstyle = groupStyle[i];
      break;
    }
  }

  const Item = ({ item }) => (
    <View
      style={{
        alignItems: 'center',
        marginTop: 0,
      }}
    >
      {item === schedule[0] ? undefined : <View style={styles.stick} />}
      <TouchableOpacity
        onPress={() => {
          console.log(item.id, item.title, item.address, '클릭되었습니다.');
          Linking.openURL(`geo:0,0?q=${encodeURIComponent(item.address)}`);
        }}
        style={{
          borderWidth: 1,
          width: 300,
          borderRadius: 10,
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </TouchableOpacity>
      {item === schedule[schedule.length - 1] ? undefined : (
        <View style={styles.stick} />
      )}
      {item === schedule[schedule.length - 1] ? undefined : (
        <Icon
          name="pluscircleo"
          size={30}
          color="#000000"
          onPress={() => {
            console.log('추천해주세요');
            //console.log(index);
            navigation.navigate('RecommendScheduleDeatil', {});
          }}
        />
      )}
    </View>
  );

  //console.log(route.params.scheduleList);

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        style={{
          height: screenHeight * 0.09,
        }}
        horizontal={true}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View>
              {item.day === undefined ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: screenWidth * 0.2,
                    height: screenHeight * 0.05,
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      borderColor: '#000000',
                      // -4 border Width가 각 2씩 * 2
                      width: screenWidth * 0.2 - 4,
                      color: '#000000',
                    }}
                  ></Text>
                </View>
              ) : item.day === selectDay ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: screenWidth * 0.2,
                    height: screenHeight * 0.05,
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      borderColor: '#000000',
                      // -4 border Width가 각 2씩 * 2
                      width: screenWidth * 0.2 - 4,
                      color: '#000000',
                    }}
                    onPress={() => {
                      console.log(item.day, '   ', selectDay);
                      setSelectDay(item.day);
                      setSchedule(item.data);
                    }}
                  >
                    {item.day}일차
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: screenWidth * 0.2,
                    height: screenHeight * 0.05,
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopWidth: 2,
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      borderColor: '#000000',
                      // -4 border Width가 각 2씩 * 2
                      width: screenWidth * 0.2 - 4,
                      color: '#000000',
                    }}
                    onPress={() => {
                      console.log(item.day, '   ', selectDay);
                      setSelectDay(item.day);
                      setSchedule(item.data);
                    }}
                  >
                    {item.day}일차
                  </Text>
                </View>
              )}
              <View
                style={{
                  height: 10,
                }}
              >
                {item.day === selectDay ? (
                  <View
                    style={{
                      marginLeft: 5,
                      marginRight: 5,
                      borderLeftWidth: 2,
                      borderRightWidth: 2,
                      height: 10,
                    }}
                  />
                ) : (
                  <View
                    style={{
                      marginLeft: 5,
                      marginRight: 5,
                      borderLeftWidth: 2,
                      borderRightWidth: 2,
                      height: 10,
                    }}
                  />
                )}
              </View>
              <View
                style={{
                  height: 10,
                }}
              >
                {item.day === selectDay ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: screenWidth * 0.2,
                    }}
                  >
                    <View
                      style={{
                        // 5 패딩 + 2 borderWidth
                        width: 5 + 2,
                        height: 10,
                        borderTopWidth: 2,
                      }}
                    />
                    <View
                      style={{
                        height: 10,
                        width: screenWidth * 0.2 - 4,
                      }}
                    />
                    <View
                      style={{
                        // 5 패딩 + 2 borderWidth +  1 부동소수점 오차 극복
                        width: 5 + 3 + 1,
                        height: 10,
                        borderTopWidth: 2,
                      }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      borderTopWidth: 2,
                    }}
                  />
                )}
              </View>
            </View>
          );
        }}
      />
      {console.log(schedule)}
      {/* lastFlat */}
      <FlatList
        style={{
          height: screenHeight * 0.8,
          width: screenWidth,
        }}
        data={schedule}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
      <View>
        <Button
          title="일정 확정하기"
          onPress={() => {
            Rest(
              '/api/plan/completeMakePlan',
              'POST',
              route.params.scheduleList,
              res => {
                console.log('여행 전체 일정 등록: ', res);
              },
              error => {
                console.error(error);
              },
            );

            console.log('추천 페이지로.');
            navigation.popToTop();
            navigation.push('Main');
            navigation.push('CheckTripPlan');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    textAlign: 'center',
  },
  address: {
    fontSize: 10,
    color: '#000000',
    textAlign: 'right',
    paddingRight: 10,
  },
  day: {
    fontSize: 32,
    color: '#000000',
    textAlign: 'center',
  },
  stick: {
    backgroundColor: 'black',
    width: 1,
    height: 10,
    borderColor: 'black',
    border: 1,
  },
});

export default RecommendSchedule;
