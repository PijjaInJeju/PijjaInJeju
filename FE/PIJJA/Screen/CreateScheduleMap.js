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
  const { companionId, name, totalDay } = route.params;
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

  const [searchList, setSearchList] = useState([
    {
      id: 1088,
      title: '별오름 노형점',
      address: '제주특별자치도 제주시 노형동 683-1',
    },
    {
      id: 1234,
      title: '대수산봉(큰물뫼,물미오름)',
      address: '제주특별자치도 서귀포시 성산읍 고성리 2039-1',
    },
    {
      id: 1235,
      title: '통오름',
      address: '제주특별자치도 서귀포시 성산읍 신산리 1754-1',
    },
    {
      id: 1236,
      title: '도리미오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 255-1',
    },
    {
      id: 1237,
      title: '비치미오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 255-1',
    },
    {
      id: 1244,
      title: '입산봉(삿갓오름)',
      address: '제주특별자치도 제주시 구좌읍 김녕리 1033-19',
    },
    {
      id: 1245,
      title: '부대악오름',
      address: '제주특별자치도 제주시 조천읍 선흘리 산 103',
    },
    {
      id: 1246,
      title: '샘이오름',
      address: '제주특별자치도 제주시 조천읍 516로',
    },
    {
      id: 1289,
      title: '마켓오름',
      address: '제주특별자치도 서귀포시 서호동 24-6',
    },
    {
      id: 1468,
      title: '각시바우오름',
      address: '제주특별자치도 서귀포시 호근동 2112',
    },
    {
      id: 1483,
      title: '영천악(영천오름)',
      address: '제주특별자치도 서귀포시 상효동 산 122-8',
    },
    {
      id: 1486,
      title: '돛오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 3',
    },
    {
      id: 1501,
      title: '웃세오름(족은오름)',
      address: '제주특별자치도 제주시 애월읍 평화로',
    },
    {
      id: 1506,
      title: '발이오름',
      address: '제주특별자치도 제주시 애월읍 어음리 산1',
    },
    {
      id: 1507,
      title: '큰바리메오름',
      address: '제주시 바리메오름',
    },
    {
      id: 1514,
      title: '문석이오름 [출입제한 - 자연휴식년제 적용 중]',
      address: '제주특별자치도 제주시 구좌읍 송당리',
    },
    {
      id: 1519,
      title: '개오리오름',
      address: '제주특별자치도 제주시 봉개동',
    },
    {
      id: 1521,
      title: '궁대오름(궁대악)',
      address: '제주특별자치도 서귀포시 성산읍 수산리 4711-8',
    },
    {
      id: 1545,
      title: '알밤(알바매기, 알밤오름)',
      address: '제주특별자치도 제주시 조천읍 선흘남4길 229',
    },
    {
      id: 1546,
      title: '고내봉(고내오름,고니오름,망오름)',
      address: '제주특별자치도 제주시 애월읍 고내리 산3-1',
    },
    {
      id: 1550,
      title: '바늘오름',
      address: '제주특별자치도 제주시 조천읍 교래리',
    },
    {
      id: 1563,
      title: '예절이오름(여절악)',
      address: '제주특별자치도 제주시 애월읍 하귀1리 379-1',
    },
    {
      id: 1589,
      title: '누운오름(한림읍)',
      address: '제주특별자치도 제주시 한림읍 금악리 188-2',
    },
    {
      id: 1592,
      title: '성불오름',
      address: '제주 제주시 구좌읍 중산간동로 2532',
    },
    {
      id: 1618,
      title: '당오름(안덕면)',
      address: '제주특별자치도 서귀포시 안덕면 동광리 산 68-1',
    },
    {
      id: 1619,
      title: '당오름(한경면)',
      address: '제주특별자치도 제주시 한경면 용수리 산 18',
    },
    {
      id: 1625,
      title: '당오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 199-1',
    },
    {
      id: 1630,
      title: '돔박이오름 (동박악)',
      address: '제주특별자치도 서귀포시 안덕면 광평리 산 89',
    },
    {
      id: 1674,
      title: '북오름',
      address: '제주특별자치도 서귀포시 안덕면 동광리 산 94',
    },
    {
      id: 1680,
      title: '두산봉(말미오름)',
      address: '제주특별자치도 서귀포시 성산읍 시흥리 산 1-5',
    },
    {
      id: 1699,
      title: '안세미 (명도오름,明道岳)',
      address: '제주특별자치도 제주시 봉개동 산 2',
    },
    {
      id: 1700,
      title: '민오름(봉개동)',
      address: '제주특별자치도 제주시 칠오름길 (봉개동)',
    },
    {
      id: 1705,
      title: '수악 (물오름)',
      address: '제주특별자치도 서귀포시 남원읍 하례리 산 10',
    },
    {
      id: 1735,
      title: '미악산 (턥오름, 쌀오름, 솔오름)',
      address: '제주특별자치도 서귀포시 동홍동 산 7-1',
    },
    {
      id: 1743,
      title: '소병악 (족은오름)',
      address: '제주특별자치도 서귀포시 안덕면 상창리 산 2-1',
    },
    {
      id: 1813,
      title: '오름나그네',
      address: '제주특별자치도 제주시 조천읍 선흘리 470-12',
    },
    {
      id: 1869,
      title: '물찻오름 [출입제한 - 자연휴식년제 적용 중]',
      address: '제주특별자치도 제주시 조천읍 교래길',
    },
    {
      id: 1875,
      title: '걸서악오름',
      address: '제주특별자치도 서귀포시 남원읍 하례리 산 124',
    },
    {
      id: 1914,
      title: '판포오름 (널개오름, 板浦岳)',
      address: '제주특별자치도 제주시 한경면 판포리 934',
    },
    {
      id: 1931,
      title: '마복이오름',
      address: '제주특별자치도 서귀포시 안덕면 상천리 산 83',
    },
    {
      id: 1937,
      title: '손지오름',
      address: '제주특별자치도 제주시 구좌읍 종달리 산 52',
    },
    {
      id: 1944,
      title: '웃밤(웃바매기,웃밤오름)',
      address: '제주특별자치도 제주시 조천읍 선흘리 산 84',
    },
    {
      id: 1997,
      title: '서영아리오름 / 용와이오름',
      address: '제주특별자치도 서귀포시 안덕면 상천리 산22',
    },
    {
      id: 2004,
      title: '족은사슴이오름',
      address: '제주특별자치도 서귀포시 표선면 가시리 산 87-24',
    },
    {
      id: 2029,
      title: '붉은오름(성산읍)',
      address: '제주특별자치도 서귀포시 성산읍 고성리 57',
    },
    {
      id: 2057,
      title: '느지리오름(망오름)',
      address: '제주특별자치도 제주시 한림읍 상명리 산5',
    },
    {
      id: 2059,
      title: '동알오름',
      address: '제주특별자치도 서귀포시 대정읍 상모리 153',
    },
    {
      id: 2102,
      title: '알오름(표선면)',
      address: '제주특별자치도 서귀포시 안덕면 동광리 4-3',
    },
    {
      id: 2142,
      title: '가마오름',
      address: '제주특별자치도 제주시 한경면 청수리 1166',
    },
    {
      id: 2159,
      title: '자배봉(자배오름,망오름)',
      address: '제주특별자치도 서귀포시 남원읍  위미리 산 132-1',
    },
    {
      id: 2186,
      title: '월나봉(도래오름)',
      address: '제주특별자치도 서귀포시 안덕면 감산리 1148 일대',
    },
    {
      id: 2199,
      title: '높은오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 213-1',
    },
    {
      id: 2226,
      title: '민오름(오라동)',
      address: '제주특별자치도 제주시 오라2동 산 12',
    },
    {
      id: 2261,
      title: '밧돌오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 66-1',
    },
    {
      id: 2271,
      title: '지그리오름',
      address: '제주특별자치도 제주시 조천읍 교래리 산 137-1',
    },
    {
      id: 2278,
      title: '카페오름',
      address: '제주특별자치도 서귀포시 성산읍 삼달리 258-1',
    },
    {
      id: 2285,
      title: '파군봉(바굼지오름)',
      address: '제주특별자치도 제주시 애월읍 하귀1리 688-1',
    },
    {
      id: 2300,
      title: '좌보미오름',
      address: '제주특별자치도 서귀포시 표선면 성읍리 산 6',
    },
    {
      id: 2335,
      title: '모슬봉 (모슬개오름)',
      address: '제주특별자치도 서귀포시 대정읍 상모리 3540-2',
    },
    {
      id: 2344,
      title: '가세오름',
      address: '제주특별자치도 서귀포시 표선면 토산리 산2',
    },
    {
      id: 2438,
      title: '세미오름(삼의양오름)',
      address: '제주특별자치도 제주시 아라동 산 24-2',
    },
    {
      id: 2450,
      title: '성산해오름식당',
      address: '제주특별자치도 서귀포시 성산읍 성산리 143-1',
    },
    {
      id: 2452,
      title: '세미오름(샘이오름)',
      address: '제주특별자치도 제주시 조천읍 대흘리 산 27-8',
    },
    {
      id: 2460,
      title: '알오름(성산읍)',
      address: '제주특별자치도 서귀포시 성산읍 시흥상동로',
    },
    {
      id: 2464,
      title: '까끄래기오름',
      address: '제주시 조천읍 교래리 128',
    },
    {
      id: 2497,
      title: '유건에오름',
      address: '제주특별자치도 서귀포시 성산읍 난산리 2302',
    },
    {
      id: 2500,
      title: '제지기오름',
      address: '제주특별자치도 서귀포시 보목동 275-1',
    },
    {
      id: 2525,
      title: '알진오름(안친오름)',
      address: '제주특별자치도 제주시 구좌읍 송당리 880-1',
    },
    {
      id: 2543,
      title: '동거문이오름',
      address: '제주특별자치도 제주시 구좌읍 종달리 산 70',
    },
    {
      id: 2556,
      title: '선족이오름(알선족이)',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 140-2',
    },
    {
      id: 2562,
      title: '가메오름',
      address: '제주특별자치도 제주시 애월읍 봉성리 산 125',
    },
    {
      id: 2580,
      title: '토산봉(망오름)',
      address: '제주특별자치도 서귀포시 표선면 토산리 산 13',
    },
    {
      id: 2584,
      title: '붉은오름(표선면)',
      address: '제주특별자치도 서귀포시 표선면 가시리 산 158',
    },
    {
      id: 2627,
      title: '지그리오름 (큰지그리)',
      address: '제주특별자치도 제주시 조천읍 남조로 2023',
    },
    {
      id: 2635,
      title: '가문이오름(감은이오름)',
      address: '제주특별자치도 서귀포시 표선면 남조로 1487-73',
    },
    {
      id: 2643,
      title: '매오름',
      address: '제주특별자치도 서귀포시 표선면 표선리 산2',
    },
    {
      id: 2649,
      title: '베릿네오름',
      address: '제주특별자치도 서귀포시 중문상로17번길 51',
    },
    {
      id: 2657,
      title: '민오름(조천읍)',
      address: '제주특별자치도 제주시 특별자치도, 조천읍 선흘리 산141',
    },
    {
      id: 2694,
      title: '사려니오름',
      address: '제주특별자치도 서귀포시 성산읍 성산등용로 96-3',
    },
    {
      id: 2700,
      title: '이승이오름(이승악)',
      address: '제주특별자치도 서귀포시 남원읍 신례리 산 12-19',
    },
    {
      id: 2717,
      title: '저지오름(닥몰오름,새오름)',
      address: '제주특별자치도 제주시 한경면 저지리 산 51',
    },
    {
      id: 2741,
      title: '거슨새미오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 145',
    },
    {
      id: 2748,
      title: '모구리오름',
      address: '제주특별자치도 서귀포시 성산읍 난산리 2971',
    },
    {
      id: 2771,
      title: '족은노꼬메오름',
      address: '제주특별자치도 제주시 애월읍 유수암리',
    },
    {
      id: 2796,
      title: '큰노꼬메오름',
      address: '제주특별자치도 제주시 애월읍 유수암리 산 138',
    },
    {
      id: 2800,
      title: '거친오름',
      address: '제주특별자치도 제주시 봉개동 산66 거친오름',
    },
    {
      id: 2825,
      title: '신설오름',
      address: '제주특별자치도 제주시 고마로17길 2',
    },
    {
      id: 2840,
      title: '천아오름(틍낭오름,天娥岳)',
      address: '제주특별자치도 제주시 애월읍 광령리 산182',
    },
    {
      id: 2860,
      title: '성널오름 (성판악)',
      address: '제주특별자치도 서귀포시 남원읍 신례리',
    },
    {
      id: 2867,
      title: '당산봉(당오름,차귀오름)',
      address: '제주특별자치도 제주시 한경면 고산리 산 15',
    },
    {
      id: 2922,
      title: '섯알오름',
      address: '제주특별자치도 서귀포시 대정읍 상모리 1618',
    },
    {
      id: 2958,
      title: '뒤굽은이오름',
      address: '제주특별자치도 서귀포시 성산읍 수산리 4504 ',
    },
    {
      id: 2973,
      title: '정물오름',
      address: '제주특별자치도 제주시 한림읍 금악리 산 52-1',
    },
    {
      id: 2981,
      title: '거린오름 (북오름)',
      address: '제주특별자치도 서귀포시 안덕면 동광리 산 94',
    },
    {
      id: 3000,
      title: '왕이메오름',
      address: '제주특별자치도 서귀포시 안덕면 광평리 산 79',
    },
    {
      id: 3041,
      title: '개오름',
      address: '제주특별자치도 서귀포시 표선면 성읍리 2974',
    },
    {
      id: 3050,
      title: '큰사슴이오름',
      address: '제주특별자치도 서귀포시 표선면 중산간동로',
    },
    {
      id: 3083,
      title: '문도지오름 (문돗지)',
      address: '제주시 문도지오름',
    },
    {
      id: 3114,
      title: '가마오름 진지동굴',
      address: '제주특별자치도 제주시 한경면 청수리 1166',
    },
    {
      id: 3181,
      title: '안돌오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 66-2',
    },
    {
      id: 3186,
      title: '마오름(한경)',
      address: '제주특별자치도 제주시 한경면 저지리 산 56',
    },
    {
      id: 3187,
      title: '민오름(구좌읍)',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 155',
    },
    {
      id: 3215,
      title: '금악오름(왕매)',
      address: '제주특별자치도 제주시 한림읍 금악리 산 1-1',
    },
    {
      id: 3228,
      title: '다랑쉬오름(월랑봉)',
      address: '제주특별자치도 제주시 구좌읍 세화리 3573-6',
    },
    {
      id: 3250,
      title: '붉은오름 자연휴양림',
      address: '제주특별자치도 제주시 조천읍 교래리 산 72',
    },
    {
      id: 3272,
      title: '따라비오름',
      address: '제주특별자치도 서귀포시 표선면 가시리',
    },
    {
      id: 3280,
      title: '제주오름승마랜드',
      address: '제주특별자치도 제주시 조천읍 선흘리 454',
    },
    {
      id: 3281,
      title: '모지오름',
      address: '제주특별자치도 서귀포시 표선면 성읍리 산22 모지오름',
    },
    {
      id: 3297,
      title: '용눈이오름',
      address: '제주특별자치도 제주시 구좌읍 종달리 산28',
    },
    {
      id: 3303,
      title: '거문오름(UNESCO 세계자연유산)',
      address: '제주특별자치도 제주시 조천읍 선흘리 478',
    },
    {
      id: 3322,
      title: '단산(바굼지오름)',
      address: '제주특별자치도 서귀포시 안덕면 향교로 165-23',
    },
    {
      id: 3325,
      title: '윗세오름(웃세오름)',
      address: '제주특별자치도 제주시 애월읍 광령리 산 183-1',
    },
    {
      id: 3358,
      title: '오름터 민속마을',
      address: '제주특별자치도 서귀포시 표선면 성읍리 599-1',
    },
    {
      id: 3378,
      title: '사라오름',
      address: '제주특별자치도 서귀포시 남원읍 신례리 산 2-1',
    },
    {
      id: 3386,
      title: '백약이오름',
      address: '제주특별자치도 서귀포시 표선면 성읍리 산 1',
    },
    {
      id: 3389,
      title: '군산(군산오름,코메오름)',
      address: '제주특별자치도 서귀포시 안덕면 창천리 산 3-1',
    },
    {
      id: 3390,
      title: '새별오름',
      address: '제주특별자치도 제주시 애월읍 봉성리 산 59-8',
    },
    {
      id: 3393,
      title: '아부오름',
      address: '제주특별자치도 제주시 구좌읍 송당리 산 164-1',
    },
  ]);

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
          showsMyLocationButton={true}
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
            //<Marker coordinate={End}   pinColor="red"  onClick={() => console.warn('onClick! End')} />
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
                placeList: scheduleList.map(item => {
                  //console.log("item id :", item.id);
                  return { id: item.id };
                }),
              };
              console.log(T);
              navigation.push('RecommendSchedule', {
                scheduleList: scheduleList,
              });
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
