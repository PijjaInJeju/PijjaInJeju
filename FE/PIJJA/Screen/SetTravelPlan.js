import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import JoinGroup from './JoinGroup.js';
import CreateScheduleMap from './CreateScheduleMap.js';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

screenWidth = Dimensions.get('window').width;
screenHeight = Dimensions.get('window').height;
// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const SetTravelPlan = ({ navigation }) => {
  const planLogo = require('../Image/k_setPlanLogo.png');

  //let b_res = 0;
  const [titileText, setText] = useState(0);
  const [dateSelected, setDateSelected] = useState([0, 0, 0]);

  const [dateModelShow1, setDateModel1] = useState(false);
  const [dateModelShow2, setDateModel2] = useState(false);
  const [travelStartData, setTravelStartData] = useState(false);
  const [travelEndData, setTravelEndData] = useState(false);
  const [travelStart, setTravelStart] = useState(false);
  const [travelEnd, setTravelEnd] = useState(false);
  const [elasedDay, setElasedDay] = useState(false);
  const [nextOk, setNextOk] = useState(false);

  const nowDate = new Date();
  //const daysOfMonth = [31, fabDay, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const showDatePicker1 = () => {
    console.log('push button');
    setDateModel1(true);
    console.log(dateModelShow1);
  };

  const dateModelCancle1 = () => {
    setDateModel1(false);
    console.log('close button1');
    console.log(dateModelShow1);
  };

  const showDatePicker2 = () => {
    console.log('push button2');
    setDateModel2(true);
  };

  const dateModelCancle2 = () => {
    setDateModel2(false);
    console.log(dateModelShow2);
  };

  const fabDay = new Date(nowDate.getFullYear(), 2, 0).getDate();

  const dateConfirm1 = date => {
    //date = dateSelected;
    //setDateModel1(date);
    console.warn('A date has been picked: ', date);
    console.warn('A date has been picked: ', date.getDate());
    console.warn('A date has been picked: ', date.getHours());

    let confirmDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    setTravelStart(confirmDate.getTime());
    // travelStart = confirmDate.getTime();
    // travelStart = confirmDate.console.warn(nowDate);
    // console.warn(nowDate.getDate());
    // console.warn(nowDate.getFullYear());
    // console.warn(fabDay);
    dateModelCancle1();
  };

  const dateConfirm2 = date => {
    //date = dateSelected;
    //setDateSelected2(date);
    console.warn('A date2 has been picked: ', date);
    console.warn('A date2 has been picked: ', date.getDate());
    console.warn('A date2 has been picked: ', date.getHours());
    let conNextOk = true;
    let confirmDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    setTravelEnd(confirmDate.getTime());

    let startDay = travelStart / (1000 * 60 * 60 * 24);
    let endDay = confirmDate.getTime() / (1000 * 60 * 60 * 24);
    let elasedDay = endDay - startDay + 1;

    //console.log(travelStart);
    if (travelStart == 0) {
      Alert.alert('여행 시작일을 입력해주세요.');
      conNextOk = false;
    } else if (elasedDay < 1) {
      Alert.alert('여행 도착일이 더 길게 입력해주세요.');
      conNextOk = false;
    }

    // travelStart = confirmDate.console.warn(nowDate);
    // console.warn(nowDate.getDate());
    // console.warn(nowDate.getFullYear());
    // console.warn(fabDay);
    console.log('s day:', startDay);
    console.log('E day:', endDay);
    console.log('p day:', elasedDay);
    if (conNextOk === true) {
      setNextOk(true);
    } else {
      setElasedDay(elasedDay);
      setNextOk(false);
    }
    dateModelCancle2();
  };

  return (
    <View style={styles.container}>
      <View style={styles.outerRectangle} />
      <View style={styles.outerCircle} />
      <Image
        style={styles.setPlanImg}
        source={require('../Image/k_setPlanLogo.png')}
      />
      <TextInput
        style={[
          styles.planContentText,
          {
            top: screenHeight * 0.4,
          },
        ]}
        onChangeText={nowText => setText(nowText)}
        defaultValue={titileText}
      ></TextInput>
      <TouchableOpacity
        onPress={showDatePicker1}
        style={[
          styles.planContentText,
          {
            top: screenHeight * 0.58,
            left: screenWidth * 0.1,
          },
        ]}
      ></TouchableOpacity>

      <TouchableOpacity
        onPress={showDatePicker2}
        style={[
          styles.planContentText,
          {
            top: screenHeight * 0.58,
            left: screenWidth * 0.56,
          },
        ]}
      >
        {/* <TextInput
        // style={[
        //   styles.planContentText,
        //   {
        //     top: screenHeight * 0.58,
        //     left: screenWidth * 0.56,
        //   },
        // ]}
        >
          Test
        </TextInput> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.travelPlanButton}
        onPress={() => {
          if (nextOk) {
            navigation.navigate('CreateScheduleMap', {
              travelTitle: titileText,
            });
          } else {
            Alert.alert('여행 일정을 입력해주세요.');
          }
        }}
      >
        <Text style={styles.travelPlanText}>다음</Text>
      </TouchableOpacity>

      {/* picker modal */}
      <DateTimePickerModal
        isVisible={dateModelShow1}
        mode="datetime"
        onConfirm={dateConfirm1}
        onCancel={dateModelCancle1}
        display="default"
      />
      <DateTimePickerModal
        isVisible={dateModelShow2}
        mode="datetime"
        onConfirm={dateConfirm2}
        onCancel={dateModelCancle2}
        display="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerRectangle: {
    position: 'absolute',
    top: screenHeight * 0,
    width: screenWidth,
    height: screenHeight * 0.4,
    backgroundColor: 'rgb(254, 196, 38)',
  },
  outerCircle: {
    position: 'absolute',
    top: screenHeight * 0.03,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth * 1.2,
    height: screenWidth * 0.84,
    borderRadius: screenWidth,
    backgroundColor: 'rgb(254, 196, 38)',
  },
  planContentText: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  travelPlanButton: {
    position: 'absolute',
    top: screenHeight * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 60,
    backgroundColor: '#f77f00',
    borderRadius: 16,
    marginTop: 34,
  },
  travelPlanText: {
    fontSize: 24,
    color: '#ffffff',
  },
  setPlanImg: {
    position: 'absolute',
    top: screenHeight * 0.07,
    width: screenWidth * 0.46,
    height: screenHeight * 0.3,
    resizeMode: 'stretch',
    borderRadius: 3,
  },
  buttonComplete: {},
});

export default SetTravelPlan;
