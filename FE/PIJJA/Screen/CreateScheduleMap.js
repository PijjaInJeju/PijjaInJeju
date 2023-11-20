import React, { useState, useCallback, useRef, useMemo } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  PixelRatio,
  Dimensions,
  FlatList,
  Button,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Header from '../component/Header';

import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Rest from '../lib/Rest';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const closeSize = 7 * pixelRatio;

// console.log('Pixel Ratio: ', pixelRatio);
// console.log('Screen Width: ', screenWidth);
// console.log('Screen Height: ', screenHeight);

const CreateScheduleMap = ({ navigation, route }) => {
  // hooks
  const sheetRef = useRef(null);
  const mapRef = useRef(null);

  let delaySearch = setTimeout(()=>{}, 1);

  //console.log('CreateScheduleMap route: ', route.params);

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['3%', '25%', '50%', '90%'], []);

  // route data
  //const { companionId, name, totalDay } = route.params;
  //   console.log('route data: ', companionId);
  //   console.log(name);
  //   console.log(totalDay);

  // callbacks
  const handleSheetChange = useCallback(
    index => {
      //console.log("handleSheetChange", index);
      if (index === 0) setMapHeight(97);
      else if (index === 1) setMapHeight(75);
      else if (index === 2) setMapHeight(50);
      else if (index === 3) setMapHeight(10);
    },

    [],
  );
  const handleSnapPress = useCallback(
    index => {
      sheetRef.current?.snapToIndex(index);
    },

    [],
  );
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  // render
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );

  const Start = { latitude: 37.5004967273559, longitude: 127.03623707637095 };
  const End = { latitude: 37.49802463750997, longitude: 127.02761570877878 };

  const [mapCenter, setMapCenter] = useState({
    longitude: 126.54916661,
    latitude: 33.3616666,
  });

  const [searchList, setSearchList] = useState([]);

  const [search, setSearch] = useState('');

  const [scheduleList, setScheduleList] = useState(new Array());

  const [mapHeight, setMapHeight] = useState(97);

  const item = ({ item }) => (
    <View
      style={{
        flexDirection: 'column',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginBottom: '1%',
          marginTop: '1%',
        }}
      >
        <Icon3
          style={{
            alignSelf: 'center',
            color: '#f77f00',
          }}
          name="location-dot"
          size={10 * pixelRatio}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            flex: 4,
            paddingLeft: '1%',
          }}
          onPress={() => {
            setMapCenter(item);
          }}
        >
          <Text
            style={{
              color: '#000000',
              fontSize: 5 * pixelRatio,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 3.5 * pixelRatio,
            }}
          >
            {item.address}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'flex-end',
            flex: 1,
          }}
        >
          {item.select ? (
            <Icon
              style={{
                marginRight: screenWidth * 0.05,
                color: '#d62828',
              }}
              name="squared-minus"
              size={closeSize}
              onPress={() => {
                console.log(item.title, '을 삭제 시도중');
                let newScheduleList = scheduleList.filter(
                  entity => item.id !== entity.id,
                );
                let newSearchList = searchList.map(entity => {
                  return {
                    ...entity,
                    select:
                      item.id === entity.id ? !entity.select : entity.select,
                  };
                });
                setSearchList(newSearchList);

                setScheduleList(newScheduleList);

                //console.log(scheduleList);
              }}
            />
          ) : (
            <Icon
              style={{
                marginRight: screenWidth * 0.05,
                color: '#000000',
              }}
              name="squared-plus"
              size={closeSize}
              onPress={() => {
                console.log(item.title, '을 추가 시도중');
                let newScheduleList = [...scheduleList, item];
                let newSearchList = searchList.map(entity => {
                  return {
                    ...entity,
                    select:
                      item.id === entity.id ? !entity.select : entity.select,
                  };
                });
                setSearchList(newSearchList);
                setScheduleList(newScheduleList);
              }}
            />
          )}
        </View>
      </View>
      <View
        style={{
          width: '90%',
          backgroundColor: '#000000',
          height: 1,
          alignSelf: 'center',
        }}
      />
    </View>
  );

  const schedule = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderRadius: 15,
          borderColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingRight: screenWidth * 0.01,
          paddingLeft: screenWidth * 0.01,
          marginRight: screenWidth * 0.01,
          backgroundColor: '#fcbf49',
          height: closeSize * 1.3,
        }}
      >
        <Text
          style={{
            color: '#000000',
            fontSize: 3 * pixelRatio,
            padding: pixelRatio,
          }}
        >
          {item.title}
        </Text>
        <Icon4
          name="close"
          size={closeSize}
          onPress={() => {
            console.log(item, '을 삭제 시도중');
            let newScheduleList = scheduleList.filter(
              entity => item.id !== entity.id,
            );
            let newSearchList = searchList.map(entity => {
              return {
                ...entity,
                select: item.id === entity.id ? !entity.select : entity.select,
              };
            });
            setSearchList(newSearchList);
            setScheduleList(newScheduleList);
            //console.log(scheduleList);
          }}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} title={'고정 여행지 설정'} />
        <NaverMapView
          style={{
            width: '100%',
            height: mapHeight + '%',
            alignSelf: 'flex-start',
          }}
          ref={mapRef}
          showsMyLocationButton={false}
          center={{ ...mapCenter, zoom: 8.863083459663644 }}
          onTouch={e => console.log('onTouch', JSON.stringify(e.nativeEvent))}
          // onCameraChange={/**e => console.log('onCameraChange', JSON.stringify(e))**/}
          onMapClick={e => console.log('onMapClick', JSON.stringify(e))}
        >
          {searchList.map(coordinate => {
            console.log(coordinate);
            return (
              <Marker
                coordinate={coordinate}
                pinColor="blue"
                onClick={() => console.warn('coordinate', coordinate.title)}
              />
            );
          })}
        </NaverMapView>
        <View
          style={{
            flex: 1,
          }}
        />
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          backgroundStyle={{
            backgroundColor: '#eae2b7',
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop: '1%',
            }}
            onPress={() => {
              console.log('일정 만들기');
              let T = {
                totalDay: route.params.totalDay,
                name: route.params.name,
                companionId: route.params.companionId,
                placeList: scheduleList.map(item => {
                  //console.log("item id :", item.id);
                  return { id: item.id };
                }),
              };
              console.log(T);
              Rest(
                '/api/plan',
                'POST',
                T,
                res => {
                  console.log('CreateScheduleMap 일정생성 Rest 응답 : ', res);
                  console.log('여행 코스 id: ', res.planId);
                  navigation.push('RecommendSchedule', {
                    scheduleList: res,
                    // travelMate: route.params.travelMate,
                    // groupStyles: route.params.groupStyles,
                  });
                },
                error => {
                  console.error(error);
                },
              );
            }}
          >
            <Icon name="calendar" size={closeSize} color="#f77f00" />

            <Text
              style={{
                color: '#f77f00',
                marginRight: '5%',
              }}
            >
              일정 만들기
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: '1%',
              width: '50%',
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Icon2
              style={{
                alignSelf: 'center',
              }}
              name="search"
              color="black"
              size={screenWidth * 0.04}
            />
            <TextInput
              style={{
                width: screenWidth * 0.45,
                padding: 0,
                color: '#000000',
              }}
              onChangeText={keyword => {
                console.log('검색 키워드 : ', keyword);
                setSearch(keyword);
                clearInterval(delaySearch);
                delaySearch = setInterval(
                  () => {
                    Rest(
                      '/api/places/serachPlace',
                      'POST',
                      {
                        title: keyword,
                      },
                      res => {
                        let i = 0;
                        console.log('검색결과 : ', res);
                        let newRes = res.filter(
                          (item) => {
                            if( i < 50){
                              i++;
                              return item;
                            }
                          }
                        );
                        setSearchList(newRes);
                      },
                      e => {
                        console.error(e);
                      },
                    )
                  }
                );
              }}
              value={search}
              placeholder="검색 할 장소를 입력하세요."
              placeholderTextColor={'#111111'}
            />
          </View>
          <View>
            {scheduleList.length === 0 ? (
              <Text
                style={{
                  width: screenWidth,
                  textAlign: 'center',
                  color: '#d62828',
                }}
              >
                여행지를 추가해주세요
              </Text>
            ) : (
              <FlatList
                style={{
                  width: '100%',
                  paddingLeft: '1%',
                }}
                horizontal={true}
                data={scheduleList}
                renderItem={schedule}
              />
            )}
          </View>
          <FlatList
            style={{
              width: '100%',
              flex: 1,
              backgroundColor: '#FFFFFF',
              paddingLeft: '1%',
            }}
            data={searchList}
            renderItem={item}
            keyExtractor={item => item.id}
          />
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  webview: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CreateScheduleMap;
