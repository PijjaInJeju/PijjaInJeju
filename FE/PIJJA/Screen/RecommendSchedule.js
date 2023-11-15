import React from 'react';
import {
  SafeAreaView,
  View,
  SectionList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking, 
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

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

const Item = ({ id, title, address, longitude, latitude, navigation }) => (
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
        Linking.openURL(`geo:0,0?q=${encodeURIComponent(address)}`) 
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

const RecommendSchedule = ({ route }) => {
  const renderSchedule = ({ item }) => (
    <scheduleItem title={item.title} address={item.address} />
  );

  DATA[0].data = route.params.scheduleList;
  console.log(route.params.scheduleList);

  return (
    <SafeAreaView style={[styles.container]}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Item id={item.id} title={item.title} address={item.address} longitude={item.longitude} latitude={item.latitude}/>
        )}
        renderSectionHeader={({ section: { title, start, end } }) => (
          <View
            style={{
              alignItems: 'center',
            }}
          >
            {start === false ? <View style={styles.stick} /> : undefined}
            <Text
              style={[
                styles.day,
                {
                  borderWidth: 1,
                  width: 100,
                  borderRadius: 10,
                },
              ]}
            >
              {title}
            </Text>
            {end === false ? (
              <View
                style={{
                  alignItems: 'center',
                }}
              >
                <View style={styles.stick} />
                <Icon
                  name="pluscircleo"
                  size={30}
                  color="#000000"
                  onPress={() => console.log('추천해주세요')}
                />
              </View>
            ) : (
              <></>
            )}
          </View>
        )}
      />
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
