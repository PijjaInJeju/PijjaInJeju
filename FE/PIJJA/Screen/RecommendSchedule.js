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
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const DATA = [
  {
    title: '1일차',
    start: true,
    end: false,
    data: [
      {
        id: 1,
        title: '해녀의 집',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 22,
        title: '해녀의 집2',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 11,
        title: '해녀의 집3',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 32,
        title: '해녀의 집4',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
    ],
  },
  {
    title: '2일차',
    start: false,
    end: false,
    data: [
      {
        id: 1,
        title: '해녀의 집',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 22,
        title: '해녀의 집2',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 11,
        title: '해녀의 집3',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 32,
        title: '해녀의 집4',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
    ],
  },
  {
    title: '3일차',
    start: false,
    end: false,
    data: [
      {
        id: 1,
        title: '해녀의 집',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 22,
        title: '해녀의 집2',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 11,
        title: '해녀의 집3',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 32,
        title: '해녀의 집4',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
    ],
  },
  {
    title: '4일차',
    start: false,
    end: false,
    data: [
      {
        id: 1,
        title: '해녀의 집',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 22,
        title: '해녀의 집2',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 11,
        title: '해녀의 집3',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
      {
        id: 32,
        title: '해녀의 집4',
        address: '제주도특별시 제주도 애월읍 애월해안로',
      },
    ],
  },
  {
    title: '5일차',
    start: false,
    end: true,
    data: [],
  },
];



const RecommendSchedule = ({ route }) => {

  const [selectDay,setSelectDay] = useState(DATA[0].title);

  const [schedule,setSchedule] = useState(DATA[0].data);

  const renderSchedule = ({ item }) => (
    <scheduleItem title={item.title} address={item.address} />
  );

  const Item = ({ item }) => (
    <View
      style={{
        alignItems: 'center',
        marginTop: 0,
      }}
    >
      {
        item === schedule[0]
        ?
          undefined
        :
          <View style={styles.stick} />
      }
      <TouchableOpacity
        onPress={() => {
          console.log(item.id, item.title, item.address, '클릭되었습니다.');
          Linking.openURL(`geo:0,0?q=${encodeURIComponent(item.address)}`) 
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
      {
        item === schedule[schedule.length - 1]
        ?
          undefined
        :
          <View style={styles.stick} />
      }
      {
        item === schedule[schedule.length - 1]
        ?
          undefined
        :
          <Icon
            name="pluscircleo"
            size={30}
            color="#000000"
            onPress={() => console.log('추천해주세요')}
          />
      }
      
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
        renderItem={
          ({ item }) => {
            return (
              <View>
                {
                  item.title === selectDay
                  ?
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems:'center',
                      width: screenWidth * 0.20,
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
                        width: (screenWidth * 0.20) - 4,
                        color: "#000000"
                      }}
                      onPress={
                        () => {
                          console.log(item.title, "   ", selectDay);
                          setSelectDay(item.title);
                          setSchedule(item.data);
                        }
                      }
                    >
                      {item.title}
                    </Text>
                  </View>
                  :
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems:'center',
                      width: screenWidth * 0.20,
                      height: screenHeight * 0.05,
                      marginTop: 5,
                      marginLeft: 5,
                      marginRight: 5,
                      borderRadius: 10,
                      borderWidth: 2,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        borderColor: '#000000',
                        // -4 border Width가 각 2씩 * 2
                        width: (screenWidth * 0.20) - 4,
                        color: "#000000"
                      }}
                      onPress={
                        () => {
                          console.log(item.title, "   ", selectDay);
                          setSelectDay(item.title);
                        }
                      }
                    >
                      {item.title}
                    </Text>
                  </View>
                }
                <View
                  style={{
                    height: 10,
                  }}
                >
                  {
                    item.title === selectDay
                    ?
                    <View
                      style={{
                        marginLeft: 5,
                        marginRight: 5,
                        borderLeftWidth: 2,
                        borderRightWidth: 2,
                        height: 10,
                      }}
                    />
                    :
                    <View
                      style={{
                        height: 10,
                      }}
                    />
                  }
                </View>
                <View
                  style={{
                    height: 10,
                  }}
                >
                  {
                    item.title === selectDay
                    ?
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
                          width: (screenWidth * 0.2) - 4,
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
                    :
                    <View
                      style={{
                        borderTopWidth: 2,  
                      }}
                    />
                  }
                </View>
              </View>
            )
          }
        }
      />
      {console.log(schedule)}
      <FlatList
        style={{
          height: screenHeight * 0.9,
          width: screenWidth,
        }}
        data={schedule}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
      
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
