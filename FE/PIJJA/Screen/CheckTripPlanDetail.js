import React, { useRef, useState, useEffect } from 'react';
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
import Rest from '../lib/Rest';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const CheckTripPlanDetail = ({ route }) => {
  console.log("CheckTripPlanDetail : ", route.params);
  const mapRef = useRef(null);

  const [mapCenter, setMapCenter] = useState({
    longitude: 126.54916661,
    latitude: 33.3616666,
  });
  const [DATA, setDATA] = useState(
    {
      "planId": 126,
      "name": "테스트다20",
      "companionId": 164,
      "planList": [
          {
              "day": 1,
              "data": [
                  {
                      "id": 4,
                      "title": "책방오늘",
                      "address": "제주특별자치도 제주시 노형동 746-8",
                      "latitude": 33.4775512,
                      "longitude": 126.478958
                  },
                  {
                      "id": 74,
                      "title": "양가형제노형",
                      "address": "제주특별자치도 제주시 노형동 3803-3",
                      "latitude": 33.481926,
                      "longitude": 126.475356
                  },
                  {
                      "id": 78,
                      "title": "제주등뼈가",
                      "address": "제주특별자치도 제주시 노형동 934",
                      "latitude": 33.483879,
                      "longitude": 126.48312
                  },
                  {
                      "id": 103,
                      "title": "가담국수",
                      "address": "제주특별자치도 제주시 노형동 1044-10",
                      "latitude": 33.4903379,
                      "longitude": 126.4775362
                  },
                  {
                      "id": 159,
                      "title": "다가미 애월점",
                      "address": "제주특별자치도 제주시 애월읍 광령리 4-1",
                      "latitude": 33.460673,
                      "longitude": 126.447234
                  },
                  {
                      "id": 500,
                      "title": "만선바다",
                      "address": "제주특별자치도 제주시 연동 260-31",
                      "latitude": 33.490963,
                      "longitude": 126.489334
                  },
                  {
                      "id": 139,
                      "title": "탑해장국앤돈가스",
                      "address": "제주특별자치도 제주시 연동 310-12",
                      "latitude": 33.492011,
                      "longitude": 126.497616
                  },
                  {
                      "id": 49,
                      "title": "칠돈가 별관",
                      "address": "제주특별자치도 제주시 용담일동 189-3",
                      "latitude": 33.5041319,
                      "longitude": 126.5128129
                  },
                  {
                      "id": 24,
                      "title": "옛날 홍가네 칼국수",
                      "address": "제주특별자치도 제주시 삼도이동 303-1",
                      "latitude": 33.5047319,
                      "longitude": 126.5250545
                  },
                  {
                      "id": 1,
                      "title": "앞돈지",
                      "address": "제주특별자치도 제주시 중앙로1길 28(건입동)",
                      "latitude": 33.516056,
                      "longitude": 126.52759
                  },
                  {
                      "id": 113,
                      "title": "이가전복",
                      "address": "제주특별자치도 제주시 삼도2동 1203-3",
                      "latitude": 33.517696,
                      "longitude": 126.5191
                  },
                  {
                      "id": 5,
                      "title": "고도",
                      "address": "제주특별자치도 제주시 용담삼동 1173-1",
                      "latitude": 33.5190049,
                      "longitude": 126.4950228
                  }
              ],
              "pathList": [
                  {
                      "latitude": 33.477654,
                      "longitude": 126.47895
                  },
                  {
                      "latitude": 33.47767,
                      "longitude": 126.47817
                  },
                  {
                      "latitude": 33.477673,
                      "longitude": 126.477936
                  },
                  {
                      "latitude": 33.477684,
                      "longitude": 126.47773
                  },
                  {
                      "latitude": 33.4777,
                      "longitude": 126.477646
                  },
                  {
                      "latitude": 33.4777,
                      "longitude": 126.477646
                  },
                  {
                      "latitude": 33.478714,
                      "longitude": 126.47802
                  },
                  {
                      "latitude": 33.478767,
                      "longitude": 126.478035
                  },
                  {
                      "latitude": 33.479084,
                      "longitude": 126.47816
                  },
                  {
                      "latitude": 33.47937,
                      "longitude": 126.47826
                  },
                  {
                      "latitude": 33.479553,
                      "longitude": 126.47832
                  },
                  {
                      "latitude": 33.479626,
                      "longitude": 126.47833
                  },
                  {
                      "latitude": 33.479733,
                      "longitude": 126.478355
                  },
                  {
                      "latitude": 33.47995,
                      "longitude": 126.47839
                  },
                  {
                      "latitude": 33.481243,
                      "longitude": 126.47843
                  },
                  {
                      "latitude": 33.481243,
                      "longitude": 126.47843
                  },
                  {
                      "latitude": 33.481243,
                      "longitude": 126.47824
                  },
                  {
                      "latitude": 33.481228,
                      "longitude": 126.47811
                  },
                  {
                      "latitude": 33.481182,
                      "longitude": 126.47795
                  },
                  {
                      "latitude": 33.481136,
                      "longitude": 126.47779
                  },
                  {
                      "latitude": 33.481117,
                      "longitude": 126.477684
                  },
                  {
                      "latitude": 33.481113,
                      "longitude": 126.47755
                  },
                  {
                      "latitude": 33.481117,
                      "longitude": 126.477425
                  },
                  {
                      "latitude": 33.481148,
                      "longitude": 126.47726
                  },
                  {
                      "latitude": 33.48115,
                      "longitude": 126.47722
                  },
                  {
                      "latitude": 33.481216,
                      "longitude": 126.476974
                  },
                  {
                      "latitude": 33.481243,
                      "longitude": 126.4769
                  },
                  {
                      "latitude": 33.48142,
                      "longitude": 126.476494
                  },
                  {
                      "latitude": 33.481647,
                      "longitude": 126.47602
                  },
                  {
                      "latitude": 33.481674,
                      "longitude": 126.47597
                  },
                  {
                      "latitude": 33.48173,
                      "longitude": 126.475845
                  },
                  {
                      "latitude": 33.48178,
                      "longitude": 126.475746
                  },
                  {
                      "latitude": 33.48181,
                      "longitude": 126.47571
                  },
                  {
                      "latitude": 33.481884,
                      "longitude": 126.47559
                  },
                  {
                      "latitude": 33.48201,
                      "longitude": 126.47546
                  },
                  {
                      "latitude": 33.48201,
                      "longitude": 126.47546
                  },
                  {
                      "latitude": 33.482372,
                      "longitude": 126.47511
                  },
                  {
                      "latitude": 33.482708,
                      "longitude": 126.47479
                  },
                  {
                      "latitude": 33.482708,
                      "longitude": 126.47479
                  },
                  {
                      "latitude": 33.482803,
                      "longitude": 126.474915
                  },
                  {
                      "latitude": 33.482853,
                      "longitude": 126.474976
                  },
                  {
                      "latitude": 33.48306,
                      "longitude": 126.47522
                  },
                  {
                      "latitude": 33.48317,
                      "longitude": 126.47536
                  },
                  {
                      "latitude": 33.48338,
                      "longitude": 126.47562
                  },
                  {
                      "latitude": 33.483402,
                      "longitude": 126.47565
                  },
                  {
                      "latitude": 33.483536,
                      "longitude": 126.475815
                  },
                  {
                      "latitude": 33.483585,
                      "longitude": 126.475876
                  },
                  {
                      "latitude": 33.483925,
                      "longitude": 126.47629
                  },
                  {
                      "latitude": 33.48446,
                      "longitude": 126.476944
                  },
                  {
                      "latitude": 33.48462,
                      "longitude": 126.47715
                  },
                  {
                      "latitude": 33.48465,
                      "longitude": 126.477196
                  },
                  {
                      "latitude": 33.48465,
                      "longitude": 126.477196
                  },
                  {
                      "latitude": 33.484535,
                      "longitude": 126.47734
                  },
                  {
                      "latitude": 33.484478,
                      "longitude": 126.47742
                  },
                  {
                      "latitude": 33.48439,
                      "longitude": 126.47755
                  },
                  {
                      "latitude": 33.484318,
                      "longitude": 126.47767
                  },
                  {
                      "latitude": 33.484207,
                      "longitude": 126.47788
                  },
                  {
                      "latitude": 33.484035,
                      "longitude": 126.47826
                  },
                  {
                      "latitude": 33.483982,
                      "longitude": 126.478386
                  },
                  {
                      "latitude": 33.4839,
                      "longitude": 126.47864
                  },
                  {
                      "latitude": 33.483845,
                      "longitude": 126.47884
                  },
                  {
                      "latitude": 33.483807,
                      "longitude": 126.479004
                  },
                  {
                      "latitude": 33.483803,
                      "longitude": 126.47902
                  },
                  {
                      "latitude": 33.483772,
                      "longitude": 126.47925
                  },
                  {
                      "latitude": 33.483757,
                      "longitude": 126.47935
                  },
                  {
                      "latitude": 33.483738,
                      "longitude": 126.479546
                  },
                  {
                      "latitude": 33.483704,
                      "longitude": 126.4799
                  },
                  {
                      "latitude": 33.48373,
                      "longitude": 126.48003
                  },
                  {
                      "latitude": 33.483818,
                      "longitude": 126.48047
                  },
                  {
                      "latitude": 33.48382,
                      "longitude": 126.48049
                  },
                  {
                      "latitude": 33.48382,
                      "longitude": 126.48049
                  },
                  {
                      "latitude": 33.483845,
                      "longitude": 126.48059
                  },
                  {
                      "latitude": 33.483864,
                      "longitude": 126.480705
                  },
                  {
                      "latitude": 33.483997,
                      "longitude": 126.48114
                  },
                  {
                      "latitude": 33.484024,
                      "longitude": 126.481224
                  },
                  {
                      "latitude": 33.48402,
                      "longitude": 126.48134
                  },
                  {
                      "latitude": 33.483997,
                      "longitude": 126.48217
                  },
                  {
                      "latitude": 33.48399,
                      "longitude": 126.48229
                  },
                  {
                      "latitude": 33.483986,
                      "longitude": 126.48236
                  },
                  {
                      "latitude": 33.483967,
                      "longitude": 126.48287
                  },
                  {
                      "latitude": 33.48396,
                      "longitude": 126.483116
                  },
                  {
                      "latitude": 33.48396,
                      "longitude": 126.483116
                  },
                  {
                      "latitude": 33.483936,
                      "longitude": 126.48425
                  },
                  {
                      "latitude": 33.48392,
                      "longitude": 126.48478
                  },
                  {
                      "latitude": 33.483917,
                      "longitude": 126.48488
                  },
                  {
                      "latitude": 33.483917,
                      "longitude": 126.48488
                  },
                  {
                      "latitude": 33.484467,
                      "longitude": 126.4849
                  },
                  {
                      "latitude": 33.484913,
                      "longitude": 126.48492
                  },
                  {
                      "latitude": 33.485424,
                      "longitude": 126.48494
                  },
                  {
                      "latitude": 33.485683,
                      "longitude": 126.48495
                  },
                  {
                      "latitude": 33.486,
                      "longitude": 126.48496
                  },
                  {
                      "latitude": 33.486572,
                      "longitude": 126.48498
                  },
                  {
                      "latitude": 33.48679,
                      "longitude": 126.484955
                  },
                  {
                      "latitude": 33.48699,
                      "longitude": 126.48483
                  },
                  {
                      "latitude": 33.48706,
                      "longitude": 126.48477
                  },
                  {
                      "latitude": 33.48717,
                      "longitude": 126.48467
                  },
                  {
                      "latitude": 33.487766,
                      "longitude": 126.48411
                  },
                  {
                      "latitude": 33.487885,
                      "longitude": 126.484
                  },
                  {
                      "latitude": 33.488354,
                      "longitude": 126.48355
                  },
                  {
                      "latitude": 33.488388,
                      "longitude": 126.48352
                  },
                  {
                      "latitude": 33.488388,
                      "longitude": 126.48352
                  },
                  {
                      "latitude": 33.48843,
                      "longitude": 126.483475
                  },
                  {
                      "latitude": 33.488853,
                      "longitude": 126.482994
                  },
                  {
                      "latitude": 33.48913,
                      "longitude": 126.48268
                  },
                  {
                      "latitude": 33.489334,
                      "longitude": 126.48245
                  },
                  {
                      "latitude": 33.489433,
                      "longitude": 126.48233
                  },
                  {
                      "latitude": 33.489536,
                      "longitude": 126.482216
                  },
                  {
                      "latitude": 33.489536,
                      "longitude": 126.482216
                  },
                  {
                      "latitude": 33.489483,
                      "longitude": 126.48215
                  },
                  {
                      "latitude": 33.489178,
                      "longitude": 126.48179
                  },
                  {
                      "latitude": 33.489033,
                      "longitude": 126.481606
                  },
                  {
                      "latitude": 33.48891,
                      "longitude": 126.48145
                  },
                  {
                      "latitude": 33.488796,
                      "longitude": 126.48131
                  },
                  {
                      "latitude": 33.488453,
                      "longitude": 126.48085
                  },
                  {
                      "latitude": 33.488083,
                      "longitude": 126.48039
                  },
                  {
                      "latitude": 33.488083,
                      "longitude": 126.48039
                  },
                  {
                      "latitude": 33.4887,
                      "longitude": 126.47969
                  },
                  {
                      "latitude": 33.488754,
                      "longitude": 126.47963
                  },
                  {
                      "latitude": 33.48884,
                      "longitude": 126.47953
                  },
                  {
                      "latitude": 33.48946,
                      "longitude": 126.47883
                  },
                  {
                      "latitude": 33.48952,
                      "longitude": 126.47876
                  },
                  {
                      "latitude": 33.489594,
                      "longitude": 126.47868
                  },
                  {
                      "latitude": 33.489914,
                      "longitude": 126.478325
                  },
                  {
                      "latitude": 33.49021,
                      "longitude": 126.477974
                  },
                  {
                      "latitude": 33.490314,
                      "longitude": 126.477844
                  },
                  {
                      "latitude": 33.490475,
                      "longitude": 126.47766
                  },
                  {
                      "latitude": 33.490475,
                      "longitude": 126.47766
                  },
                  {
                      "latitude": 33.490314,
                      "longitude": 126.477844
                  },
                  {
                      "latitude": 33.490314,
                      "longitude": 126.477844
                  },
                  {
                      "latitude": 33.490227,
                      "longitude": 126.47774
                  },
                  {
                      "latitude": 33.48958,
                      "longitude": 126.47694
                  },
                  {
                      "latitude": 33.488907,
                      "longitude": 126.476074
                  },
                  {
                      "latitude": 33.488907,
                      "longitude": 126.476074
                  },
                  {
                      "latitude": 33.48854,
                      "longitude": 126.47558
                  },
                  {
                      "latitude": 33.48838,
                      "longitude": 126.47537
                  },
                  {
                      "latitude": 33.48807,
                      "longitude": 126.475
                  },
                  {
                      "latitude": 33.487827,
                      "longitude": 126.4747
                  },
                  {
                      "latitude": 33.48714,
                      "longitude": 126.473785
                  },
                  {
                      "latitude": 33.486633,
                      "longitude": 126.473145
                  },
                  {
                      "latitude": 33.486435,
                      "longitude": 126.47289
                  },
                  {
                      "latitude": 33.486362,
                      "longitude": 126.4728
                  },
                  {
                      "latitude": 33.486343,
                      "longitude": 126.47278
                  },
                  {
                      "latitude": 33.486324,
                      "longitude": 126.472755
                  },
                  {
                      "latitude": 33.486286,
                      "longitude": 126.47271
                  },
                  {
                      "latitude": 33.4862,
                      "longitude": 126.472595
                  },
                  {
                      "latitude": 33.486027,
                      "longitude": 126.47238
                  },
                  {
                      "latitude": 33.485855,
                      "longitude": 126.47217
                  },
                  {
                      "latitude": 33.4858,
                      "longitude": 126.4721
                  },
                  {
                      "latitude": 33.485622,
                      "longitude": 126.47188
                  },
                  {
                      "latitude": 33.485584,
                      "longitude": 126.47183
                  },
                  {
                      "latitude": 33.48555,
                      "longitude": 126.47179
                  },
                  {
                      "latitude": 33.485397,
                      "longitude": 126.471596
                  },
                  {
                      "latitude": 33.485043,
                      "longitude": 126.47115
                  },
                  {
                      "latitude": 33.484978,
                      "longitude": 126.47107
                  },
                  {
                      "latitude": 33.484905,
                      "longitude": 126.47098
                  },
                  {
                      "latitude": 33.484818,
                      "longitude": 126.47087
                  },
                  {
                      "latitude": 33.48477,
                      "longitude": 126.47081
                  },
                  {
                      "latitude": 33.484528,
                      "longitude": 126.4705
                  },
                  {
                      "latitude": 33.48425,
                      "longitude": 126.47014
                  },
                  {
                      "latitude": 33.48417,
                      "longitude": 126.47004
                  },
                  {
                      "latitude": 33.484047,
                      "longitude": 126.46988
                  },
                  {
                      "latitude": 33.483353,
                      "longitude": 126.46904
                  },
                  {
                      "latitude": 33.483353,
                      "longitude": 126.46904
                  },
                  {
                      "latitude": 33.482883,
                      "longitude": 126.469604
                  },
                  {
                      "latitude": 33.482597,
                      "longitude": 126.46995
                  },
                  {
                      "latitude": 33.482212,
                      "longitude": 126.470406
                  },
                  {
                      "latitude": 33.4819,
                      "longitude": 126.47078
                  },
                  {
                      "latitude": 33.481346,
                      "longitude": 126.47142
                  },
                  {
                      "latitude": 33.481148,
                      "longitude": 126.47167
                  },
                  {
                      "latitude": 33.48081,
                      "longitude": 126.47206
                  },
                  {
                      "latitude": 33.48065,
                      "longitude": 126.472244
                  },
                  {
                      "latitude": 33.48065,
                      "longitude": 126.472244
                  },
                  {
                      "latitude": 33.480576,
                      "longitude": 126.472145
                  },
                  {
                      "latitude": 33.480446,
                      "longitude": 126.47196
                  },
                  {
                      "latitude": 33.48023,
                      "longitude": 126.471664
                  },
                  {
                      "latitude": 33.479607,
                      "longitude": 126.47081
                  },
                  {
                      "latitude": 33.479347,
                      "longitude": 126.47045
                  },
                  {
                      "latitude": 33.479336,
                      "longitude": 126.470436
                  },
                  {
                      "latitude": 33.479237,
                      "longitude": 126.47029
                  },
                  {
                      "latitude": 33.479053,
                      "longitude": 126.47
                  },
                  {
                      "latitude": 33.479023,
                      "longitude": 126.469955
                  },
                  {
                      "latitude": 33.47892,
                      "longitude": 126.46976
                  },
                  {
                      "latitude": 33.47867,
                      "longitude": 126.46917
                  },
                  {
                      "latitude": 33.478386,
                      "longitude": 126.4685
                  },
                  {
                      "latitude": 33.47836,
                      "longitude": 126.46844
                  },
                  {
                      "latitude": 33.47823,
                      "longitude": 126.46812
                  },
                  {
                      "latitude": 33.478207,
                      "longitude": 126.46807
                  },
                  {
                      "latitude": 33.478104,
                      "longitude": 126.46786
                  },
                  {
                      "latitude": 33.478035,
                      "longitude": 126.467735
                  },
                  {
                      "latitude": 33.47798,
                      "longitude": 126.46766
                  },
                  {
                      "latitude": 33.477913,
                      "longitude": 126.467575
                  },
                  {
                      "latitude": 33.47785,
                      "longitude": 126.467514
                  },
                  {
                      "latitude": 33.477783,
                      "longitude": 126.46745
                  },
                  {
                      "latitude": 33.477684,
                      "longitude": 126.467384
                  },
                  {
                      "latitude": 33.47728,
                      "longitude": 126.467125
                  },
                  {
                      "latitude": 33.4769,
                      "longitude": 126.46689
                  },
                  {
                      "latitude": 33.476284,
                      "longitude": 126.4665
                  },
                  {
                      "latitude": 33.476097,
                      "longitude": 126.46638
                  },
                  {
                      "latitude": 33.475834,
                      "longitude": 126.46621
                  },
                  {
                      "latitude": 33.47568,
                      "longitude": 126.466095
                  },
                  {
                      "latitude": 33.47552,
                      "longitude": 126.465965
                  },
                  {
                      "latitude": 33.475433,
                      "longitude": 126.46588
                  },
                  {
                      "latitude": 33.475254,
                      "longitude": 126.4657
                  },
                  {
                      "latitude": 33.47513,
                      "longitude": 126.46557
                  },
                  {
                      "latitude": 33.474503,
                      "longitude": 126.4649
                  },
                  {
                      "latitude": 33.47448,
                      "longitude": 126.464874
                  },
                  {
                      "latitude": 33.474354,
                      "longitude": 126.46474
                  },
                  {
                      "latitude": 33.474323,
                      "longitude": 126.46471
                  },
                  {
                      "latitude": 33.474274,
                      "longitude": 126.46465
                  },
                  {
                      "latitude": 33.47301,
                      "longitude": 126.46327
                  },
                  {
                      "latitude": 33.472923,
                      "longitude": 126.46318
                  },
                  {
                      "latitude": 33.47282,
                      "longitude": 126.463066
                  },
                  {
                      "latitude": 33.472797,
                      "longitude": 126.46304
                  },
                  {
                      "latitude": 33.47269,
                      "longitude": 126.46292
                  },
                  {
                      "latitude": 33.472668,
                      "longitude": 126.4629
                  },
                  {
                      "latitude": 33.47175,
                      "longitude": 126.46187
                  },
                  {
                      "latitude": 33.471645,
                      "longitude": 126.461754
                  },
                  {
                      "latitude": 33.471508,
                      "longitude": 126.46163
                  },
                  {
                      "latitude": 33.470646,
                      "longitude": 126.460945
                  },
                  {
                      "latitude": 33.470608,
                      "longitude": 126.46092
                  },
                  {
                      "latitude": 33.470257,
                      "longitude": 126.460655
                  },
                  {
                      "latitude": 33.46992,
                      "longitude": 126.4604
                  },
                  {
                      "latitude": 33.46952,
                      "longitude": 126.46007
                  },
                  {
                      "latitude": 33.469368,
                      "longitude": 126.45993
                  },
                  {
                      "latitude": 33.46924,
                      "longitude": 126.4598
                  },
                  {
                      "latitude": 33.46903,
                      "longitude": 126.45959
                  },
                  {
                      "latitude": 33.468643,
                      "longitude": 126.45917
                  },
                  {
                      "latitude": 33.46758,
                      "longitude": 126.45803
                  },
                  {
                      "latitude": 33.467304,
                      "longitude": 126.45775
                  },
                  {
                      "latitude": 33.467064,
                      "longitude": 126.45753
                  },
                  {
                      "latitude": 33.466713,
                      "longitude": 126.45725
                  },
                  {
                      "latitude": 33.466328,
                      "longitude": 126.45695
                  },
                  {
                      "latitude": 33.46619,
                      "longitude": 126.45684
                  },
                  {
                      "latitude": 33.46593,
                      "longitude": 126.45664
                  },
                  {
                      "latitude": 33.465496,
                      "longitude": 126.4563
                  },
                  {
                      "latitude": 33.465378,
                      "longitude": 126.45622
                  },
                  {
                      "latitude": 33.465366,
                      "longitude": 126.456215
                  },
                  {
                      "latitude": 33.46526,
                      "longitude": 126.456154
                  },
                  {
                      "latitude": 33.465233,
                      "longitude": 126.45614
                  },
                  {
                      "latitude": 33.465168,
                      "longitude": 126.4561
                  },
                  {
                      "latitude": 33.465088,
                      "longitude": 126.456055
                  },
                  {
                      "latitude": 33.46498,
                      "longitude": 126.45602
                  },
                  {
                      "latitude": 33.46464,
                      "longitude": 126.45588
                  },
                  {
                      "latitude": 33.464497,
                      "longitude": 126.45583
                  },
                  {
                      "latitude": 33.46432,
                      "longitude": 126.45576
                  },
                  {
                      "latitude": 33.464127,
                      "longitude": 126.45569
                  },
                  {
                      "latitude": 33.464,
                      "longitude": 126.45561
                  },
                  {
                      "latitude": 33.46389,
                      "longitude": 126.455536
                  },
                  {
                      "latitude": 33.463844,
                      "longitude": 126.4555
                  },
                  {
                      "latitude": 33.463787,
                      "longitude": 126.45544
                  },
                  {
                      "latitude": 33.46373,
                      "longitude": 126.455376
                  },
                  {
                      "latitude": 33.4637,
                      "longitude": 126.455345
                  },
                  {
                      "latitude": 33.463684,
                      "longitude": 126.45533
                  },
                  {
                      "latitude": 33.46358,
                      "longitude": 126.455185
                  },
                  {
                      "latitude": 33.463543,
                      "longitude": 126.45512
                  },
                  {
                      "latitude": 33.46348,
                      "longitude": 126.454994
                  },
                  {
                      "latitude": 33.463455,
                      "longitude": 126.454926
                  },
                  {
                      "latitude": 33.463425,
                      "longitude": 126.45485
                  },
                  {
                      "latitude": 33.463387,
                      "longitude": 126.45472
                  },
                  {
                      "latitude": 33.46337,
                      "longitude": 126.45464
                  },
                  {
                      "latitude": 33.463367,
                      "longitude": 126.454605
                  },
                  {
                      "latitude": 33.463352,
                      "longitude": 126.45452
                  },
                  {
                      "latitude": 33.46333,
                      "longitude": 126.45436
                  },
                  {
                      "latitude": 33.46332,
                      "longitude": 126.454285
                  },
                  {
                      "latitude": 33.4633,
                      "longitude": 126.45405
                  },
                  {
                      "latitude": 33.46326,
                      "longitude": 126.45368
                  },
                  {
                      "latitude": 33.4632,
                      "longitude": 126.45314
                  },
                  {
                      "latitude": 33.463177,
                      "longitude": 126.45294
                  },
                  {
                      "latitude": 33.46314,
                      "longitude": 126.45267
                  },
                  {
                      "latitude": 33.463097,
                      "longitude": 126.45245
                  },
                  {
                      "latitude": 33.463074,
                      "longitude": 126.452385
                  },
                  {
                      "latitude": 33.463024,
                      "longitude": 126.4522
                  },
                  {
                      "latitude": 33.462967,
                      "longitude": 126.452034
                  },
                  {
                      "latitude": 33.462658,
                      "longitude": 126.45115
                  },
                  {
                      "latitude": 33.462543,
                      "longitude": 126.45088
                  },
                  {
                      "latitude": 33.462467,
                      "longitude": 126.450714
                  },
                  {
                      "latitude": 33.46232,
                      "longitude": 126.45046
                  },
                  {
                      "latitude": 33.461906,
                      "longitude": 126.44984
                  },
                  {
                      "latitude": 33.46167,
                      "longitude": 126.449486
                  },
                  {
                      "latitude": 33.46165,
                      "longitude": 126.449455
                  },
                  {
                      "latitude": 33.461483,
                      "longitude": 126.4492
                  },
                  {
                      "latitude": 33.460957,
                      "longitude": 126.4484
                  },
                  {
                      "latitude": 33.460747,
                      "longitude": 126.4481
                  },
                  {
                      "latitude": 33.460747,
                      "longitude": 126.4481
                  },
                  {
                      "latitude": 33.460735,
                      "longitude": 126.448074
                  },
                  {
                      "latitude": 33.460518,
                      "longitude": 126.44774
                  },
                  {
                      "latitude": 33.460487,
                      "longitude": 126.4477
                  },
                  {
                      "latitude": 33.460487,
                      "longitude": 126.4477
                  },
                  {
                      "latitude": 33.460667,
                      "longitude": 126.44758
                  },
                  {
                      "latitude": 33.460793,
                      "longitude": 126.447525
                  },
                  {
                      "latitude": 33.460793,
                      "longitude": 126.447525
                  },
                  {
                      "latitude": 33.460667,
                      "longitude": 126.44758
                  },
                  {
                      "latitude": 33.460487,
                      "longitude": 126.4477
                  },
                  {
                      "latitude": 33.460487,
                      "longitude": 126.4477
                  },
                  {
                      "latitude": 33.460472,
                      "longitude": 126.44767
                  },
                  {
                      "latitude": 33.460354,
                      "longitude": 126.44736
                  },
                  {
                      "latitude": 33.460224,
                      "longitude": 126.44716
                  },
                  {
                      "latitude": 33.460045,
                      "longitude": 126.44688
                  },
                  {
                      "latitude": 33.460007,
                      "longitude": 126.44682
                  },
                  {
                      "latitude": 33.460007,
                      "longitude": 126.44682
                  },
                  {
                      "latitude": 33.460068,
                      "longitude": 126.44675
                  },
                  {
                      "latitude": 33.460094,
                      "longitude": 126.44672
                  },
                  {
                      "latitude": 33.46012,
                      "longitude": 126.44667
                  },
                  {
                      "latitude": 33.460243,
                      "longitude": 126.44641
                  },
                  {
                      "latitude": 33.4604,
                      "longitude": 126.44607
                  },
                  {
                      "latitude": 33.460484,
                      "longitude": 126.44586
                  },
                  {
                      "latitude": 33.46062,
                      "longitude": 126.44551
                  },
                  {
                      "latitude": 33.46089,
                      "longitude": 126.44473
                  },
                  {
                      "latitude": 33.460903,
                      "longitude": 126.4447
                  },
                  {
                      "latitude": 33.460922,
                      "longitude": 126.44466
                  },
                  {
                      "latitude": 33.460922,
                      "longitude": 126.44466
                  },
                  {
                      "latitude": 33.460903,
                      "longitude": 126.4447
                  },
                  {
                      "latitude": 33.46089,
                      "longitude": 126.44473
                  },
                  {
                      "latitude": 33.46062,
                      "longitude": 126.44551
                  },
                  {
                      "latitude": 33.460484,
                      "longitude": 126.44586
                  },
                  {
                      "latitude": 33.4604,
                      "longitude": 126.44607
                  },
                  {
                      "latitude": 33.460243,
                      "longitude": 126.44641
                  },
                  {
                      "latitude": 33.46012,
                      "longitude": 126.44667
                  },
                  {
                      "latitude": 33.460094,
                      "longitude": 126.44672
                  },
                  {
                      "latitude": 33.460068,
                      "longitude": 126.44675
                  },
                  {
                      "latitude": 33.460007,
                      "longitude": 126.44682
                  },
                  {
                      "latitude": 33.460007,
                      "longitude": 126.44682
                  },
                  {
                      "latitude": 33.45997,
                      "longitude": 126.44698
                  },
                  {
                      "latitude": 33.45999,
                      "longitude": 126.44704
                  },
                  {
                      "latitude": 33.46001,
                      "longitude": 126.44707
                  },
                  {
                      "latitude": 33.46013,
                      "longitude": 126.44725
                  },
                  {
                      "latitude": 33.46026,
                      "longitude": 126.44746
                  },
                  {
                      "latitude": 33.460472,
                      "longitude": 126.44767
                  },
                  {
                      "latitude": 33.460487,
                      "longitude": 126.4477
                  },
                  {
                      "latitude": 33.460518,
                      "longitude": 126.44774
                  },
                  {
                      "latitude": 33.460735,
                      "longitude": 126.448074
                  },
                  {
                      "latitude": 33.460747,
                      "longitude": 126.4481
                  },
                  {
                      "latitude": 33.460747,
                      "longitude": 126.4481
                  },
                  {
                      "latitude": 33.460957,
                      "longitude": 126.4484
                  },
                  {
                      "latitude": 33.461483,
                      "longitude": 126.4492
                  },
                  {
                      "latitude": 33.46165,
                      "longitude": 126.449455
                  },
                  {
                      "latitude": 33.46167,
                      "longitude": 126.449486
                  },
                  {
                      "latitude": 33.461906,
                      "longitude": 126.44984
                  },
                  {
                      "latitude": 33.46232,
                      "longitude": 126.45046
                  },
                  {
                      "latitude": 33.462467,
                      "longitude": 126.450714
                  },
                  {
                      "latitude": 33.462543,
                      "longitude": 126.45088
                  },
                  {
                      "latitude": 33.462658,
                      "longitude": 126.45115
                  },
                  {
                      "latitude": 33.462967,
                      "longitude": 126.452034
                  },
                  {
                      "latitude": 33.463024,
                      "longitude": 126.4522
                  },
                  {
                      "latitude": 33.463074,
                      "longitude": 126.452385
                  },
                  {
                      "latitude": 33.463097,
                      "longitude": 126.45245
                  },
                  {
                      "latitude": 33.46314,
                      "longitude": 126.45267
                  },
                  {
                      "latitude": 33.463177,
                      "longitude": 126.45294
                  },
                  {
                      "latitude": 33.4632,
                      "longitude": 126.45314
                  },
                  {
                      "latitude": 33.46326,
                      "longitude": 126.45368
                  },
                  {
                      "latitude": 33.4633,
                      "longitude": 126.45405
                  },
                  {
                      "latitude": 33.46332,
                      "longitude": 126.454285
                  },
                  {
                      "latitude": 33.46333,
                      "longitude": 126.45436
                  },
                  {
                      "latitude": 33.463352,
                      "longitude": 126.45452
                  },
                  {
                      "latitude": 33.463367,
                      "longitude": 126.454605
                  },
                  {
                      "latitude": 33.46337,
                      "longitude": 126.45464
                  },
                  {
                      "latitude": 33.463387,
                      "longitude": 126.45472
                  },
                  {
                      "latitude": 33.463425,
                      "longitude": 126.45485
                  },
                  {
                      "latitude": 33.463455,
                      "longitude": 126.454926
                  },
                  {
                      "latitude": 33.46348,
                      "longitude": 126.454994
                  },
                  {
                      "latitude": 33.463543,
                      "longitude": 126.45512
                  },
                  {
                      "latitude": 33.46358,
                      "longitude": 126.455185
                  },
                  {
                      "latitude": 33.463684,
                      "longitude": 126.45533
                  },
                  {
                      "latitude": 33.4637,
                      "longitude": 126.455345
                  },
                  {
                      "latitude": 33.46373,
                      "longitude": 126.455376
                  },
                  {
                      "latitude": 33.463787,
                      "longitude": 126.45544
                  },
                  {
                      "latitude": 33.463844,
                      "longitude": 126.4555
                  },
                  {
                      "latitude": 33.46389,
                      "longitude": 126.455536
                  },
                  {
                      "latitude": 33.464,
                      "longitude": 126.45561
                  },
                  {
                      "latitude": 33.464127,
                      "longitude": 126.45569
                  },
                  {
                      "latitude": 33.46432,
                      "longitude": 126.45576
                  },
                  {
                      "latitude": 33.464497,
                      "longitude": 126.45583
                  },
                  {
                      "latitude": 33.46464,
                      "longitude": 126.45588
                  },
                  {
                      "latitude": 33.46498,
                      "longitude": 126.45602
                  },
                  {
                      "latitude": 33.465088,
                      "longitude": 126.456055
                  },
                  {
                      "latitude": 33.465168,
                      "longitude": 126.4561
                  },
                  {
                      "latitude": 33.465233,
                      "longitude": 126.45614
                  },
                  {
                      "latitude": 33.46526,
                      "longitude": 126.456154
                  },
                  {
                      "latitude": 33.465366,
                      "longitude": 126.456215
                  },
                  {
                      "latitude": 33.465378,
                      "longitude": 126.45622
                  },
                  {
                      "latitude": 33.465496,
                      "longitude": 126.4563
                  },
                  {
                      "latitude": 33.46593,
                      "longitude": 126.45664
                  },
                  {
                      "latitude": 33.46619,
                      "longitude": 126.45684
                  },
                  {
                      "latitude": 33.466328,
                      "longitude": 126.45695
                  },
                  {
                      "latitude": 33.466713,
                      "longitude": 126.45725
                  },
                  {
                      "latitude": 33.467064,
                      "longitude": 126.45753
                  },
                  {
                      "latitude": 33.467304,
                      "longitude": 126.45775
                  },
                  {
                      "latitude": 33.46758,
                      "longitude": 126.45803
                  },
                  {
                      "latitude": 33.468643,
                      "longitude": 126.45917
                  },
                  {
                      "latitude": 33.46903,
                      "longitude": 126.45959
                  },
                  {
                      "latitude": 33.46924,
                      "longitude": 126.4598
                  },
                  {
                      "latitude": 33.469368,
                      "longitude": 126.45993
                  },
                  {
                      "latitude": 33.46952,
                      "longitude": 126.46007
                  },
                  {
                      "latitude": 33.46992,
                      "longitude": 126.4604
                  },
                  {
                      "latitude": 33.470257,
                      "longitude": 126.460655
                  },
                  {
                      "latitude": 33.470608,
                      "longitude": 126.46092
                  },
                  {
                      "latitude": 33.470646,
                      "longitude": 126.460945
                  },
                  {
                      "latitude": 33.471508,
                      "longitude": 126.46163
                  },
                  {
                      "latitude": 33.471645,
                      "longitude": 126.461754
                  },
                  {
                      "latitude": 33.47175,
                      "longitude": 126.46187
                  },
                  {
                      "latitude": 33.472668,
                      "longitude": 126.4629
                  },
                  {
                      "latitude": 33.47269,
                      "longitude": 126.46292
                  },
                  {
                      "latitude": 33.472797,
                      "longitude": 126.46304
                  },
                  {
                      "latitude": 33.47282,
                      "longitude": 126.463066
                  },
                  {
                      "latitude": 33.472923,
                      "longitude": 126.46318
                  },
                  {
                      "latitude": 33.47301,
                      "longitude": 126.46327
                  },
                  {
                      "latitude": 33.474274,
                      "longitude": 126.46465
                  },
                  {
                      "latitude": 33.474323,
                      "longitude": 126.46471
                  },
                  {
                      "latitude": 33.474354,
                      "longitude": 126.46474
                  },
                  {
                      "latitude": 33.47448,
                      "longitude": 126.464874
                  },
                  {
                      "latitude": 33.474503,
                      "longitude": 126.4649
                  },
                  {
                      "latitude": 33.47513,
                      "longitude": 126.46557
                  },
                  {
                      "latitude": 33.475254,
                      "longitude": 126.4657
                  },
                  {
                      "latitude": 33.475433,
                      "longitude": 126.46588
                  },
                  {
                      "latitude": 33.47552,
                      "longitude": 126.465965
                  },
                  {
                      "latitude": 33.47568,
                      "longitude": 126.466095
                  },
                  {
                      "latitude": 33.475834,
                      "longitude": 126.46621
                  },
                  {
                      "latitude": 33.476097,
                      "longitude": 126.46638
                  },
                  {
                      "latitude": 33.476284,
                      "longitude": 126.4665
                  },
                  {
                      "latitude": 33.4769,
                      "longitude": 126.46689
                  },
                  {
                      "latitude": 33.47728,
                      "longitude": 126.467125
                  },
                  {
                      "latitude": 33.477684,
                      "longitude": 126.467384
                  },
                  {
                      "latitude": 33.477783,
                      "longitude": 126.46745
                  },
                  {
                      "latitude": 33.47785,
                      "longitude": 126.467514
                  },
                  {
                      "latitude": 33.477913,
                      "longitude": 126.467575
                  },
                  {
                      "latitude": 33.47798,
                      "longitude": 126.46766
                  },
                  {
                      "latitude": 33.478035,
                      "longitude": 126.467735
                  },
                  {
                      "latitude": 33.478104,
                      "longitude": 126.46786
                  },
                  {
                      "latitude": 33.478207,
                      "longitude": 126.46807
                  },
                  {
                      "latitude": 33.47823,
                      "longitude": 126.46812
                  },
                  {
                      "latitude": 33.47836,
                      "longitude": 126.46844
                  },
                  {
                      "latitude": 33.478386,
                      "longitude": 126.4685
                  },
                  {
                      "latitude": 33.47867,
                      "longitude": 126.46917
                  },
                  {
                      "latitude": 33.47892,
                      "longitude": 126.46976
                  },
                  {
                      "latitude": 33.479023,
                      "longitude": 126.469955
                  },
                  {
                      "latitude": 33.479053,
                      "longitude": 126.47
                  },
                  {
                      "latitude": 33.479237,
                      "longitude": 126.47029
                  },
                  {
                      "latitude": 33.479336,
                      "longitude": 126.470436
                  },
                  {
                      "latitude": 33.479347,
                      "longitude": 126.47045
                  },
                  {
                      "latitude": 33.479607,
                      "longitude": 126.47081
                  },
                  {
                      "latitude": 33.48023,
                      "longitude": 126.471664
                  },
                  {
                      "latitude": 33.480446,
                      "longitude": 126.47196
                  },
                  {
                      "latitude": 33.480576,
                      "longitude": 126.472145
                  },
                  {
                      "latitude": 33.48065,
                      "longitude": 126.472244
                  },
                  {
                      "latitude": 33.480694,
                      "longitude": 126.472305
                  },
                  {
                      "latitude": 33.48081,
                      "longitude": 126.47246
                  },
                  {
                      "latitude": 33.480843,
                      "longitude": 126.47251
                  },
                  {
                      "latitude": 33.48087,
                      "longitude": 126.47254
                  },
                  {
                      "latitude": 33.48108,
                      "longitude": 126.47283
                  },
                  {
                      "latitude": 33.481236,
                      "longitude": 126.47303
                  },
                  {
                      "latitude": 33.481857,
                      "longitude": 126.47377
                  },
                  {
                      "latitude": 33.481953,
                      "longitude": 126.47389
                  },
                  {
                      "latitude": 33.482044,
                      "longitude": 126.47401
                  },
                  {
                      "latitude": 33.48252,
                      "longitude": 126.47457
                  },
                  {
                      "latitude": 33.482708,
                      "longitude": 126.47479
                  },
                  {
                      "latitude": 33.482803,
                      "longitude": 126.474915
                  },
                  {
                      "latitude": 33.482853,
                      "longitude": 126.474976
                  },
                  {
                      "latitude": 33.48306,
                      "longitude": 126.47522
                  },
                  {
                      "latitude": 33.48317,
                      "longitude": 126.47536
                  },
                  {
                      "latitude": 33.48338,
                      "longitude": 126.47562
                  },
                  {
                      "latitude": 33.483402,
                      "longitude": 126.47565
                  },
                  {
                      "latitude": 33.483536,
                      "longitude": 126.475815
                  },
                  {
                      "latitude": 33.483585,
                      "longitude": 126.475876
                  },
                  {
                      "latitude": 33.483925,
                      "longitude": 126.47629
                  },
                  {
                      "latitude": 33.48446,
                      "longitude": 126.476944
                  },
                  {
                      "latitude": 33.48462,
                      "longitude": 126.47715
                  },
                  {
                      "latitude": 33.48465,
                      "longitude": 126.477196
                  },
                  {
                      "latitude": 33.484665,
                      "longitude": 126.47722
                  },
                  {
                      "latitude": 33.484684,
                      "longitude": 126.47725
                  },
                  {
                      "latitude": 33.484745,
                      "longitude": 126.47734
                  },
                  {
                      "latitude": 33.48501,
                      "longitude": 126.47781
                  },
                  {
                      "latitude": 33.48504,
                      "longitude": 126.47787
                  },
                  {
                      "latitude": 33.485245,
                      "longitude": 126.47824
                  },
                  {
                      "latitude": 33.48556,
                      "longitude": 126.47882
                  },
                  {
                      "latitude": 33.485703,
                      "longitude": 126.47908
                  },
                  {
                      "latitude": 33.485786,
                      "longitude": 126.47924
                  },
                  {
                      "latitude": 33.485806,
                      "longitude": 126.47927
                  },
                  {
                      "latitude": 33.485916,
                      "longitude": 126.47949
                  },
                  {
                      "latitude": 33.485935,
                      "longitude": 126.479515
                  },
                  {
                      "latitude": 33.485935,
                      "longitude": 126.479515
                  },
                  {
                      "latitude": 33.48596,
                      "longitude": 126.47956
                  },
                  {
                      "latitude": 33.486153,
                      "longitude": 126.47989
                  },
                  {
                      "latitude": 33.486195,
                      "longitude": 126.47997
                  },
                  {
                      "latitude": 33.486286,
                      "longitude": 126.48013
                  },
                  {
                      "latitude": 33.48633,
                      "longitude": 126.48021
                  },
                  {
                      "latitude": 33.48644,
                      "longitude": 126.4804
                  },
                  {
                      "latitude": 33.48648,
                      "longitude": 126.48048
                  },
                  {
                      "latitude": 33.486607,
                      "longitude": 126.4807
                  },
                  {
                      "latitude": 33.48698,
                      "longitude": 126.48134
                  },
                  {
                      "latitude": 33.487083,
                      "longitude": 126.48152
                  },
                  {
                      "latitude": 33.487366,
                      "longitude": 126.48197
                  },
                  {
                      "latitude": 33.487404,
                      "longitude": 126.48203
                  },
                  {
                      "latitude": 33.487564,
                      "longitude": 126.48227
                  },
                  {
                      "latitude": 33.487724,
                      "longitude": 126.48251
                  },
                  {
                      "latitude": 33.488205,
                      "longitude": 126.483246
                  },
                  {
                      "latitude": 33.488346,
                      "longitude": 126.48345
                  },
                  {
                      "latitude": 33.488388,
                      "longitude": 126.48352
                  },
                  {
                      "latitude": 33.48841,
                      "longitude": 126.48355
                  },
                  {
                      "latitude": 33.488445,
                      "longitude": 126.483604
                  },
                  {
                      "latitude": 33.48847,
                      "longitude": 126.483635
                  },
                  {
                      "latitude": 33.488575,
                      "longitude": 126.4838
                  },
                  {
                      "latitude": 33.4887,
                      "longitude": 126.48399
                  },
                  {
                      "latitude": 33.488766,
                      "longitude": 126.48409
                  },
                  {
                      "latitude": 33.489143,
                      "longitude": 126.48479
                  },
                  {
                      "latitude": 33.489155,
                      "longitude": 126.48481
                  },
                  {
                      "latitude": 33.48924,
                      "longitude": 126.48496
                  },
                  {
                      "latitude": 33.489277,
                      "longitude": 126.48504
                  },
                  {
                      "latitude": 33.48939,
                      "longitude": 126.48525
                  },
                  {
                      "latitude": 33.489456,
                      "longitude": 126.485374
                  },
                  {
                      "latitude": 33.489494,
                      "longitude": 126.48545
                  },
                  {
                      "latitude": 33.48972,
                      "longitude": 126.48588
                  },
                  {
                      "latitude": 33.489906,
                      "longitude": 126.48624
                  },
                  {
                      "latitude": 33.48999,
                      "longitude": 126.4864
                  },
                  {
                      "latitude": 33.49002,
                      "longitude": 126.48645
                  },
                  {
                      "latitude": 33.490067,
                      "longitude": 126.486534
                  },
                  {
                      "latitude": 33.49016,
                      "longitude": 126.48672
                  },
                  {
                      "latitude": 33.490185,
                      "longitude": 126.48676
                  },
                  {
                      "latitude": 33.490253,
                      "longitude": 126.48689
                  },
                  {
                      "latitude": 33.490295,
                      "longitude": 126.48697
                  },
                  {
                      "latitude": 33.4904,
                      "longitude": 126.48715
                  },
                  {
                      "latitude": 33.49077,
                      "longitude": 126.48788
                  },
                  {
                      "latitude": 33.490974,
                      "longitude": 126.48826
                  },
                  {
                      "latitude": 33.49117,
                      "longitude": 126.48862
                  },
                  {
                      "latitude": 33.49128,
                      "longitude": 126.48878
                  },
                  {
                      "latitude": 33.491455,
                      "longitude": 126.48902
                  },
                  {
                      "latitude": 33.491455,
                      "longitude": 126.48902
                  },
                  {
                      "latitude": 33.491074,
                      "longitude": 126.48941
                  },
                  {
                      "latitude": 33.491047,
                      "longitude": 126.48944
                  },
                  {
                      "latitude": 33.491997,
                      "longitude": 126.49749
                  },
                  {
                      "latitude": 33.491936,
                      "longitude": 126.49749
                  },
                  {
                      "latitude": 33.49182,
                      "longitude": 126.49748
                  },
                  {
                      "latitude": 33.491714,
                      "longitude": 126.497475
                  },
                  {
                      "latitude": 33.491287,
                      "longitude": 126.49747
                  },
                  {
                      "latitude": 33.490753,
                      "longitude": 126.49745
                  },
                  {
                      "latitude": 33.48969,
                      "longitude": 126.497406
                  },
                  {
                      "latitude": 33.48969,
                      "longitude": 126.497406
                  },
                  {
                      "latitude": 33.489697,
                      "longitude": 126.497116
                  },
                  {
                      "latitude": 33.4897,
                      "longitude": 126.49698
                  },
                  {
                      "latitude": 33.4897,
                      "longitude": 126.49698
                  },
                  {
                      "latitude": 33.489735,
                      "longitude": 126.49698
                  },
                  {
                      "latitude": 33.489758,
                      "longitude": 126.49698
                  },
                  {
                      "latitude": 33.48978,
                      "longitude": 126.49697
                  },
                  {
                      "latitude": 33.489803,
                      "longitude": 126.49696
                  },
                  {
                      "latitude": 33.489826,
                      "longitude": 126.496956
                  },
                  {
                      "latitude": 33.489845,
                      "longitude": 126.49694
                  },
                  {
                      "latitude": 33.48987,
                      "longitude": 126.496925
                  },
                  {
                      "latitude": 33.489883,
                      "longitude": 126.4969
                  },
                  {
                      "latitude": 33.489902,
                      "longitude": 126.49689
                  },
                  {
                      "latitude": 33.489918,
                      "longitude": 126.496864
                  },
                  {
                      "latitude": 33.489933,
                      "longitude": 126.49684
                  },
                  {
                      "latitude": 33.489937,
                      "longitude": 126.49683
                  },
                  {
                      "latitude": 33.489944,
                      "longitude": 126.49682
                  },
                  {
                      "latitude": 33.489956,
                      "longitude": 126.496796
                  },
                  {
                      "latitude": 33.489967,
                      "longitude": 126.496765
                  },
                  {
                      "latitude": 33.489975,
                      "longitude": 126.49674
                  },
                  {
                      "latitude": 33.48998,
                      "longitude": 126.49671
                  },
                  {
                      "latitude": 33.489983,
                      "longitude": 126.49669
                  },
                  {
                      "latitude": 33.489983,
                      "longitude": 126.49666
                  },
                  {
                      "latitude": 33.489983,
                      "longitude": 126.49663
                  },
                  {
                      "latitude": 33.48998,
                      "longitude": 126.4966
                  },
                  {
                      "latitude": 33.489975,
                      "longitude": 126.496574
                  },
                  {
                      "latitude": 33.489967,
                      "longitude": 126.496544
                  },
                  {
                      "latitude": 33.489956,
                      "longitude": 126.49652
                  },
                  {
                      "latitude": 33.489944,
                      "longitude": 126.4965
                  },
                  {
                      "latitude": 33.489933,
                      "longitude": 126.49647
                  },
                  {
                      "latitude": 33.489918,
                      "longitude": 126.496445
                  },
                  {
                      "latitude": 33.489902,
                      "longitude": 126.49643
                  },
                  {
                      "latitude": 33.489883,
                      "longitude": 126.49641
                  },
                  {
                      "latitude": 33.48987,
                      "longitude": 126.49639
                  },
                  {
                      "latitude": 33.48985,
                      "longitude": 126.496376
                  },
                  {
                      "latitude": 33.489826,
                      "longitude": 126.49636
                  },
                  {
                      "latitude": 33.489803,
                      "longitude": 126.49635
                  },
                  {
                      "latitude": 33.48978,
                      "longitude": 126.496346
                  },
                  {
                      "latitude": 33.48976,
                      "longitude": 126.49634
                  },
                  {
                      "latitude": 33.489735,
                      "longitude": 126.49633
                  },
                  {
                      "latitude": 33.48972,
                      "longitude": 126.49633
                  },
                  {
                      "latitude": 33.48972,
                      "longitude": 126.49633
                  },
                  {
                      "latitude": 33.489727,
                      "longitude": 126.496
                  },
                  {
                      "latitude": 33.489727,
                      "longitude": 126.4959
                  },
                  {
                      "latitude": 33.48977,
                      "longitude": 126.49469
                  },
                  {
                      "latitude": 33.489773,
                      "longitude": 126.49464
                  },
                  {
                      "latitude": 33.489803,
                      "longitude": 126.49337
                  },
                  {
                      "latitude": 33.489838,
                      "longitude": 126.49212
                  },
                  {
                      "latitude": 33.48984,
                      "longitude": 126.491974
                  },
                  {
                      "latitude": 33.489872,
                      "longitude": 126.49085
                  },
                  {
                      "latitude": 33.489872,
                      "longitude": 126.49085
                  },
                  {
                      "latitude": 33.49044,
                      "longitude": 126.49089
                  },
                  {
                      "latitude": 33.49044,
                      "longitude": 126.49089
                  },
                  {
                      "latitude": 33.490932,
                      "longitude": 126.49089
                  },
                  {
                      "latitude": 33.490932,
                      "longitude": 126.49089
                  },
                  {
                      "latitude": 33.490944,
                      "longitude": 126.49022
                  },
                  {
                      "latitude": 33.490944,
                      "longitude": 126.49022
                  },
                  {
                      "latitude": 33.490963,
                      "longitude": 126.48964
                  },
                  {
                      "latitude": 33.490967,
                      "longitude": 126.48961
                  },
                  {
                      "latitude": 33.49097,
                      "longitude": 126.48952
                  },
                  {
                      "latitude": 33.49097,
                      "longitude": 126.48952
                  },
                  {
                      "latitude": 33.491047,
                      "longitude": 126.48944
                  },
                  {
                      "latitude": 33.491997,
                      "longitude": 126.49749
                  },
                  {
                      "latitude": 33.491936,
                      "longitude": 126.49749
                  },
                  {
                      "latitude": 33.49182,
                      "longitude": 126.49748
                  },
                  {
                      "latitude": 33.491714,
                      "longitude": 126.497475
                  },
                  {
                      "latitude": 33.491287,
                      "longitude": 126.49747
                  },
                  {
                      "latitude": 33.490753,
                      "longitude": 126.49745
                  },
                  {
                      "latitude": 33.490753,
                      "longitude": 126.49745
                  },
                  {
                      "latitude": 33.49078,
                      "longitude": 126.49669
                  },
                  {
                      "latitude": 33.49078,
                      "longitude": 126.49669
                  },
                  {
                      "latitude": 33.49166,
                      "longitude": 126.49673
                  },
                  {
                      "latitude": 33.491688,
                      "longitude": 126.49673
                  },
                  {
                      "latitude": 33.491714,
                      "longitude": 126.496735
                  },
                  {
                      "latitude": 33.49185,
                      "longitude": 126.496735
                  },
                  {
                      "latitude": 33.492374,
                      "longitude": 126.49676
                  },
                  {
                      "latitude": 33.492897,
                      "longitude": 126.49678
                  },
                  {
                      "latitude": 33.49322,
                      "longitude": 126.496796
                  },
                  {
                      "latitude": 33.49331,
                      "longitude": 126.496796
                  },
                  {
                      "latitude": 33.49341,
                      "longitude": 126.496796
                  },
                  {
                      "latitude": 33.493587,
                      "longitude": 126.4968
                  },
                  {
                      "latitude": 33.49377,
                      "longitude": 126.49681
                  },
                  {
                      "latitude": 33.493847,
                      "longitude": 126.49681
                  },
                  {
                      "latitude": 33.49396,
                      "longitude": 126.49682
                  },
                  {
                      "latitude": 33.4963,
                      "longitude": 126.49692
                  },
                  {
                      "latitude": 33.496323,
                      "longitude": 126.49692
                  },
                  {
                      "latitude": 33.496346,
                      "longitude": 126.49692
                  },
                  {
                      "latitude": 33.497044,
                      "longitude": 126.49702
                  },
                  {
                      "latitude": 33.497044,
                      "longitude": 126.49702
                  },
                  {
                      "latitude": 33.497234,
                      "longitude": 126.49715
                  },
                  {
                      "latitude": 33.497303,
                      "longitude": 126.4972
                  },
                  {
                      "latitude": 33.49738,
                      "longitude": 126.49726
                  },
                  {
                      "latitude": 33.49745,
                      "longitude": 126.49733
                  },
                  {
                      "latitude": 33.497513,
                      "longitude": 126.4974
                  },
                  {
                      "latitude": 33.49772,
                      "longitude": 126.49764
                  },
                  {
                      "latitude": 33.49784,
                      "longitude": 126.49803
                  },
                  {
                      "latitude": 33.497932,
                      "longitude": 126.49833
                  },
                  {
                      "latitude": 33.49795,
                      "longitude": 126.4984
                  },
                  {
                      "latitude": 33.49803,
                      "longitude": 126.49866
                  },
                  {
                      "latitude": 33.498154,
                      "longitude": 126.49906
                  },
                  {
                      "latitude": 33.498302,
                      "longitude": 126.49955
                  },
                  {
                      "latitude": 33.498943,
                      "longitude": 126.501595
                  },
                  {
                      "latitude": 33.49897,
                      "longitude": 126.501686
                  },
                  {
                      "latitude": 33.499073,
                      "longitude": 126.502014
                  },
                  {
                      "latitude": 33.49914,
                      "longitude": 126.50224
                  },
                  {
                      "latitude": 33.49931,
                      "longitude": 126.5028
                  },
                  {
                      "latitude": 33.499607,
                      "longitude": 126.50375
                  },
                  {
                      "latitude": 33.49994,
                      "longitude": 126.50481
                  },
                  {
                      "latitude": 33.499973,
                      "longitude": 126.504906
                  },
                  {
                      "latitude": 33.500072,
                      "longitude": 126.505226
                  },
                  {
                      "latitude": 33.50023,
                      "longitude": 126.5057
                  },
                  {
                      "latitude": 33.50027,
                      "longitude": 126.50581
                  },
                  {
                      "latitude": 33.5003,
                      "longitude": 126.50591
                  },
                  {
                      "latitude": 33.50033,
                      "longitude": 126.506004
                  },
                  {
                      "latitude": 33.50033,
                      "longitude": 126.506004
                  },
                  {
                      "latitude": 33.50034,
                      "longitude": 126.506004
                  },
                  {
                      "latitude": 33.500343,
                      "longitude": 126.50601
                  },
                  {
                      "latitude": 33.500355,
                      "longitude": 126.50603
                  },
                  {
                      "latitude": 33.50058,
                      "longitude": 126.50636
                  },
                  {
                      "latitude": 33.500874,
                      "longitude": 126.50699
                  },
                  {
                      "latitude": 33.501392,
                      "longitude": 126.50808
                  },
                  {
                      "latitude": 33.501503,
                      "longitude": 126.508316
                  },
                  {
                      "latitude": 33.50156,
                      "longitude": 126.50844
                  },
                  {
                      "latitude": 33.5021,
                      "longitude": 126.509575
                  },
                  {
                      "latitude": 33.50231,
                      "longitude": 126.51
                  },
                  {
                      "latitude": 33.502567,
                      "longitude": 126.510544
                  },
                  {
                      "latitude": 33.502773,
                      "longitude": 126.51099
                  },
                  {
                      "latitude": 33.502827,
                      "longitude": 126.5111
                  },
                  {
                      "latitude": 33.50297,
                      "longitude": 126.5114
                  },
                  {
                      "latitude": 33.50309,
                      "longitude": 126.51162
                  },
                  {
                      "latitude": 33.50312,
                      "longitude": 126.51166
                  },
                  {
                      "latitude": 33.503242,
                      "longitude": 126.51177
                  },
                  {
                      "latitude": 33.50363,
                      "longitude": 126.51214
                  },
                  {
                      "latitude": 33.503693,
                      "longitude": 126.5122
                  },
                  {
                      "latitude": 33.504135,
                      "longitude": 126.51263
                  },
                  {
                      "latitude": 33.50422,
                      "longitude": 126.51271
                  },
                  {
                      "latitude": 33.50422,
                      "longitude": 126.51271
                  },
                  {
                      "latitude": 33.504356,
                      "longitude": 126.51284
                  },
                  {
                      "latitude": 33.50449,
                      "longitude": 126.512985
                  },
                  {
                      "latitude": 33.50449,
                      "longitude": 126.512985
                  },
                  {
                      "latitude": 33.504482,
                      "longitude": 126.51364
                  },
                  {
                      "latitude": 33.50448,
                      "longitude": 126.51386
                  },
                  {
                      "latitude": 33.50448,
                      "longitude": 126.514305
                  },
                  {
                      "latitude": 33.50448,
                      "longitude": 126.51437
                  },
                  {
                      "latitude": 33.504475,
                      "longitude": 126.51447
                  },
                  {
                      "latitude": 33.50447,
                      "longitude": 126.514595
                  },
                  {
                      "latitude": 33.50447,
                      "longitude": 126.514786
                  },
                  {
                      "latitude": 33.504467,
                      "longitude": 126.515
                  },
                  {
                      "latitude": 33.50446,
                      "longitude": 126.51541
                  },
                  {
                      "latitude": 33.504444,
                      "longitude": 126.516655
                  },
                  {
                      "latitude": 33.504425,
                      "longitude": 126.51793
                  },
                  {
                      "latitude": 33.504402,
                      "longitude": 126.519264
                  },
                  {
                      "latitude": 33.504402,
                      "longitude": 126.519325
                  },
                  {
                      "latitude": 33.504402,
                      "longitude": 126.51995
                  },
                  {
                      "latitude": 33.504387,
                      "longitude": 126.52048
                  },
                  {
                      "latitude": 33.504387,
                      "longitude": 126.52065
                  },
                  {
                      "latitude": 33.504368,
                      "longitude": 126.52185
                  },
                  {
                      "latitude": 33.504353,
                      "longitude": 126.52214
                  },
                  {
                      "latitude": 33.50434,
                      "longitude": 126.52274
                  },
                  {
                      "latitude": 33.504333,
                      "longitude": 126.52324
                  },
                  {
                      "latitude": 33.504322,
                      "longitude": 126.524055
                  },
                  {
                      "latitude": 33.50432,
                      "longitude": 126.524895
                  },
                  {
                      "latitude": 33.504345,
                      "longitude": 126.525055
                  },
                  {
                      "latitude": 33.504395,
                      "longitude": 126.5252
                  },
                  {
                      "latitude": 33.504444,
                      "longitude": 126.52535
                  },
                  {
                      "latitude": 33.50447,
                      "longitude": 126.52544
                  },
                  {
                      "latitude": 33.504482,
                      "longitude": 126.52546
                  },
                  {
                      "latitude": 33.504482,
                      "longitude": 126.52546
                  },
                  {
                      "latitude": 33.504494,
                      "longitude": 126.52545
                  },
                  {
                      "latitude": 33.50488,
                      "longitude": 126.52521
                  },
                  {
                      "latitude": 33.50488,
                      "longitude": 126.52521
                  },
                  {
                      "latitude": 33.50488,
                      "longitude": 126.525055
                  },
                  {
                      "latitude": 33.50488,
                      "longitude": 126.525055
                  },
                  {
                      "latitude": 33.50488,
                      "longitude": 126.52521
                  },
                  {
                      "latitude": 33.50488,
                      "longitude": 126.52521
                  },
                  {
                      "latitude": 33.50493,
                      "longitude": 126.52519
                  },
                  {
                      "latitude": 33.50497,
                      "longitude": 126.525185
                  },
                  {
                      "latitude": 33.505013,
                      "longitude": 126.525185
                  },
                  {
                      "latitude": 33.505054,
                      "longitude": 126.52519
                  },
                  {
                      "latitude": 33.50549,
                      "longitude": 126.52537
                  },
                  {
                      "latitude": 33.505596,
                      "longitude": 126.52542
                  },
                  {
                      "latitude": 33.505795,
                      "longitude": 126.5255
                  },
                  {
                      "latitude": 33.505848,
                      "longitude": 126.52551
                  },
                  {
                      "latitude": 33.505848,
                      "longitude": 126.52551
                  },
                  {
                      "latitude": 33.506145,
                      "longitude": 126.52534
                  },
                  {
                      "latitude": 33.506683,
                      "longitude": 126.52502
                  },
                  {
                      "latitude": 33.506706,
                      "longitude": 126.525
                  },
                  {
                      "latitude": 33.50678,
                      "longitude": 126.524956
                  },
                  {
                      "latitude": 33.5074,
                      "longitude": 126.52459
                  },
                  {
                      "latitude": 33.507595,
                      "longitude": 126.52448
                  },
                  {
                      "latitude": 33.507812,
                      "longitude": 126.52436
                  },
                  {
                      "latitude": 33.50794,
                      "longitude": 126.524284
                  },
                  {
                      "latitude": 33.50823,
                      "longitude": 126.52411
                  },
                  {
                      "latitude": 33.508465,
                      "longitude": 126.523964
                  },
                  {
                      "latitude": 33.50886,
                      "longitude": 126.523735
                  },
                  {
                      "latitude": 33.509007,
                      "longitude": 126.52366
                  },
                  {
                      "latitude": 33.50902,
                      "longitude": 126.52365
                  },
                  {
                      "latitude": 33.509045,
                      "longitude": 126.523636
                  },
                  {
                      "latitude": 33.509186,
                      "longitude": 126.52355
                  },
                  {
                      "latitude": 33.509296,
                      "longitude": 126.523506
                  },
                  {
                      "latitude": 33.509354,
                      "longitude": 126.5235
                  },
                  {
                      "latitude": 33.509457,
                      "longitude": 126.5235
                  },
                  {
                      "latitude": 33.509552,
                      "longitude": 126.5235
                  },
                  {
                      "latitude": 33.509632,
                      "longitude": 126.52351
                  },
                  {
                      "latitude": 33.50973,
                      "longitude": 126.52357
                  },
                  {
                      "latitude": 33.51007,
                      "longitude": 126.52378
                  },
                  {
                      "latitude": 33.510365,
                      "longitude": 126.523926
                  },
                  {
                      "latitude": 33.5105,
                      "longitude": 126.523994
                  },
                  {
                      "latitude": 33.51115,
                      "longitude": 126.5243
                  },
                  {
                      "latitude": 33.511173,
                      "longitude": 126.52431
                  },
                  {
                      "latitude": 33.511314,
                      "longitude": 126.524376
                  },
                  {
                      "latitude": 33.511456,
                      "longitude": 126.52444
                  },
                  {
                      "latitude": 33.511696,
                      "longitude": 126.52454
                  },
                  {
                      "latitude": 33.511814,
                      "longitude": 126.5246
                  },
                  {
                      "latitude": 33.51192,
                      "longitude": 126.52463
                  },
                  {
                      "latitude": 33.512413,
                      "longitude": 126.52466
                  },
                  {
                      "latitude": 33.512684,
                      "longitude": 126.52467
                  },
                  {
                      "latitude": 33.51289,
                      "longitude": 126.52467
                  },
                  {
                      "latitude": 33.51315,
                      "longitude": 126.5247
                  },
                  {
                      "latitude": 33.51339,
                      "longitude": 126.52471
                  },
                  {
                      "latitude": 33.51402,
                      "longitude": 126.52473
                  },
                  {
                      "latitude": 33.51404,
                      "longitude": 126.52473
                  },
                  {
                      "latitude": 33.514503,
                      "longitude": 126.52475
                  },
                  {
                      "latitude": 33.51489,
                      "longitude": 126.524765
                  },
                  {
                      "latitude": 33.51499,
                      "longitude": 126.52477
                  },
                  {
                      "latitude": 33.515408,
                      "longitude": 126.52479
                  },
                  {
                      "latitude": 33.51543,
                      "longitude": 126.52479
                  },
                  {
                      "latitude": 33.51558,
                      "longitude": 126.524796
                  },
                  {
                      "latitude": 33.51563,
                      "longitude": 126.524796
                  },
                  {
                      "latitude": 33.516003,
                      "longitude": 126.5248
                  },
                  {
                      "latitude": 33.516476,
                      "longitude": 126.52483
                  },
                  {
                      "latitude": 33.51663,
                      "longitude": 126.52485
                  },
                  {
                      "latitude": 33.51677,
                      "longitude": 126.524864
                  },
                  {
                      "latitude": 33.51682,
                      "longitude": 126.524864
                  },
                  {
                      "latitude": 33.51682,
                      "longitude": 126.524864
                  },
                  {
                      "latitude": 33.516804,
                      "longitude": 126.52493
                  },
                  {
                      "latitude": 33.51677,
                      "longitude": 126.52509
                  },
                  {
                      "latitude": 33.51664,
                      "longitude": 126.52567
                  },
                  {
                      "latitude": 33.51659,
                      "longitude": 126.52596
                  },
                  {
                      "latitude": 33.51657,
                      "longitude": 126.526215
                  },
                  {
                      "latitude": 33.516552,
                      "longitude": 126.52649
                  },
                  {
                      "latitude": 33.516468,
                      "longitude": 126.52769
                  },
                  {
                      "latitude": 33.516468,
                      "longitude": 126.52769
                  },
                  {
                      "latitude": 33.51628,
                      "longitude": 126.527664
                  },
                  {
                      "latitude": 33.516163,
                      "longitude": 126.52765
                  },
                  {
                      "latitude": 33.51605,
                      "longitude": 126.52766
                  },
                  {
                      "latitude": 33.51605,
                      "longitude": 126.52766
                  },
                  {
                      "latitude": 33.516163,
                      "longitude": 126.52765
                  },
                  {
                      "latitude": 33.51628,
                      "longitude": 126.527664
                  },
                  {
                      "latitude": 33.516468,
                      "longitude": 126.52769
                  },
                  {
                      "latitude": 33.516468,
                      "longitude": 126.52769
                  },
                  {
                      "latitude": 33.516552,
                      "longitude": 126.52649
                  },
                  {
                      "latitude": 33.51657,
                      "longitude": 126.526215
                  },
                  {
                      "latitude": 33.51659,
                      "longitude": 126.52596
                  },
                  {
                      "latitude": 33.51664,
                      "longitude": 126.52567
                  },
                  {
                      "latitude": 33.51677,
                      "longitude": 126.52509
                  },
                  {
                      "latitude": 33.516804,
                      "longitude": 126.52493
                  },
                  {
                      "latitude": 33.51682,
                      "longitude": 126.524864
                  },
                  {
                      "latitude": 33.51682,
                      "longitude": 126.524864
                  },
                  {
                      "latitude": 33.51683,
                      "longitude": 126.5248
                  },
                  {
                      "latitude": 33.516872,
                      "longitude": 126.524635
                  },
                  {
                      "latitude": 33.517105,
                      "longitude": 126.5236
                  },
                  {
                      "latitude": 33.517452,
                      "longitude": 126.52207
                  },
                  {
                      "latitude": 33.517467,
                      "longitude": 126.521996
                  },
                  {
                      "latitude": 33.51785,
                      "longitude": 126.52044
                  },
                  {
                      "latitude": 33.517868,
                      "longitude": 126.52035
                  },
                  {
                      "latitude": 33.51798,
                      "longitude": 126.519875
                  },
                  {
                      "latitude": 33.51808,
                      "longitude": 126.51928
                  },
                  {
                      "latitude": 33.51808,
                      "longitude": 126.51928
                  },
                  {
                      "latitude": 33.517998,
                      "longitude": 126.51928
                  },
                  {
                      "latitude": 33.517902,
                      "longitude": 126.519264
                  },
                  {
                      "latitude": 33.517597,
                      "longitude": 126.51919
                  },
                  {
                      "latitude": 33.517597,
                      "longitude": 126.51919
                  },
                  {
                      "latitude": 33.517586,
                      "longitude": 126.51909
                  },
                  {
                      "latitude": 33.517586,
                      "longitude": 126.51909
                  },
                  {
                      "latitude": 33.51749,
                      "longitude": 126.518234
                  },
                  {
                      "latitude": 33.517445,
                      "longitude": 126.517815
                  },
                  {
                      "latitude": 33.517445,
                      "longitude": 126.517815
                  },
                  {
                      "latitude": 33.517155,
                      "longitude": 126.51786
                  },
                  {
                      "latitude": 33.517017,
                      "longitude": 126.51788
                  },
                  {
                      "latitude": 33.516586,
                      "longitude": 126.517944
                  },
                  {
                      "latitude": 33.516075,
                      "longitude": 126.51801
                  },
                  {
                      "latitude": 33.51584,
                      "longitude": 126.51805
                  },
                  {
                      "latitude": 33.515446,
                      "longitude": 126.51816
                  },
                  {
                      "latitude": 33.515446,
                      "longitude": 126.51816
                  },
                  {
                      "latitude": 33.515438,
                      "longitude": 126.51808
                  },
                  {
                      "latitude": 33.51531,
                      "longitude": 126.51728
                  },
                  {
                      "latitude": 33.51529,
                      "longitude": 126.51713
                  },
                  {
                      "latitude": 33.51529,
                      "longitude": 126.51713
                  },
                  {
                      "latitude": 33.515263,
                      "longitude": 126.51702
                  },
                  {
                      "latitude": 33.515263,
                      "longitude": 126.51702
                  },
                  {
                      "latitude": 33.51523,
                      "longitude": 126.51688
                  },
                  {
                      "latitude": 33.515224,
                      "longitude": 126.51685
                  },
                  {
                      "latitude": 33.51521,
                      "longitude": 126.51682
                  },
                  {
                      "latitude": 33.515205,
                      "longitude": 126.516815
                  },
                  {
                      "latitude": 33.51519,
                      "longitude": 126.516785
                  },
                  {
                      "latitude": 33.515163,
                      "longitude": 126.51676
                  },
                  {
                      "latitude": 33.51513,
                      "longitude": 126.51674
                  },
                  {
                      "latitude": 33.5142,
                      "longitude": 126.51636
                  },
                  {
                      "latitude": 33.51413,
                      "longitude": 126.51632
                  },
                  {
                      "latitude": 33.513588,
                      "longitude": 126.51599
                  },
                  {
                      "latitude": 33.513447,
                      "longitude": 126.51589
                  },
                  {
                      "latitude": 33.513092,
                      "longitude": 126.51556
                  },
                  {
                      "latitude": 33.512997,
                      "longitude": 126.51549
                  },
                  {
                      "latitude": 33.51259,
                      "longitude": 126.51518
                  },
                  {
                      "latitude": 33.512447,
                      "longitude": 126.51507
                  },
                  {
                      "latitude": 33.512302,
                      "longitude": 126.51495
                  },
                  {
                      "latitude": 33.512104,
                      "longitude": 126.51476
                  },
                  {
                      "latitude": 33.511913,
                      "longitude": 126.514534
                  },
                  {
                      "latitude": 33.51171,
                      "longitude": 126.51424
                  },
                  {
                      "latitude": 33.511517,
                      "longitude": 126.51391
                  },
                  {
                      "latitude": 33.511497,
                      "longitude": 126.513855
                  },
                  {
                      "latitude": 33.511345,
                      "longitude": 126.513535
                  },
                  {
                      "latitude": 33.511345,
                      "longitude": 126.513535
                  },
                  {
                      "latitude": 33.511555,
                      "longitude": 126.51337
                  },
                  {
                      "latitude": 33.51163,
                      "longitude": 126.51331
                  },
                  {
                      "latitude": 33.51167,
                      "longitude": 126.51327
                  },
                  {
                      "latitude": 33.51173,
                      "longitude": 126.513176
                  },
                  {
                      "latitude": 33.511875,
                      "longitude": 126.51282
                  },
                  {
                      "latitude": 33.512,
                      "longitude": 126.51249
                  },
                  {
                      "latitude": 33.512012,
                      "longitude": 126.51247
                  },
                  {
                      "latitude": 33.51205,
                      "longitude": 126.51237
                  },
                  {
                      "latitude": 33.512066,
                      "longitude": 126.51233
                  },
                  {
                      "latitude": 33.5121,
                      "longitude": 126.51224
                  },
                  {
                      "latitude": 33.51211,
                      "longitude": 126.51221
                  },
                  {
                      "latitude": 33.512276,
                      "longitude": 126.5118
                  },
                  {
                      "latitude": 33.512436,
                      "longitude": 126.51136
                  },
                  {
                      "latitude": 33.512455,
                      "longitude": 126.51131
                  },
                  {
                      "latitude": 33.51247,
                      "longitude": 126.51119
                  },
                  {
                      "latitude": 33.512505,
                      "longitude": 126.51097
                  },
                  {
                      "latitude": 33.51251,
                      "longitude": 126.51095
                  },
                  {
                      "latitude": 33.51252,
                      "longitude": 126.51089
                  },
                  {
                      "latitude": 33.51252,
                      "longitude": 126.51087
                  },
                  {
                      "latitude": 33.512573,
                      "longitude": 126.51047
                  },
                  {
                      "latitude": 33.512623,
                      "longitude": 126.51008
                  },
                  {
                      "latitude": 33.512653,
                      "longitude": 126.50986
                  },
                  {
                      "latitude": 33.512676,
                      "longitude": 126.50967
                  },
                  {
                      "latitude": 33.512703,
                      "longitude": 126.50944
                  },
                  {
                      "latitude": 33.512707,
                      "longitude": 126.50939
                  },
                  {
                      "latitude": 33.512722,
                      "longitude": 126.50928
                  },
                  {
                      "latitude": 33.512733,
                      "longitude": 126.50919
                  },
                  {
                      "latitude": 33.512775,
                      "longitude": 126.508896
                  },
                  {
                      "latitude": 33.512856,
                      "longitude": 126.50828
                  },
                  {
                      "latitude": 33.51294,
                      "longitude": 126.50762
                  },
                  {
                      "latitude": 33.51295,
                      "longitude": 126.5075
                  },
                  {
                      "latitude": 33.51298,
                      "longitude": 126.50721
                  },
                  {
                      "latitude": 33.513,
                      "longitude": 126.50702
                  },
                  {
                      "latitude": 33.513012,
                      "longitude": 126.50694
                  },
                  {
                      "latitude": 33.51302,
                      "longitude": 126.50688
                  },
                  {
                      "latitude": 33.51302,
                      "longitude": 126.50687
                  },
                  {
                      "latitude": 33.513092,
                      "longitude": 126.50634
                  },
                  {
                      "latitude": 33.513096,
                      "longitude": 126.506325
                  },
                  {
                      "latitude": 33.513172,
                      "longitude": 126.50576
                  },
                  {
                      "latitude": 33.51325,
                      "longitude": 126.50524
                  },
                  {
                      "latitude": 33.513294,
                      "longitude": 126.504906
                  },
                  {
                      "latitude": 33.513367,
                      "longitude": 126.5044
                  },
                  {
                      "latitude": 33.513382,
                      "longitude": 126.50428
                  },
                  {
                      "latitude": 33.513386,
                      "longitude": 126.504166
                  },
                  {
                      "latitude": 33.513386,
                      "longitude": 126.50414
                  },
                  {
                      "latitude": 33.513386,
                      "longitude": 126.504074
                  },
                  {
                      "latitude": 33.513382,
                      "longitude": 126.504036
                  },
                  {
                      "latitude": 33.51337,
                      "longitude": 126.50399
                  },
                  {
                      "latitude": 33.51334,
                      "longitude": 126.50386
                  },
                  {
                      "latitude": 33.513287,
                      "longitude": 126.50362
                  },
                  {
                      "latitude": 33.513206,
                      "longitude": 126.50326
                  },
                  {
                      "latitude": 33.513195,
                      "longitude": 126.50316
                  },
                  {
                      "latitude": 33.513203,
                      "longitude": 126.50279
                  },
                  {
                      "latitude": 33.513203,
                      "longitude": 126.50279
                  },
                  {
                      "latitude": 33.514175,
                      "longitude": 126.502655
                  },
                  {
                      "latitude": 33.514378,
                      "longitude": 126.502625
                  },
                  {
                      "latitude": 33.51443,
                      "longitude": 126.50262
                  },
                  {
                      "latitude": 33.51467,
                      "longitude": 126.50259
                  },
                  {
                      "latitude": 33.51519,
                      "longitude": 126.50251
                  },
                  {
                      "latitude": 33.515713,
                      "longitude": 126.50244
                  },
                  {
                      "latitude": 33.515743,
                      "longitude": 126.50243
                  },
                  {
                      "latitude": 33.517246,
                      "longitude": 126.502205
                  },
                  {
                      "latitude": 33.517246,
                      "longitude": 126.502205
                  },
                  {
                      "latitude": 33.51725,
                      "longitude": 126.50217
                  },
                  {
                      "latitude": 33.517258,
                      "longitude": 126.50176
                  },
                  {
                      "latitude": 33.517372,
                      "longitude": 126.50097
                  },
                  {
                      "latitude": 33.517406,
                      "longitude": 126.50075
                  },
                  {
                      "latitude": 33.517437,
                      "longitude": 126.50059
                  },
                  {
                      "latitude": 33.517467,
                      "longitude": 126.50048
                  },
                  {
                      "latitude": 33.517513,
                      "longitude": 126.50039
                  },
                  {
                      "latitude": 33.51771,
                      "longitude": 126.50016
                  },
                  {
                      "latitude": 33.51778,
                      "longitude": 126.50011
                  },
                  {
                      "latitude": 33.517887,
                      "longitude": 126.50005
                  },
                  {
                      "latitude": 33.51829,
                      "longitude": 126.49993
                  },
                  {
                      "latitude": 33.51834,
                      "longitude": 126.499916
                  },
                  {
                      "latitude": 33.518597,
                      "longitude": 126.499825
                  },
                  {
                      "latitude": 33.51877,
                      "longitude": 126.49974
                  },
                  {
                      "latitude": 33.518986,
                      "longitude": 126.4996
                  },
                  {
                      "latitude": 33.5193,
                      "longitude": 126.499405
                  },
                  {
                      "latitude": 33.51947,
                      "longitude": 126.49928
                  },
                  {
                      "latitude": 33.51956,
                      "longitude": 126.49918
                  },
                  {
                      "latitude": 33.519596,
                      "longitude": 126.499146
                  },
                  {
                      "latitude": 33.51973,
                      "longitude": 126.49888
                  },
                  {
                      "latitude": 33.5198,
                      "longitude": 126.498665
                  },
                  {
                      "latitude": 33.519848,
                      "longitude": 126.49841
                  },
                  {
                      "latitude": 33.519928,
                      "longitude": 126.498024
                  },
                  {
                      "latitude": 33.51995,
                      "longitude": 126.497925
                  },
                  {
                      "latitude": 33.520218,
                      "longitude": 126.496605
                  },
                  {
                      "latitude": 33.520252,
                      "longitude": 126.496414
                  },
                  {
                      "latitude": 33.520256,
                      "longitude": 126.49631
                  },
                  {
                      "latitude": 33.52026,
                      "longitude": 126.49621
                  },
                  {
                      "latitude": 33.520237,
                      "longitude": 126.495895
                  },
                  {
                      "latitude": 33.520214,
                      "longitude": 126.49572
                  },
                  {
                      "latitude": 33.5202,
                      "longitude": 126.49558
                  },
                  {
                      "latitude": 33.520123,
                      "longitude": 126.495
                  },
                  {
                      "latitude": 33.52009,
                      "longitude": 126.49473
                  },
                  {
                      "latitude": 33.51998,
                      "longitude": 126.49427
                  },
                  {
                      "latitude": 33.519974,
                      "longitude": 126.49425
                  },
                  {
                      "latitude": 33.51985,
                      "longitude": 126.49393
                  },
                  {
                      "latitude": 33.51985,
                      "longitude": 126.49393
                  },
                  {
                      "latitude": 33.519707,
                      "longitude": 126.494
                  },
                  {
                      "latitude": 33.519608,
                      "longitude": 126.49406
                  },
                  {
                      "latitude": 33.519188,
                      "longitude": 126.494255
                  },
                  {
                      "latitude": 33.51916,
                      "longitude": 126.49427
                  },
                  {
                      "latitude": 33.519085,
                      "longitude": 126.494316
                  },
                  {
                      "latitude": 33.519066,
                      "longitude": 126.49434
                  },
                  {
                      "latitude": 33.518917,
                      "longitude": 126.494545
                  },
                  {
                      "latitude": 33.518837,
                      "longitude": 126.49468
                  },
                  {
                      "latitude": 33.51874,
                      "longitude": 126.494865
                  }
              ]
          },
          {
              "day": 2,
              "data": [
                  {
                      "id": 101,
                      "title": "란나 선물가게",
                      "address": "제주특별자치도 서귀포시 안덕면 사계리 3594-2",
                      "latitude": 33.2487383,
                      "longitude": 126.3224032
                  },
                  {
                      "id": 127,
                      "title": "소랑아시 소품샵&선물가게",
                      "address": "제주특별자치도 서귀포시 색달동 2507-1",
                      "latitude": 33.255568,
                      "longitude": 126.4148723
                  }
              ],
              "pathList": [
                  {
                      "latitude": 33.24884,
                      "longitude": 126.32245
                  },
                  {
                      "latitude": 33.248882,
                      "longitude": 126.32238
                  },
                  {
                      "latitude": 33.249077,
                      "longitude": 126.32203
                  },
                  {
                      "latitude": 33.249283,
                      "longitude": 126.32171
                  },
                  {
                      "latitude": 33.24937,
                      "longitude": 126.321556
                  },
                  {
                      "latitude": 33.24984,
                      "longitude": 126.32092
                  },
                  {
                      "latitude": 33.249893,
                      "longitude": 126.32088
                  },
                  {
                      "latitude": 33.24992,
                      "longitude": 126.32087
                  },
                  {
                      "latitude": 33.249954,
                      "longitude": 126.32085
                  },
                  {
                      "latitude": 33.250343,
                      "longitude": 126.320786
                  },
                  {
                      "latitude": 33.250343,
                      "longitude": 126.320786
                  },
                  {
                      "latitude": 33.25042,
                      "longitude": 126.32136
                  },
                  {
                      "latitude": 33.250473,
                      "longitude": 126.321754
                  },
                  {
                      "latitude": 33.25053,
                      "longitude": 126.322105
                  },
                  {
                      "latitude": 33.250576,
                      "longitude": 126.322395
                  },
                  {
                      "latitude": 33.25077,
                      "longitude": 126.32393
                  },
                  {
                      "latitude": 33.25083,
                      "longitude": 126.32438
                  },
                  {
                      "latitude": 33.250854,
                      "longitude": 126.32459
                  },
                  {
                      "latitude": 33.250862,
                      "longitude": 126.32478
                  },
                  {
                      "latitude": 33.250843,
                      "longitude": 126.325066
                  },
                  {
                      "latitude": 33.250744,
                      "longitude": 126.32564
                  },
                  {
                      "latitude": 33.25054,
                      "longitude": 126.326515
                  },
                  {
                      "latitude": 33.25041,
                      "longitude": 126.32716
                  },
                  {
                      "latitude": 33.25037,
                      "longitude": 126.32742
                  },
                  {
                      "latitude": 33.250343,
                      "longitude": 126.32778
                  },
                  {
                      "latitude": 33.250355,
                      "longitude": 126.32821
                  },
                  {
                      "latitude": 33.25038,
                      "longitude": 126.328445
                  },
                  {
                      "latitude": 33.2506,
                      "longitude": 126.32975
                  },
                  {
                      "latitude": 33.250626,
                      "longitude": 126.329926
                  },
                  {
                      "latitude": 33.25064,
                      "longitude": 126.33002
                  },
                  {
                      "latitude": 33.25066,
                      "longitude": 126.330124
                  },
                  {
                      "latitude": 33.25073,
                      "longitude": 126.330536
                  },
                  {
                      "latitude": 33.250763,
                      "longitude": 126.33073
                  },
                  {
                      "latitude": 33.25086,
                      "longitude": 126.331215
                  },
                  {
                      "latitude": 33.251038,
                      "longitude": 126.33206
                  },
                  {
                      "latitude": 33.25155,
                      "longitude": 126.33372
                  },
                  {
                      "latitude": 33.251556,
                      "longitude": 126.33375
                  },
                  {
                      "latitude": 33.251698,
                      "longitude": 126.33421
                  },
                  {
                      "latitude": 33.25215,
                      "longitude": 126.33564
                  },
                  {
                      "latitude": 33.25241,
                      "longitude": 126.336395
                  },
                  {
                      "latitude": 33.25255,
                      "longitude": 126.336784
                  },
                  {
                      "latitude": 33.252953,
                      "longitude": 126.33783
                  },
                  {
                      "latitude": 33.253113,
                      "longitude": 126.338234
                  },
                  {
                      "latitude": 33.253265,
                      "longitude": 126.33861
                  },
                  {
                      "latitude": 33.253834,
                      "longitude": 126.340004
                  },
                  {
                      "latitude": 33.253994,
                      "longitude": 126.3404
                  },
                  {
                      "latitude": 33.254265,
                      "longitude": 126.34107
                  },
                  {
                      "latitude": 33.254368,
                      "longitude": 126.341324
                  },
                  {
                      "latitude": 33.25451,
                      "longitude": 126.34165
                  },
                  {
                      "latitude": 33.254578,
                      "longitude": 126.34181
                  },
                  {
                      "latitude": 33.254623,
                      "longitude": 126.341934
                  },
                  {
                      "latitude": 33.254738,
                      "longitude": 126.342255
                  },
                  {
                      "latitude": 33.254833,
                      "longitude": 126.342545
                  },
                  {
                      "latitude": 33.25491,
                      "longitude": 126.342804
                  },
                  {
                      "latitude": 33.255062,
                      "longitude": 126.34334
                  },
                  {
                      "latitude": 33.25519,
                      "longitude": 126.34377
                  },
                  {
                      "latitude": 33.255325,
                      "longitude": 126.34425
                  },
                  {
                      "latitude": 33.25554,
                      "longitude": 126.344986
                  },
                  {
                      "latitude": 33.2556,
                      "longitude": 126.3452
                  },
                  {
                      "latitude": 33.256084,
                      "longitude": 126.34687
                  },
                  {
                      "latitude": 33.256123,
                      "longitude": 126.34701
                  },
                  {
                      "latitude": 33.25634,
                      "longitude": 126.34774
                  },
                  {
                      "latitude": 33.25654,
                      "longitude": 126.34845
                  },
                  {
                      "latitude": 33.2567,
                      "longitude": 126.34901
                  },
                  {
                      "latitude": 33.256893,
                      "longitude": 126.34971
                  },
                  {
                      "latitude": 33.25699,
                      "longitude": 126.35002
                  },
                  {
                      "latitude": 33.25702,
                      "longitude": 126.35013
                  },
                  {
                      "latitude": 33.257442,
                      "longitude": 126.35158
                  },
                  {
                      "latitude": 33.25748,
                      "longitude": 126.35171
                  },
                  {
                      "latitude": 33.257565,
                      "longitude": 126.351944
                  },
                  {
                      "latitude": 33.25771,
                      "longitude": 126.352325
                  },
                  {
                      "latitude": 33.25778,
                      "longitude": 126.35247
                  },
                  {
                      "latitude": 33.25789,
                      "longitude": 126.35267
                  },
                  {
                      "latitude": 33.25803,
                      "longitude": 126.35292
                  },
                  {
                      "latitude": 33.25811,
                      "longitude": 126.353035
                  },
                  {
                      "latitude": 33.258198,
                      "longitude": 126.353165
                  },
                  {
                      "latitude": 33.258526,
                      "longitude": 126.353615
                  },
                  {
                      "latitude": 33.258915,
                      "longitude": 126.354164
                  },
                  {
                      "latitude": 33.258945,
                      "longitude": 126.3542
                  },
                  {
                      "latitude": 33.259098,
                      "longitude": 126.35443
                  },
                  {
                      "latitude": 33.25938,
                      "longitude": 126.35486
                  },
                  {
                      "latitude": 33.25947,
                      "longitude": 126.355
                  },
                  {
                      "latitude": 33.25955,
                      "longitude": 126.35515
                  },
                  {
                      "latitude": 33.25963,
                      "longitude": 126.35531
                  },
                  {
                      "latitude": 33.25968,
                      "longitude": 126.35542
                  },
                  {
                      "latitude": 33.259777,
                      "longitude": 126.35567
                  },
                  {
                      "latitude": 33.259865,
                      "longitude": 126.355995
                  },
                  {
                      "latitude": 33.259888,
                      "longitude": 126.356094
                  },
                  {
                      "latitude": 33.259914,
                      "longitude": 126.35624
                  },
                  {
                      "latitude": 33.25994,
                      "longitude": 126.35643
                  },
                  {
                      "latitude": 33.25996,
                      "longitude": 126.356674
                  },
                  {
                      "latitude": 33.259964,
                      "longitude": 126.35673
                  },
                  {
                      "latitude": 33.259968,
                      "longitude": 126.35695
                  },
                  {
                      "latitude": 33.259968,
                      "longitude": 126.35735
                  },
                  {
                      "latitude": 33.259968,
                      "longitude": 126.357925
                  },
                  {
                      "latitude": 33.259956,
                      "longitude": 126.35839
                  },
                  {
                      "latitude": 33.259964,
                      "longitude": 126.35885
                  },
                  {
                      "latitude": 33.25996,
                      "longitude": 126.35904
                  },
                  {
                      "latitude": 33.259964,
                      "longitude": 126.35935
                  },
                  {
                      "latitude": 33.259968,
                      "longitude": 126.359566
                  },
                  {
                      "latitude": 33.25998,
                      "longitude": 126.35975
                  },
                  {
                      "latitude": 33.25999,
                      "longitude": 126.359886
                  },
                  {
                      "latitude": 33.260006,
                      "longitude": 126.360016
                  },
                  {
                      "latitude": 33.26003,
                      "longitude": 126.36013
                  },
                  {
                      "latitude": 33.26005,
                      "longitude": 126.36026
                  },
                  {
                      "latitude": 33.26014,
                      "longitude": 126.360634
                  },
                  {
                      "latitude": 33.260235,
                      "longitude": 126.36093
                  },
                  {
                      "latitude": 33.260323,
                      "longitude": 126.361145
                  },
                  {
                      "latitude": 33.2606,
                      "longitude": 126.36176
                  },
                  {
                      "latitude": 33.260662,
                      "longitude": 126.3619
                  },
                  {
                      "latitude": 33.260857,
                      "longitude": 126.3624
                  },
                  {
                      "latitude": 33.26093,
                      "longitude": 126.362625
                  },
                  {
                      "latitude": 33.261024,
                      "longitude": 126.36296
                  },
                  {
                      "latitude": 33.26108,
                      "longitude": 126.36321
                  },
                  {
                      "latitude": 33.261143,
                      "longitude": 126.36353
                  },
                  {
                      "latitude": 33.261295,
                      "longitude": 126.364494
                  },
                  {
                      "latitude": 33.26132,
                      "longitude": 126.36465
                  },
                  {
                      "latitude": 33.261337,
                      "longitude": 126.36477
                  },
                  {
                      "latitude": 33.261368,
                      "longitude": 126.364944
                  },
                  {
                      "latitude": 33.261658,
                      "longitude": 126.366844
                  },
                  {
                      "latitude": 33.26167,
                      "longitude": 126.3669
                  },
                  {
                      "latitude": 33.2617,
                      "longitude": 126.367096
                  },
                  {
                      "latitude": 33.261765,
                      "longitude": 126.36745
                  },
                  {
                      "latitude": 33.26179,
                      "longitude": 126.36762
                  },
                  {
                      "latitude": 33.26184,
                      "longitude": 126.367836
                  },
                  {
                      "latitude": 33.261883,
                      "longitude": 126.36799
                  },
                  {
                      "latitude": 33.26197,
                      "longitude": 126.36825
                  },
                  {
                      "latitude": 33.262043,
                      "longitude": 126.36842
                  },
                  {
                      "latitude": 33.262123,
                      "longitude": 126.36859
                  },
                  {
                      "latitude": 33.262215,
                      "longitude": 126.36877
                  },
                  {
                      "latitude": 33.262257,
                      "longitude": 126.368835
                  },
                  {
                      "latitude": 33.262287,
                      "longitude": 126.36888
                  },
                  {
                      "latitude": 33.262474,
                      "longitude": 126.36916
                  },
                  {
                      "latitude": 33.26251,
                      "longitude": 126.3692
                  },
                  {
                      "latitude": 33.26266,
                      "longitude": 126.369385
                  },
                  {
                      "latitude": 33.26281,
                      "longitude": 126.369545
                  },
                  {
                      "latitude": 33.263107,
                      "longitude": 126.36981
                  },
                  {
                      "latitude": 33.263454,
                      "longitude": 126.370094
                  },
                  {
                      "latitude": 33.263783,
                      "longitude": 126.37037
                  },
                  {
                      "latitude": 33.264366,
                      "longitude": 126.370865
                  },
                  {
                      "latitude": 33.264416,
                      "longitude": 126.37091
                  },
                  {
                      "latitude": 33.264473,
                      "longitude": 126.370964
                  },
                  {
                      "latitude": 33.264713,
                      "longitude": 126.37125
                  },
                  {
                      "latitude": 33.26479,
                      "longitude": 126.371346
                  },
                  {
                      "latitude": 33.264828,
                      "longitude": 126.371414
                  },
                  {
                      "latitude": 33.26484,
                      "longitude": 126.37144
                  },
                  {
                      "latitude": 33.264893,
                      "longitude": 126.37154
                  },
                  {
                      "latitude": 33.26497,
                      "longitude": 126.37169
                  },
                  {
                      "latitude": 33.265022,
                      "longitude": 126.37184
                  },
                  {
                      "latitude": 33.26505,
                      "longitude": 126.37196
                  },
                  {
                      "latitude": 33.265076,
                      "longitude": 126.37211
                  },
                  {
                      "latitude": 33.265083,
                      "longitude": 126.372154
                  },
                  {
                      "latitude": 33.265102,
                      "longitude": 126.37224
                  },
                  {
                      "latitude": 33.265114,
                      "longitude": 126.37233
                  },
                  {
                      "latitude": 33.265125,
                      "longitude": 126.37245
                  },
                  {
                      "latitude": 33.265133,
                      "longitude": 126.37257
                  },
                  {
                      "latitude": 33.265133,
                      "longitude": 126.37265
                  },
                  {
                      "latitude": 33.26513,
                      "longitude": 126.372826
                  },
                  {
                      "latitude": 33.26511,
                      "longitude": 126.372955
                  },
                  {
                      "latitude": 33.265102,
                      "longitude": 126.37299
                  },
                  {
                      "latitude": 33.26509,
                      "longitude": 126.37305
                  },
                  {
                      "latitude": 33.265064,
                      "longitude": 126.37316
                  },
                  {
                      "latitude": 33.26506,
                      "longitude": 126.37318
                  },
                  {
                      "latitude": 33.265007,
                      "longitude": 126.37337
                  },
                  {
                      "latitude": 33.264797,
                      "longitude": 126.37412
                  },
                  {
                      "latitude": 33.264732,
                      "longitude": 126.37434
                  },
                  {
                      "latitude": 33.264545,
                      "longitude": 126.375
                  },
                  {
                      "latitude": 33.26451,
                      "longitude": 126.3751
                  },
                  {
                      "latitude": 33.264496,
                      "longitude": 126.37516
                  },
                  {
                      "latitude": 33.264412,
                      "longitude": 126.375496
                  },
                  {
                      "latitude": 33.264378,
                      "longitude": 126.37569
                  },
                  {
                      "latitude": 33.264355,
                      "longitude": 126.375946
                  },
                  {
                      "latitude": 33.264324,
                      "longitude": 126.37639
                  },
                  {
                      "latitude": 33.264305,
                      "longitude": 126.376785
                  },
                  {
                      "latitude": 33.26427,
                      "longitude": 126.3775
                  },
                  {
                      "latitude": 33.264267,
                      "longitude": 126.37754
                  },
                  {
                      "latitude": 33.264267,
                      "longitude": 126.3776
                  },
                  {
                      "latitude": 33.26424,
                      "longitude": 126.37813
                  },
                  {
                      "latitude": 33.264236,
                      "longitude": 126.378265
                  },
                  {
                      "latitude": 33.264233,
                      "longitude": 126.37833
                  },
                  {
                      "latitude": 33.26422,
                      "longitude": 126.37858
                  },
                  {
                      "latitude": 33.264156,
                      "longitude": 126.37991
                  },
                  {
                      "latitude": 33.26412,
                      "longitude": 126.38082
                  },
                  {
                      "latitude": 33.26407,
                      "longitude": 126.38203
                  },
                  {
                      "latitude": 33.264065,
                      "longitude": 126.38224
                  },
                  {
                      "latitude": 33.264065,
                      "longitude": 126.38226
                  },
                  {
                      "latitude": 33.264065,
                      "longitude": 126.38252
                  },
                  {
                      "latitude": 33.26411,
                      "longitude": 126.38322
                  },
                  {
                      "latitude": 33.264122,
                      "longitude": 126.38338
                  },
                  {
                      "latitude": 33.26418,
                      "longitude": 126.383934
                  },
                  {
                      "latitude": 33.26426,
                      "longitude": 126.38475
                  },
                  {
                      "latitude": 33.26444,
                      "longitude": 126.386475
                  },
                  {
                      "latitude": 33.264442,
                      "longitude": 126.38655
                  },
                  {
                      "latitude": 33.2645,
                      "longitude": 126.387184
                  },
                  {
                      "latitude": 33.264534,
                      "longitude": 126.387886
                  },
                  {
                      "latitude": 33.264534,
                      "longitude": 126.387955
                  },
                  {
                      "latitude": 33.26454,
                      "longitude": 126.38873
                  },
                  {
                      "latitude": 33.264538,
                      "longitude": 126.38906
                  },
                  {
                      "latitude": 33.264523,
                      "longitude": 126.38945
                  },
                  {
                      "latitude": 33.2645,
                      "longitude": 126.38983
                  },
                  {
                      "latitude": 33.264492,
                      "longitude": 126.38994
                  },
                  {
                      "latitude": 33.264458,
                      "longitude": 126.390366
                  },
                  {
                      "latitude": 33.26437,
                      "longitude": 126.39161
                  },
                  {
                      "latitude": 33.264305,
                      "longitude": 126.3922
                  },
                  {
                      "latitude": 33.264236,
                      "longitude": 126.39269
                  },
                  {
                      "latitude": 33.264168,
                      "longitude": 126.39303
                  },
                  {
                      "latitude": 33.26416,
                      "longitude": 126.39307
                  },
                  {
                      "latitude": 33.264076,
                      "longitude": 126.393425
                  },
                  {
                      "latitude": 33.263958,
                      "longitude": 126.39386
                  },
                  {
                      "latitude": 33.263844,
                      "longitude": 126.394264
                  },
                  {
                      "latitude": 33.26325,
                      "longitude": 126.39652
                  },
                  {
                      "latitude": 33.26315,
                      "longitude": 126.3969
                  },
                  {
                      "latitude": 33.263123,
                      "longitude": 126.396996
                  },
                  {
                      "latitude": 33.263054,
                      "longitude": 126.39725
                  },
                  {
                      "latitude": 33.263023,
                      "longitude": 126.39737
                  },
                  {
                      "latitude": 33.262905,
                      "longitude": 126.39782
                  },
                  {
                      "latitude": 33.262333,
                      "longitude": 126.39998
                  },
                  {
                      "latitude": 33.262253,
                      "longitude": 126.40025
                  },
                  {
                      "latitude": 33.262165,
                      "longitude": 126.40053
                  },
                  {
                      "latitude": 33.262115,
                      "longitude": 126.40065
                  },
                  {
                      "latitude": 33.262093,
                      "longitude": 126.400696
                  },
                  {
                      "latitude": 33.262054,
                      "longitude": 126.40077
                  },
                  {
                      "latitude": 33.26198,
                      "longitude": 126.400894
                  },
                  {
                      "latitude": 33.261913,
                      "longitude": 126.40098
                  },
                  {
                      "latitude": 33.261837,
                      "longitude": 126.401054
                  },
                  {
                      "latitude": 33.261765,
                      "longitude": 126.40112
                  },
                  {
                      "latitude": 33.261593,
                      "longitude": 126.401245
                  },
                  {
                      "latitude": 33.26145,
                      "longitude": 126.40134
                  },
                  {
                      "latitude": 33.26039,
                      "longitude": 126.40198
                  },
                  {
                      "latitude": 33.259926,
                      "longitude": 126.40227
                  },
                  {
                      "latitude": 33.25981,
                      "longitude": 126.40236
                  },
                  {
                      "latitude": 33.259663,
                      "longitude": 126.40248
                  },
                  {
                      "latitude": 33.25961,
                      "longitude": 126.40254
                  },
                  {
                      "latitude": 33.25953,
                      "longitude": 126.402626
                  },
                  {
                      "latitude": 33.25933,
                      "longitude": 126.40286
                  },
                  {
                      "latitude": 33.259243,
                      "longitude": 126.403015
                  },
                  {
                      "latitude": 33.25915,
                      "longitude": 126.4032
                  },
                  {
                      "latitude": 33.25884,
                      "longitude": 126.404
                  },
                  {
                      "latitude": 33.258385,
                      "longitude": 126.405174
                  },
                  {
                      "latitude": 33.258232,
                      "longitude": 126.40554
                  },
                  {
                      "latitude": 33.25821,
                      "longitude": 126.40561
                  },
                  {
                      "latitude": 33.25813,
                      "longitude": 126.40584
                  },
                  {
                      "latitude": 33.2581,
                      "longitude": 126.40593
                  },
                  {
                      "latitude": 33.2581,
                      "longitude": 126.40593
                  },
                  {
                      "latitude": 33.258095,
                      "longitude": 126.40594
                  },
                  {
                      "latitude": 33.25809,
                      "longitude": 126.405945
                  },
                  {
                      "latitude": 33.258083,
                      "longitude": 126.40595
                  },
                  {
                      "latitude": 33.25794,
                      "longitude": 126.40613
                  },
                  {
                      "latitude": 33.25792,
                      "longitude": 126.40616
                  },
                  {
                      "latitude": 33.257904,
                      "longitude": 126.40619
                  },
                  {
                      "latitude": 33.2577,
                      "longitude": 126.40673
                  },
                  {
                      "latitude": 33.257595,
                      "longitude": 126.40704
                  },
                  {
                      "latitude": 33.25738,
                      "longitude": 126.40763
                  },
                  {
                      "latitude": 33.25734,
                      "longitude": 126.40776
                  },
                  {
                      "latitude": 33.257114,
                      "longitude": 126.40849
                  },
                  {
                      "latitude": 33.256516,
                      "longitude": 126.41054
                  },
                  {
                      "latitude": 33.25643,
                      "longitude": 126.41083
                  },
                  {
                      "latitude": 33.256283,
                      "longitude": 126.41129
                  },
                  {
                      "latitude": 33.25598,
                      "longitude": 126.41227
                  },
                  {
                      "latitude": 33.255928,
                      "longitude": 126.412415
                  },
                  {
                      "latitude": 33.255875,
                      "longitude": 126.41255
                  },
                  {
                      "latitude": 33.255795,
                      "longitude": 126.412735
                  },
                  {
                      "latitude": 33.255672,
                      "longitude": 126.41301
                  },
                  {
                      "latitude": 33.255493,
                      "longitude": 126.41343
                  },
                  {
                      "latitude": 33.255413,
                      "longitude": 126.413605
                  },
                  {
                      "latitude": 33.255165,
                      "longitude": 126.4142
                  },
                  {
                      "latitude": 33.255165,
                      "longitude": 126.4142
                  },
                  {
                      "latitude": 33.25585,
                      "longitude": 126.41453
                  },
                  {
                      "latitude": 33.25585,
                      "longitude": 126.41453
                  },
                  {
                      "latitude": 33.25577,
                      "longitude": 126.414894
                  }
              ]
          },
          {
              "day": 3,
              "data": [],
              "pathList": []
          }
      ]
  }
  );

  const [day, setDay] = useState(DATA.planList[0].day);

  const [path, setPath] = useState(DATA.planList[0].pathList);

  const [schedule, setSchedule] = useState(DATA.planList[0].data);

  const dayPickItem = ({index,item}) => {
    //console.log("dayPiacker : ", item);
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
      {
        //더미용
        item.day === undefined
        ?
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
        :
        //셀렉트된 아이템
          item.day === day
          ?
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
                backgroundColor: '#eae2b7'
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  // -4 border Width가 각 2씩 * 2
                  width: screenWidth * 0.2 - 4,
                  color: '#000000',
                }}
                onPress={
                  () => {
                    setDay(item.day);
                    setPath(item.pathList);
                    setSchedule(item.data);
                  }
                }
              >
                {item.day}일차
              </Text>
            </TouchableOpacity>
          :
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
                backgroundColor: '#fcbf49'
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
                onPress={
                  () => {
                    setDay(item.day);
                    setPath(item.pathList);
                    setSchedule(item.data);
                  }
                }
              >
                {item.day}일차
              </Text>
            </TouchableOpacity>
        }
        
        {
        // 아래 라인
          item.day === day
          ?
          (
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
            <View
              style={{
                borderTopWidth: 2,
              }}
            />
          )}
      </View>
    )
  }

  const sheduleItem = ({index, item}) =>{
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
            borderWidth: 1,
            width: '100%',
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: screenHeight * 0.05,
              width: screenHeight * 0.05,
              borderRadius: pixelRatio * 99999,
              backgroundColor: '#0000FF',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                width: screenHeight * 0.05,
                fontSize: pixelRatio * 7,
                alignSelf: 'center',
                color: '#FFFFFF'
              }}
            >
              {index}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.stick} />

        </TouchableOpacity>
        
    </View>
    )
  }

  if (DATA.planList.length < 5) {
    for (let i = 5 - DATA.planList.length; i > 0; i--) {
      DATA.planList.push({});
    }
  }
  return (
    <SafeAreaView>
      <FlatList
          style={{
            height: screenHeight * 0.058,
          }}
          horizontal={true}
          data={DATA.planList}
          renderItem={dayPickItem}
        />
      <NaverMapView
        style={{
          width: '100%',
          height: screenHeight * 0.5,
          top: '-10%',
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
        }
        {
          path.length !== 0
          ?
            <Path
              coordinates={path}
              onClick={() => {
                console.warn('onClick! path');
              }}
              color={'rgba(255,0,0,0.3)'}
              width={4}
            />
          :
            undefined
        }
      </NaverMapView>
      <View
        style={{
          height: screenHeight * 0.5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: '#f77f00',
          top: '-2%',
        }}
      >
        
        <FlatList
          style={{
            height: screenHeight * 0.6,
          }}
          data={schedule}
          renderItem={sheduleItem}
        />
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
    width: screenWidth * 0.9

  },
  address: {
    fontSize: pixelRatio * 4,
    color: '#000000',
    textAlign: 'center',
  },
  stick: {
    backgroundColor: 'black',
    width: 1,
    height: 10,
    borderColor: 'black',
    border: 1,
    marginLeft: screenWidth * 0.038,
  },
});

export default CheckTripPlanDetail;
