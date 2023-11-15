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

const CheckTripPlanDetail = ({ route }) => {
  const { companionId } = route.params;
  console.log(companionId);
};
const styles = StyleSheet.create({});

export default CheckTripPlanDetail;
