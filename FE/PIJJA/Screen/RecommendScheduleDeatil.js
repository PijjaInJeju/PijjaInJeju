import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import GetRest from '../lib/GetRest.js';
import Fontisto from 'react-native-vector-icons/Fontisto';

const recommendData = {
  title: '추천 여행지',
  data: [
    {
      id: 23,
      title: '부커피',
      latitude: 33.5189764,
      longitude: 126.49214,
      tag: '식도락 여행',
      image:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202305/31/f4b373be-72b9-41da-a4fe-171520f685fb.jpg',
    },
    {
      id: 345,
      title: '제주설심당 본점',
      latitude: 33.5194453,
      longitude: 126.493001,
      tag: '식도락 여행',
      image:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202112/29/347b96b5-c18c-4584-96f7-db42f31b0214.jpg',
    },
    {
      id: 349,
      title: '솔리브레',
      latitude: 33.5195001,
      longitude: 126.4937234,
      tag: '식도락 여행',
      image:
        'https://api.cdn.visitjeju.net/photomng/imgpath/202207/06/baa4505f-abe7-4c17-ad74-78ac7846afc4.jpg',
    },
  ],
};

const RecommendScheduleDeatil = ({ route }) => {
  const { companionId } = route.params;
  console.log(companionId);
  <SafeAreaView>
    <View>
      <SectionList
        sections={recommendData}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.nowTravelTitle}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <View>
              <Image source={item.image} style={[styles.img]} />
            </View>
            <Text>등 록</Text>
          </View>
        )}
      ></SectionList>
    </View>
  </SafeAreaView>;
};
const styles = StyleSheet.create({});

export default RecommendScheduleDeatil;
