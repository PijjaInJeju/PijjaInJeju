import React, { useRef, useState, useEffect } from 'react';
import { Image } from 'react-native';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  FlatList,
  Linking,
} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';

let markerImg = require('../Image/marker.png');

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const CheckTripPlanDetail = ({ route }) => {
  console.log('CheckTripPlanDetail : ', route.params);

  let plan = route.params.plan;

  let startDay = new Date(plan.startDay);
  let endDay = new Date(plan.endDay);

  let difMicroSecond = Math.abs(startDay.getTime() - endDay.getTime());
  let difDay = Math.floor(difMicroSecond / (24 * 60 * 60 * 1000));

  const mapRef = useRef(null);

  const [mapCenter, setMapCenter] = useState({
    longitude: 126.54916661,
    latitude: 33.3616666,
  });
  const [DATA, setDATA] = useState(route.params.data);

  const [day, setDay] = useState(DATA.planList[0].day);

  const [path, setPath] = useState(DATA.planList[0].pathList);

  const [schedule, setSchedule] = useState(DATA.planList[0].data);

  const dayPickItem = ({ index, item }) => {
    //console.log("dayPiacker : ", item);
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        {
          //더미용
          item.day === undefined ? (
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
              />
            </View>
          ) : //셀렉트된 아이템
          item.day === day ? (
            <TouchableOpacity
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
                backgroundColor: '#eae2b7',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  // -4 border Width가 각 2씩 * 2
                  width: screenWidth * 0.2 - 4,
                  color: '#000000',
                }}
                onPress={() => {
                  setDay(item.day);
                  setPath(item.pathList);
                  setSchedule(item.data);
                }}
              >
                {item.day}일차
              </Text>
            </TouchableOpacity>
          ) : (
            //논 셀레트 아이템
            <TouchableOpacity
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
                backgroundColor: '#fcbf49',
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
                  setDay(item.day);
                  setPath(item.pathList);
                  setSchedule(item.data);
                }}
              >
                {item.day}일차
              </Text>
            </TouchableOpacity>
          )
        }

        {
          // 아래 라인
          item.day === day ? (
            //선택일
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
                  backgroundColor: '#eae2b7',
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
            //비 선택일
            <View
              style={{
                borderTopWidth: 2,
              }}
            />
          )
        }
      </View>
    );
  };

  const sheduleItem = ({ index, item }) => {
    //console.log(index," ", schedule.length );

    return (
      <View
        style={{
          alignItems: 'center',
          marginTop: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log(item.id, item.title, item.address, '클릭되었습니다.');
            Linking.openURL(`geo:0,0?q=${encodeURIComponent(item.address)}`);
          }}
          style={{
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                height: screenHeight * 0.05,
                width: screenHeight * 0.05,
                borderRadius: pixelRatio * 99999,
                backgroundColor: '#5382e8',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  width: screenHeight * 0.05,
                  fontSize: pixelRatio * 7,
                  alignSelf: 'center',
                  color: '#FFFFFF',
                }}
              >
                {index + 1}
              </Text>
            </View>
            <View style={styles.stick} />
          </View>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: '#777777',
                height: screenWidth * 0.05,
                width: screenWidth * 0.9,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (DATA.planList.length < 5) {
    for (let i = 5 - DATA.planList.length; i > 0; i--) {
      DATA.planList.push({});
    }
  }
  return (
    <SafeAreaView>
      <FlatList
        style={{
          //6%의 높이와 2의 border높이.
          height: screenHeight * 0.06 - 2,
        }}
        horizontal={true}
        data={DATA.planList}
        renderItem={dayPickItem}
      />
      <NaverMapView
        style={{
          width: '100%',
          height: screenHeight * 0.445,
          //top: '-10%',
          zIndex: -1,
        }}
        ref={mapRef}
        showsMyLocationButton={false}
        center={{ ...mapCenter, zoom: 8.863083459663644 }}
        //onTouch={e => console.log('onTouch', JSON.stringify(e.nativeEvent))}
        //onCameraChange={e => console.log('onCameraChange', JSON.stringify(e))}
        //onMapClick={e => console.log('onMapClick', JSON.stringify(e))}
      >
        {
          //N일차 마커
          schedule.map(item => {
            return (
              <Marker
                coordinate={item}
                width={screenWidth * 0.3}
                height={screenHeight * 0.12}
              >
                <View>
                  <Text
                    style={{
                      color: '#000000',
                      height: screenHeight * 0.02,
                      fontSize: screenHeight * 0.01,
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </Text>
                  <Image
                    source={markerImg}
                    style={{
                      width: screenWidth * 0.3,
                      height: screenHeight * 0.1,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </Marker>
            );
          })
        }
        {path.length !== 0 ? (
          <Path
            coordinates={path}
            onClick={() => {}}
            color={'rgba(255,0,0,0.3)'}
            width={4}
          />
        ) : undefined}
      </NaverMapView>
      <View
        style={{
          height: screenHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#000000',
            paddingLeft: '5%',
          }}
        >
          {difDay}박{difDay + 1}일 {startDay.getFullYear()}년{' '}
          {startDay.getMonth()}월 {startDay.getDay() + 1}일 ~{' '}
          {endDay.getFullYear()}년 {endDay.getMonth()}월 {endDay.getDay() + 1}일
        </Text>
      </View>
      <View
        style={{
          height: screenHeight * 0.445,
          padding: screenWidth * 0.02,
        }}
      >
        {schedule.length === 0 ? (
          <View
            style={{
              width: '100%',
              height: screenHeight * 0.4,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                width: '100%',
                textAlign: 'center',
                color: '#000000',
                fontSize: pixelRatio * 10,
              }}
            >
              여행지가 없어요 ㅠㅠ
            </Text>
          </View>
        ) : (
          <FlatList
            style={{
              height: screenHeight * 0.6,
            }}
            data={schedule}
            renderItem={sheduleItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: pixelRatio * 7,
    color: '#000000',
    textAlign: 'left',
    marginLeft: screenWidth * 0.01,
  },
  address: {
    fontSize: pixelRatio * 4,
    color: '#000000',
    marginLeft: screenWidth * 0.01,
    textAlign: 'left',
  },
  stick: {
    width: screenHeight * 0.025 + 1,
    height: screenHeight * 0.05,
    borderRightWidth: 2,
    borderColor: '#a0e0eb',
  },
});

export default CheckTripPlanDetail;
