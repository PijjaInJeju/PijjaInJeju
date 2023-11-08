import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React, { useState, useEffect,useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import Carousel,{ Pagination } from 'react-native-snap-carousel';
import One from './Carousel/One';
import Two from './Carousel/Two'

import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const Main = ({ navigation, route }) => {
  const [groupList,setGroupList] = useState([
    {
      id: 1,
      schedule: [
        {
          id: 1,
          title: "1번",
        },
        {
          id: 2,
          title: "2번",
        }
      ]
    },
    {
      id: 2,
    }
  ]);
  //console.log("Main Profile  :  ", route.params.profile);
  const data = [
    {
      screen: One,
      data: {
        profile: route.params.profile,
        groupList: groupList,
        setGroupList: setGroupList,
      }
    },
    {
      screen: Two,
      data: {
        profile: route.params.profile,
        groupList: groupList,
        setGroupList: setGroupList,
        nickName: "asd"
      }
    },
  ];


  const renderItem = ({item, index}) => {
    return (
        <View>
            <item.screen data={item.data}/>
        </View>
    );
  }
  
  const [ activeSlide, setActiveSlide ] = useState();
  const activeRef = useRef(null);
  return (
    <SafeAreaView>
      <Carousel
        vertical={true}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        sliderHeight={screenHeight}
        itemHeight={screenHeight}
        onSnapToItem={(index) => {
          setActiveSlide(index);
          console.log(index);
        }}
        ref={activeRef}
      />
      <Pagination 
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{ 
          height: screenHeight, 
          position: 'absolute'
         }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginVertical: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        vertical={true}
        carouselRef={activeRef}
        tappableDots={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Main;
