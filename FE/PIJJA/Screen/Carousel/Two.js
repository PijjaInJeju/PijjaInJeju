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
// https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/34a6fc15-1aae-4781-9db2-7c32ffd3a3be.jpg
// const noImage = require('../../Image/s_noImage.jpg');
const travelReadyImg = require('../../Image/k_travelReady.png');
const back = require('../../Image/clouds.jpg');

const Two = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // 추천 여행 데이터
  let profile = data.profile;
  let nowTravelList = data.nowTravelData;
  let travelRecoList = data.travelReco;
  let setGroupList = data.setGroupList;

  // console.log(nowTravelList[0].title);

  const nowTravelItem = ({ item }) => {
    //console.log(item);
    return (
      <View
        style={{
          alignItems: 'center',
          width: screenWidth * 0.7,
          height: screenHeight * 0.3,
        }}
      >
        <Image
          style={{
            width: screenWidth * 0.2,
            height: screenHeight * 0.2,
            resizeMode: 'contain',
            position: 'absolute',
            top: '10%',
            left: '62%',
            zIndex: -1,
          }}
          source={travelReadyImg}
        />
        <View
          style={{
            width: screenWidth * 0.6,
            flexDirection: 'column',
            //alignItems: 'center',
          }}
        >
          <Text
            style={{
              marginTop: '9%',
              fontSize: 22,
              color: '#f77f00',
              start: '2%',
            }}
          >
            Upcoming Trip
          </Text>
          <Text
            style={{
              color: 'black',
              marginTop: '6%',
              start: '5%',
              fontSize: 18,
            }}
          >
            {nowTravelList[0].name}
          </Text>
          <View
            style={{
              marginTop: '16%',
              start: '26%',
            }}
          >
            {/* <Text>{nowTravelList[0].startDay}</Text>
              <Text>{nowTravelList[0].endDay}</Text> */}
            <Text
              style={{
                fontSize: 14,
              }}
            >{`출발:  ${
              nowTravelList[0].startDay.split('T')[0].split('-')[0]
            }년 ${nowTravelList[0].startDay.split('T')[0].split('-')[1]}월 ${
              nowTravelList[0].startDay.split('T')[0].split('-')[2]
            }일 `}</Text>
            <Text
              style={{
                fontSize: 14,
              }}
            >{`도착:  ${
              nowTravelList[0].endDay.split('T')[0].split('-')[0]
            }년 ${nowTravelList[0].endDay.split('T')[0].split('-')[1]}월 ${
              nowTravelList[0].endDay.split('T')[0].split('-')[2]
            }일`}</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}
          ></View>
        </View>
      </View>
    );
  };

  const travelRecoItem = ({ item }) => {
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
            borderRadius: 25,
            resizeMode: 'contain',
          }}
          source={{ uri: item.image }}
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
              {item.title}
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
                {item.tag}
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
            marginTop: 10,
          }}
        >
          다가오는 여행
        </Text>
        <View
          style={{
            width: screenWidth * 0.7,
            height: screenHeight * 0.26,
            marginTop: 16,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'gray',
            alignSelf: 'center',
            backgroundColor: 'white',
          }}
        >
          {nowTravelList.length === 0 ? (
            <Text
              style={{
                width: screenWidth * 0.6,
                color: 'black',
                flex: 1,
                fontSize: pixelRatio * 3.5,
              }}
            >
              여행 일정을 등록해주세요.
            </Text>
          ) : (
            <View
              style={{
                alignSelf: 'center',
              }}
            >
              <Carousel
                data={nowTravelList}
                renderItem={nowTravelItem}
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
            marginTop: 26,
          }}
        >
          여행 추천
        </Text>
        <View
          style={{
            width: screenWidth * 0.7,
            height: screenHeight * 0.37,
            borderWidth: 1,
            borderRadius: 25,
            borderColor: 'gray',
            alignSelf: 'center',
            backgroundColor: 'white',
            marginTop: 16,
          }}
        >
          {travelRecoList.length === 0 ? (
            <Text
              style={{
                width: screenWidth * 0.6,
                color: 'black',
                flex: 1,
                fontSize: pixelRatio * 3.5,
              }}
            >
              여행 일정을 만들어 주세요.
            </Text>
          ) : (
            <View
              style={{
                alignSelf: 'center',
              }}
            >
              <Carousel
                data={travelRecoList}
                renderItem={travelRecoItem}
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
