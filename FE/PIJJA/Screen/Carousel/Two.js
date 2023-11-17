import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  PixelRatio,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from '../../component/Header';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const noImage = require('../../Image/s_noImage.jpg');
const back = require('../../Image/clouds.jpg');

const Two = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // 추천 여행 데이터
  let profile = data.profile;
  let groupList = data.groupList;
  let setGroupList = data.setGroupList;
  const groupListItem = ({ item }) => {
    //console.log(item);
    return (
      <View
        style={{
          alignItems: 'center',
          width: screenWidth * 0.7,
        }}
      >
        <Image
          style={{
            width: screenWidth * 0.7,
            height: screenHeight * 0.3,
            resizeMode: 'contain',
          }}
          source={noImage}
        />
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            borderColor: 'black',
            width: screenWidth * 0.7,
            height: screenHeight * 0.2,
            alignItems: 'center', // 수직 가운데 정렬을 위해 추가
          }}
        >
          <View
            style={{
              width: screenWidth * 0.6,
              height: screenHeight * 0.1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'black',
              }}
            >
              {item.schedule.title}
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  alignSelf: 'flex-end',
                  color: 'black',
                }}
              >
                자세히 보기
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Header title={''} />
      <Image
        style={{
          position: 'absolute',
          zIndex: -1,
        }}
        source={back}
      />
      <View
        style={{
          width: screenWidth,
          height: screenHeight,
          paddingTop: '7%',
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: pixelRatio * 9,
            paddingLeft: '10%',
          }}
        >
          나의 여행지 보기
        </Text>
        <View
          style={{
            width: screenWidth * 0.7,
            height: screenHeight * 0.4,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'gray',
            alignSelf: 'center',
            backgroundColor: 'white',
          }}
        >
          {groupList.length === 0 ? (
            <Text
              style={{
                width: screenWidth * 0.6,
                color: 'black',
                flex: 1,
                fontSize: pixelRatio * 3.5,
              }}
            >
              여행 가는곳이 없어요 ㅠㅠ..
            </Text>
          ) : (
            <View
              style={{
                alignSelf: 'center',
              }}
            >
              <Carousel
                data={groupList}
                renderItem={groupListItem}
                sliderWidth={screenWidth * 0.7}
                itemWidth={screenWidth * 0.7}
                sliderHeight={screenHeight}
                itemHeight={screenHeight}
                onSnapToItem={index => {
                  setActiveSlide(index);
                  //console.log(index);
                }}
              />
            </View>
          )}
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: pixelRatio * 9,
            paddingLeft: '10%',
            marginTop: '5%',
          }}
        >
          여행지 추천
        </Text>
        <View
          style={{
            width: screenWidth * 0.7,
            height: screenHeight * 0.3,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'gray',
            alignSelf: 'center',
            backgroundColor: 'white',
          }}
        >
          {groupList.length === 0 ? (
            <Text
              style={{
                width: screenWidth * 0.6,
                color: 'black',
                flex: 1,
                fontSize: pixelRatio * 3.5,
              }}
            >
              여행 가는곳이 없어요 ㅠㅠ..
            </Text>
          ) : (
            <View
              style={{
                alignSelf: 'center',
              }}
            >
              <Carousel
                data={groupList}
                renderItem={groupListItem}
                sliderWidth={screenWidth * 0.7}
                itemWidth={screenWidth * 0.7}
                sliderHeight={screenHeight}
                itemHeight={screenHeight}
                onSnapToItem={index => {
                  setActiveSlide(index);
                  //console.log(index);
                }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default Two;
