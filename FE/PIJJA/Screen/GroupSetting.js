import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GroupSetting = ({ navigation }) => {
  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleTravel}>여행 그룹의 성향은?</Text>
        <View style={styles.travelStyleWrapper}>
          <TouchableOpacity style={styles.buttonFollower}>
            <Text style={styles.tasteButton}>성향 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFollower}>
            <Text style={styles.tasteButton}>성향 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFollower}>
            <Text style={styles.tasteButton}>성향 1</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  titleTravel: {
    fontSize: 20,
    marginLeft: 24,
  },
  travelStyleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonFollower: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasteButton: {
    width: 100,
    height: 60,
    backgroundColor: '#fcbf49',
    borderRadius: 24,
    marginTop: 20,
    marginHorizontal: 14,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});

export default GroupSetting;
