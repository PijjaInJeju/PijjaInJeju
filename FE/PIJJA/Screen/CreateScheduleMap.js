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

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);

const Data = {
  placeList: [
    { id: 11, name: '조이다이브', latitude: 33.2609, longitude: 126.521 },

    { id: 12, name: '제주의봄', latitude: 33.2582, longitude: 126.513 },

    {
      id: 10,
      name: '이음새농촌교육농장',
      latitude: 33.2762,
      longitude: 126.651,
    },
  ],
  totalDistance: 14906.0,
  totalTime: 2918.0,
  pathList: [
    { latitude: 33.261086, longitude: 126.520966 },
    { latitude: 33.261086, longitude: 126.52092 },
    { latitude: 33.26104, longitude: 126.52008 },
    { latitude: 33.26099, longitude: 126.51914 },
    { latitude: 33.260975, longitude: 126.518974 },
    { latitude: 33.260956, longitude: 126.51879 },
    { latitude: 33.260933, longitude: 126.51858 },
    { latitude: 33.260788, longitude: 126.51742 },
    { latitude: 33.26071, longitude: 126.516785 },
    { latitude: 33.260628, longitude: 126.51612 },
    { latitude: 33.260487, longitude: 126.51492 },
    { latitude: 33.26048, longitude: 126.51485 },
    { latitude: 33.26048, longitude: 126.51485 },
    { latitude: 33.260128, longitude: 126.51475 },
    { latitude: 33.259056, longitude: 126.51452 },
    { latitude: 33.259003, longitude: 126.51449 },
    { latitude: 33.259003, longitude: 126.51449 },
    { latitude: 33.258976, longitude: 126.51441 },
    { latitude: 33.258938, longitude: 126.51379 },
    { latitude: 33.258915, longitude: 126.51344 },
    { latitude: 33.258904, longitude: 126.5133 },
    { latitude: 33.258904, longitude: 126.5133 },
    { latitude: 33.25849, longitude: 126.513336 },
    { latitude: 33.2582, longitude: 126.513374 },
    { latitude: 33.2582, longitude: 126.513374 },
    { latitude: 33.25818, longitude: 126.51298 },
    { latitude: 33.25818, longitude: 126.51298 },
    { latitude: 33.2582, longitude: 126.513374 },
    { latitude: 33.258217, longitude: 126.51359 },
    { latitude: 33.258236, longitude: 126.51388 },
    { latitude: 33.25824, longitude: 126.51404 },
    { latitude: 33.25823, longitude: 126.5142 },
    { latitude: 33.258217, longitude: 126.51431 },
    { latitude: 33.258198, longitude: 126.514534 },
    { latitude: 33.258198, longitude: 126.514534 },
    { latitude: 33.258194, longitude: 126.51464 },
    { latitude: 33.25816, longitude: 126.51538 },
    { latitude: 33.25811, longitude: 126.51644 },
    { latitude: 33.258087, longitude: 126.5172 },
    { latitude: 33.25808, longitude: 126.51742 },
    { latitude: 33.25804, longitude: 126.51761 },
    { latitude: 33.25799, longitude: 126.51777 },
    { latitude: 33.257942, longitude: 126.51792 },
    { latitude: 33.25779, longitude: 126.5184 },
    { latitude: 33.257763, longitude: 126.51848 },
    { latitude: 33.257763, longitude: 126.51848 },
    { latitude: 33.257793, longitude: 126.5185 },
    { latitude: 33.257812, longitude: 126.51852 },
    { latitude: 33.25783, longitude: 126.51854 },
    { latitude: 33.257843, longitude: 126.51856 },
    { latitude: 33.25785, longitude: 126.51859 },
    { latitude: 33.25786, longitude: 126.51861 },
    { latitude: 33.257862, longitude: 126.51865 },
    { latitude: 33.257862, longitude: 126.51868 },
    { latitude: 33.257854, longitude: 126.51871 },
    { latitude: 33.257843, longitude: 126.51873 },
    { latitude: 33.25783, longitude: 126.51875 },
    { latitude: 33.25781, longitude: 126.51878 },
    { latitude: 33.25779, longitude: 126.5188 },
    { latitude: 33.25776, longitude: 126.518814 },
    { latitude: 33.257732, longitude: 126.51882 },
    { latitude: 33.2577, longitude: 126.51883 },
    { latitude: 33.25768, longitude: 126.51883 },
    { latitude: 33.257652, longitude: 126.51882 },
    { latitude: 33.257652, longitude: 126.51882 },
    { latitude: 33.257572, longitude: 126.519035 },
    { latitude: 33.257492, longitude: 126.51924 },
    { latitude: 33.257423, longitude: 126.51951 },
    { latitude: 33.257412, longitude: 126.51963 },
    { latitude: 33.257412, longitude: 126.51975 },
    { latitude: 33.25741, longitude: 126.52005 },
    { latitude: 33.257404, longitude: 126.52012 },
    { latitude: 33.257404, longitude: 126.52012 },
    { latitude: 33.2574, longitude: 126.52039 },
    { latitude: 33.2574, longitude: 126.520645 },
    { latitude: 33.2574, longitude: 126.52091 },
    { latitude: 33.2574, longitude: 126.52137 },
    { latitude: 33.257404, longitude: 126.52161 },
    { latitude: 33.2574, longitude: 126.52212 },
    { latitude: 33.2574, longitude: 126.52267 },
    { latitude: 33.257397, longitude: 126.522766 },
    { latitude: 33.257397, longitude: 126.52287 },
    { latitude: 33.257393, longitude: 126.52386 },
    { latitude: 33.257393, longitude: 126.524 },
    { latitude: 33.257393, longitude: 126.5241 },
    { latitude: 33.257393, longitude: 126.524284 },
    { latitude: 33.257393, longitude: 126.52444 },
    { latitude: 33.25739, longitude: 126.52459 },
    { latitude: 33.257385, longitude: 126.52483 },
    { latitude: 33.25737, longitude: 126.52578 },
    { latitude: 33.25737, longitude: 126.52589 },
    { latitude: 33.257362, longitude: 126.52637 },
    { latitude: 33.257362, longitude: 126.526436 },
    { latitude: 33.257355, longitude: 126.52695 },
    { latitude: 33.25735, longitude: 126.527084 },
    { latitude: 33.25735, longitude: 126.52721 },
    { latitude: 33.25736, longitude: 126.527504 },
    { latitude: 33.257362, longitude: 126.527756 },
    { latitude: 33.257362, longitude: 126.52794 },
    { latitude: 33.25736, longitude: 126.5282 },
    { latitude: 33.25734, longitude: 126.52942 },
    { latitude: 33.25734, longitude: 126.52958 },
    { latitude: 33.257328, longitude: 126.53055 },
    { latitude: 33.25733, longitude: 126.53102 },
    { latitude: 33.257317, longitude: 126.53121 },
    { latitude: 33.25731, longitude: 126.53129 },
    { latitude: 33.2573, longitude: 126.531395 },
    { latitude: 33.257206, longitude: 126.53244 },
    { latitude: 33.25702, longitude: 126.53367 },
    { latitude: 33.256992, longitude: 126.53387 },
    { latitude: 33.256958, longitude: 126.53409 },
    { latitude: 33.25686, longitude: 126.534454 },
    { latitude: 33.2566, longitude: 126.53529 },
    { latitude: 33.25632, longitude: 126.53621 },
    { latitude: 33.25617, longitude: 126.53658 },
    { latitude: 33.25585, longitude: 126.53725 },
    { latitude: 33.25584, longitude: 126.53728 },
    { latitude: 33.255745, longitude: 126.53764 },
    { latitude: 33.255604, longitude: 126.53836 },
    { latitude: 33.25556, longitude: 126.538574 },
    { latitude: 33.255554, longitude: 126.53863 },
    { latitude: 33.25523, longitude: 126.54036 },
    { latitude: 33.2552, longitude: 126.540794 },
    { latitude: 33.25517, longitude: 126.54115 },
    { latitude: 33.25517, longitude: 126.54115 },
    { latitude: 33.255196, longitude: 126.54137 },
    { latitude: 33.25532, longitude: 126.54264 },
    { latitude: 33.255375, longitude: 126.54307 },
    { latitude: 33.25541, longitude: 126.54348 },
    { latitude: 33.25541, longitude: 126.54373 },
    { latitude: 33.25541, longitude: 126.54379 },
    { latitude: 33.255398, longitude: 126.54403 },
    { latitude: 33.25533, longitude: 126.54452 },
    { latitude: 33.255276, longitude: 126.54477 },
    { latitude: 33.255234, longitude: 126.54494 },
    { latitude: 33.25522, longitude: 126.545006 },
    { latitude: 33.255104, longitude: 126.54537 },
    { latitude: 33.254898, longitude: 126.54586 },
    { latitude: 33.254433, longitude: 126.54694 },
    { latitude: 33.254414, longitude: 126.547005 },
    { latitude: 33.25441, longitude: 126.54702 },
    { latitude: 33.25424, longitude: 126.547424 },
    { latitude: 33.25409, longitude: 126.54777 },
    { latitude: 33.25327, longitude: 126.54966 },
    { latitude: 33.253185, longitude: 126.54986 },
    { latitude: 33.252953, longitude: 126.55039 },
    { latitude: 33.2529, longitude: 126.550514 },
    { latitude: 33.252518, longitude: 126.55134 },
    { latitude: 33.252148, longitude: 126.55217 },
    { latitude: 33.252064, longitude: 126.552376 },
    { latitude: 33.251987, longitude: 126.55264 },
    { latitude: 33.25195, longitude: 126.55304 },
    { latitude: 33.25197, longitude: 126.55339 },
    { latitude: 33.25198, longitude: 126.55346 },
    { latitude: 33.252003, longitude: 126.553604 },
    { latitude: 33.25208, longitude: 126.554085 },
    { latitude: 33.252216, longitude: 126.55498 },
    { latitude: 33.252235, longitude: 126.5551 },
    { latitude: 33.25226, longitude: 126.555275 },
    { latitude: 33.25231, longitude: 126.55565 },
    { latitude: 33.25243, longitude: 126.55646 },
    { latitude: 33.252613, longitude: 126.55774 },
    { latitude: 33.252625, longitude: 126.55781 },
    { latitude: 33.25263, longitude: 126.55784 },
    { latitude: 33.252846, longitude: 126.55918 },
    { latitude: 33.252865, longitude: 126.55929 },
    { latitude: 33.253, longitude: 126.560074 },
    { latitude: 33.253063, longitude: 126.560486 },
    { latitude: 33.25313, longitude: 126.560905 },
    { latitude: 33.253174, longitude: 126.56114 },
    { latitude: 33.253178, longitude: 126.561165 },
    { latitude: 33.25327, longitude: 126.5616 },
    { latitude: 33.253464, longitude: 126.56252 },
    { latitude: 33.25349, longitude: 126.56265 },
    { latitude: 33.253525, longitude: 126.562836 },
    { latitude: 33.253544, longitude: 126.56292 },
    { latitude: 33.253574, longitude: 126.56305 },
    { latitude: 33.25363, longitude: 126.563324 },
    { latitude: 33.253757, longitude: 126.563934 },
    { latitude: 33.253807, longitude: 126.56418 },
    { latitude: 33.253857, longitude: 126.56442 },
    { latitude: 33.254, longitude: 126.56514 },
    { latitude: 33.254055, longitude: 126.56541 },
    { latitude: 33.254086, longitude: 126.56555 },
    { latitude: 33.254112, longitude: 126.56568 },
    { latitude: 33.254154, longitude: 126.5659 },
    { latitude: 33.254177, longitude: 126.56598 },
    { latitude: 33.25435, longitude: 126.56683 },
    { latitude: 33.25444, longitude: 126.56726 },
    { latitude: 33.25447, longitude: 126.567406 },
    { latitude: 33.254505, longitude: 126.567635 },
    { latitude: 33.254505, longitude: 126.56767 },
    { latitude: 33.254513, longitude: 126.567696 },
    { latitude: 33.254536, longitude: 126.5679 },
    { latitude: 33.254543, longitude: 126.568 },
    { latitude: 33.254604, longitude: 126.56895 },
    { latitude: 33.254604, longitude: 126.569 },
    { latitude: 33.254658, longitude: 126.56975 },
    { latitude: 33.254738, longitude: 126.57098 },
    { latitude: 33.254795, longitude: 126.571945 },
    { latitude: 33.254807, longitude: 126.5721 },
    { latitude: 33.25481, longitude: 126.57311 },
    { latitude: 33.25481, longitude: 126.57352 },
    { latitude: 33.25481, longitude: 126.57369 },
    { latitude: 33.254803, longitude: 126.57496 },
    { latitude: 33.254795, longitude: 126.576004 },
    { latitude: 33.254803, longitude: 126.57676 },
    { latitude: 33.254807, longitude: 126.57715 },
    { latitude: 33.25481, longitude: 126.577225 },
    { latitude: 33.254845, longitude: 126.577614 },
    { latitude: 33.254887, longitude: 126.57774 },
    { latitude: 33.25568, longitude: 126.58011 },
    { latitude: 33.25576, longitude: 126.58036 },
    { latitude: 33.256046, longitude: 126.581215 },
    { latitude: 33.256203, longitude: 126.58168 },
    { latitude: 33.25624, longitude: 126.58179 },
    { latitude: 33.256416, longitude: 126.58235 },
    { latitude: 33.256557, longitude: 126.5828 },
    { latitude: 33.25691, longitude: 126.583916 },
    { latitude: 33.257027, longitude: 126.58432 },
    { latitude: 33.257374, longitude: 126.58551 },
    { latitude: 33.257538, longitude: 126.58606 },
    { latitude: 33.257565, longitude: 126.58615 },
    { latitude: 33.25768, longitude: 126.58651 },
    { latitude: 33.257885, longitude: 126.58717 },
    { latitude: 33.25802, longitude: 126.5876 },
    { latitude: 33.258057, longitude: 126.58773 },
    { latitude: 33.258106, longitude: 126.587906 },
    { latitude: 33.258377, longitude: 126.5889 },
    { latitude: 33.2585, longitude: 126.58963 },
    { latitude: 33.2585, longitude: 126.58967 },
    { latitude: 33.25864, longitude: 126.590836 },
    { latitude: 33.258667, longitude: 126.59106 },
    { latitude: 33.258816, longitude: 126.59215 },
    { latitude: 33.258816, longitude: 126.59217 },
    { latitude: 33.25892, longitude: 126.59278 },
    { latitude: 33.25898, longitude: 126.59308 },
    { latitude: 33.25908, longitude: 126.593414 },
    { latitude: 33.2591, longitude: 126.59348 },
    { latitude: 33.259136, longitude: 126.5936 },
    { latitude: 33.25922, longitude: 126.59384 },
    { latitude: 33.259247, longitude: 126.593925 },
    { latitude: 33.259407, longitude: 126.594406 },
    { latitude: 33.25949, longitude: 126.59475 },
    { latitude: 33.259552, longitude: 126.595055 },
    { latitude: 33.259613, longitude: 126.595436 },
    { latitude: 33.259636, longitude: 126.595634 },
    { latitude: 33.2599, longitude: 126.59782 },
    { latitude: 33.25992, longitude: 126.59792 },
    { latitude: 33.260155, longitude: 126.59971 },
    { latitude: 33.2602, longitude: 126.599846 },
    { latitude: 33.26038, longitude: 126.600525 },
    { latitude: 33.26038, longitude: 126.600525 },
    { latitude: 33.260403, longitude: 126.60053 },
    { latitude: 33.26043, longitude: 126.60054 },
    { latitude: 33.26045, longitude: 126.60056 },
    { latitude: 33.26047, longitude: 126.60059 },
    { latitude: 33.260483, longitude: 126.600624 },
    { latitude: 33.26049, longitude: 126.60066 },
    { latitude: 33.260494, longitude: 126.6007 },
    { latitude: 33.260494, longitude: 126.60072 },
    { latitude: 33.260494, longitude: 126.60074 },
    { latitude: 33.260494, longitude: 126.60074 },
    { latitude: 33.26049, longitude: 126.60076 },
    { latitude: 33.26049, longitude: 126.60077 },
    { latitude: 33.260483, longitude: 126.60079 },
    { latitude: 33.26047, longitude: 126.60081 },
    { latitude: 33.26046, longitude: 126.60082 },
    { latitude: 33.26044, longitude: 126.60084 },
    { latitude: 33.26044, longitude: 126.60084 },
    { latitude: 33.26041, longitude: 126.60119 },
    { latitude: 33.260406, longitude: 126.60125 },
    { latitude: 33.260395, longitude: 126.60161 },
    { latitude: 33.260387, longitude: 126.60172 },
    { latitude: 33.260387, longitude: 126.60175 },
    { latitude: 33.260418, longitude: 126.60203 },
    { latitude: 33.260445, longitude: 126.60225 },
    { latitude: 33.260464, longitude: 126.60265 },
    { latitude: 33.26049, longitude: 126.603806 },
    { latitude: 33.26049, longitude: 126.60423 },
    { latitude: 33.260513, longitude: 126.60797 },
    { latitude: 33.260544, longitude: 126.61139 },
    { latitude: 33.260544, longitude: 126.612335 },
    { latitude: 33.260544, longitude: 126.61258 },
    { latitude: 33.26055, longitude: 126.61301 },
    { latitude: 33.260548, longitude: 126.61356 },
    { latitude: 33.26055, longitude: 126.61373 },
    { latitude: 33.260544, longitude: 126.613976 },
    { latitude: 33.260548, longitude: 126.61522 },
    { latitude: 33.260544, longitude: 126.615875 },
    { latitude: 33.260544, longitude: 126.61597 },
    { latitude: 33.260544, longitude: 126.61699 },
    { latitude: 33.26054, longitude: 126.61752 },
    { latitude: 33.260536, longitude: 126.617584 },
    { latitude: 33.26054, longitude: 126.61766 },
    { latitude: 33.26056, longitude: 126.6183 },
    { latitude: 33.260567, longitude: 126.61844 },
    { latitude: 33.26059, longitude: 126.61857 },
    { latitude: 33.26062, longitude: 126.61874 },
    { latitude: 33.26078, longitude: 126.61923 },
    { latitude: 33.260933, longitude: 126.619514 },
    { latitude: 33.261055, longitude: 126.61969 },
    { latitude: 33.261288, longitude: 126.61999 },
    { latitude: 33.26144, longitude: 126.62014 },
    { latitude: 33.261654, longitude: 126.62036 },
    { latitude: 33.261707, longitude: 126.620415 },
    { latitude: 33.26184, longitude: 126.62056 },
    { latitude: 33.261913, longitude: 126.62063 },
    { latitude: 33.26193, longitude: 126.62064 },
    { latitude: 33.262764, longitude: 126.621475 },
    { latitude: 33.262905, longitude: 126.621635 },
    { latitude: 33.263016, longitude: 126.62179 },
    { latitude: 33.26311, longitude: 126.621956 },
    { latitude: 33.263294, longitude: 126.62226 },
    { latitude: 33.263412, longitude: 126.62257 },
    { latitude: 33.263477, longitude: 126.6228 },
    { latitude: 33.263493, longitude: 126.622925 },
    { latitude: 33.263496, longitude: 126.623024 },
    { latitude: 33.263496, longitude: 126.62308 },
    { latitude: 33.263508, longitude: 126.62325 },
    { latitude: 33.26352, longitude: 126.623436 },
    { latitude: 33.263515, longitude: 126.62379 },
    { latitude: 33.26352, longitude: 126.624054 },
    { latitude: 33.263515, longitude: 126.624146 },
    { latitude: 33.263508, longitude: 126.624855 },
    { latitude: 33.263504, longitude: 126.625244 },
    { latitude: 33.263477, longitude: 126.62603 },
    { latitude: 33.26347, longitude: 126.626434 },
    { latitude: 33.263447, longitude: 126.62755 },
    { latitude: 33.263454, longitude: 126.62842 },
    { latitude: 33.263454, longitude: 126.62843 },
    { latitude: 33.263454, longitude: 126.62873 },
    { latitude: 33.263477, longitude: 126.629135 },
    { latitude: 33.263477, longitude: 126.629166 },
    { latitude: 33.2635, longitude: 126.62952 },
    { latitude: 33.26353, longitude: 126.629845 },
    { latitude: 33.263683, longitude: 126.63108 },
    { latitude: 33.26372, longitude: 126.63133 },
    { latitude: 33.26378, longitude: 126.63172 },
    { latitude: 33.263824, longitude: 126.632 },
    { latitude: 33.26389, longitude: 126.632484 },
    { latitude: 33.264015, longitude: 126.63346 },
    { latitude: 33.264095, longitude: 126.63431 },
    { latitude: 33.26413, longitude: 126.63472 },
    { latitude: 33.264153, longitude: 126.63497 },
    { latitude: 33.26422, longitude: 126.635826 },
    { latitude: 33.264263, longitude: 126.63635 },
    { latitude: 33.264313, longitude: 126.636795 },
    { latitude: 33.264336, longitude: 126.63702 },
    { latitude: 33.26451, longitude: 126.63781 },
    { latitude: 33.264664, longitude: 126.63837 },
    { latitude: 33.264706, longitude: 126.63851 },
    { latitude: 33.264744, longitude: 126.63864 },
    { latitude: 33.264904, longitude: 126.63907 },
    { latitude: 33.26502, longitude: 126.63933 },
    { latitude: 33.26502, longitude: 126.63933 },
    { latitude: 33.265152, longitude: 126.639626 },
    { latitude: 33.265156, longitude: 126.63964 },
    { latitude: 33.265392, longitude: 126.640045 },
    { latitude: 33.26552, longitude: 126.640274 },
    { latitude: 33.265587, longitude: 126.6404 },
    { latitude: 33.26561, longitude: 126.640434 },
    { latitude: 33.26571, longitude: 126.6406 },
    { latitude: 33.265743, longitude: 126.64066 },
    { latitude: 33.26633, longitude: 126.6417 },
    { latitude: 33.26653, longitude: 126.64204 },
    { latitude: 33.2666, longitude: 126.64215 },
    { latitude: 33.266777, longitude: 126.64245 },
    { latitude: 33.266914, longitude: 126.642685 },
    { latitude: 33.266933, longitude: 126.642715 },
    { latitude: 33.267036, longitude: 126.64287 },
    { latitude: 33.267193, longitude: 126.64311 },
    { latitude: 33.267548, longitude: 126.643585 },
    { latitude: 33.267647, longitude: 126.6437 },
    { latitude: 33.267822, longitude: 126.643906 },
    { latitude: 33.267864, longitude: 126.64396 },
    { latitude: 33.268684, longitude: 126.64494 },
    { latitude: 33.268726, longitude: 126.645 },
    { latitude: 33.268967, longitude: 126.645256 },
    { latitude: 33.269333, longitude: 126.64562 },
    { latitude: 33.269657, longitude: 126.64593 },
    { latitude: 33.269882, longitude: 126.64614 },
    { latitude: 33.27036, longitude: 126.6466 },
    { latitude: 33.270485, longitude: 126.64672 },
    { latitude: 33.270844, longitude: 126.64706 },
    { latitude: 33.271084, longitude: 126.647285 },
    { latitude: 33.271683, longitude: 126.64787 },
    { latitude: 33.272007, longitude: 126.64819 },
    { latitude: 33.27217, longitude: 126.64836 },
    { latitude: 33.273445, longitude: 126.649635 },
    { latitude: 33.273754, longitude: 126.64995 },
    { latitude: 33.274063, longitude: 126.65028 },
    { latitude: 33.27408, longitude: 126.6503 },
    { latitude: 33.27414, longitude: 126.650375 },
    { latitude: 33.27449, longitude: 126.65079 },
    { latitude: 33.274548, longitude: 126.65086 },
    { latitude: 33.27465, longitude: 126.650986 },
    { latitude: 33.27468, longitude: 126.651024 },
    { latitude: 33.27468, longitude: 126.651024 },
    { latitude: 33.274796, longitude: 126.65083 },
    { latitude: 33.274822, longitude: 126.650795 },
    { latitude: 33.27486, longitude: 126.650764 },
    { latitude: 33.274902, longitude: 126.65074 },
    { latitude: 33.274963, longitude: 126.65073 },
    { latitude: 33.275146, longitude: 126.650696 },
    { latitude: 33.275307, longitude: 126.650696 },
    { latitude: 33.27541, longitude: 126.650696 },
    { latitude: 33.27575, longitude: 126.65075 },
    { latitude: 33.275826, longitude: 126.65076 },
    { latitude: 33.276184, longitude: 126.65076 },
  ],
};

const CreateScheduleMap = ({ navigation, route }) => {
  // hooks
  const sheetRef = useRef(null);
  const mapRef = useRef(null);

  console.log('CreateScheduleMap route: ', route.params);

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
          onCameraChange={e => console.log('onCameraChange', JSON.stringify(e))}
          onMapClick={e => console.log('onMapClick', JSON.stringify(e))}
        >
          {
            //searchList.map( (coordinate)=>{
            //console.log(coordinate);
            //return (
            //<Marker coordinate={coordinate} pinColor="blue" onClick={() => console.warn('coordinate' , coordinate.title)} />
            //);
            //})
          }

          {Data.placeList.map(coordinate => {
            console.log(coordinate);
            return (
              <Marker
                coordinate={coordinate}
                pinColor="blue"
                onClick={() => console.warn('coordinate', coordinate.name)}
              />
            );
          })}
          {
            //<Marker coordinate={Start} pinColor="blue" onClick={() => console.warn('onClick! Start')} />
            //<Marker coordinate={End   pinColor="red"  onClick={() => console.warn('onClick! End')} />
            <Path
              coordinates={Data.pathList}
              onClick={() => console.warn('onClick! path')}
              color={'rgba(255,0,0,0.3)'}
              width={4}
            />

            //<Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10}/>
            //<Polyline coordinates={[P1, P2]} onClick={() => console.warn('onClick! polyline')}/>
            //<Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => console.warn('onClick! circle')}/>
            //<Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.warn('onClick! polygon')}/>
          }
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
                  navigation.push('RecommendSchedule', {
                    scheduleList: res,
                    travelMate: route.params.travelMate,
                    groupStyles: route.params.groupStyles,
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
                console.log(keyword);
                setSearch(keyword);
                Rest(
                  '/api/places/serachPlace',
                  'POST',
                  {
                    title: keyword,
                  },
                  res => {
                    console.log(res);
                    setSearchList(res);
                  },
                  e => {
                    console.error(e);
                  },
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
