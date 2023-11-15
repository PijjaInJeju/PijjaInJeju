import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Image,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import Header from '../../component/Header';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const closeSize = 7 * pixelRatio;

const zeroLengthGroupComponent = () => {};

const fullLengthGroupCompoent = () => {};

const backGroundImageList = [
  require('../../Image/jeju1.jpg'),
  require('../../Image/jeju2.jpg'),
  require('../../Image/jeju3.jpg'),
  require('../../Image/jeju4.jpg'),
];

const One = ({ data }) => {
  let profile = data.profile;
  let groupList = data.groupList;
  let setGroupList = data.setGroupList;
  const [activeSlide, setActiveSlide] = useState(0);
  const activeRef = useRef(null);
  const renderDots = () => null;

  console.log('one Data : ', data);

  const drawBackGroundImage = ({ item }) => {
    console.log('item : ', item);
    return (
      <Image
        style={{
          width: screenWidth,
          height: screenHeight,
          zIndex: -50,
        }}
        source={item}
      />
    );
  };

  return (
    <View>
      <Carousel
        style={{
          position: 'absolute',
          zIndex: -1,
        }}
        data={backGroundImageList}
        renderItem={drawBackGroundImage}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        sliderHeight={screenHeight}
        itemHeight={screenHeight}
        onSnapToItem={index => {
          setActiveSlide(index);
          console.log(index);
        }}
        ref={activeRef}
      />
      <Pagination
        dotsLength={backGroundImageList.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          zIndex: 10,
          bottom: '10%',
          width: '100%',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        carouselRef={activeRef}
        renderDots={renderDots}
      />
      <View
  style={{
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    height: screenHeight * 0.5,
    width: screenWidth,
    marginTop: screenHeight * 0.06,
    fontWeight: 'bold',
  }}
>
  <Text
    style={{
      color: 'white',
      width: '90%',
      alignSelf: 'center',
      textAlign: 'left',
      fontSize: pixelRatio * 6,
    }}
  >
    <Text style={{ color: 'orange' }}>{profile.nickname}</Text> 님 환영합니다.
  </Text>
  <View
    style={{
      borderTopWidth: 2,
      borderTopColor: 'orange',
      alignSelf: 'center',
      width: '90%',
    }}
  />
</View>
      <View
  style={{
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
    height: screenHeight,
  }}
>
  <Text
    style={{
      width: screenWidth,
      textAlign: 'center',
      fontSize: pixelRatio * 8,
      fontWeight: 'bold', // 볼드체 스타일 추가
      color: 'whitesmoke', // 흰색으로 설정
      marginBottom: screenHeight * 0.5,
    }}
  >
    가을 바람과 함께하는{'\n'}
    특별한 제주 여행
  </Text>
</View>
    </View>
  );
};
export default One;
