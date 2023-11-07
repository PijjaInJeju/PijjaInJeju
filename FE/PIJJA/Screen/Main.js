import 'react-native-gesture-handler'; // 파일의 가장 최상단에 위치해야함
import React, { useState } from 'react';
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

import Carousel from 'react-native-snap-carousel';
import One from './Carousel/One';
import Two from './Carousel/Two'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const Main = () => {
  const data = [
    {
      screen: One,
      data: {
        nickName: "asd"
      }
    },
    {
      screen: Two,
      data: {
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Main;
