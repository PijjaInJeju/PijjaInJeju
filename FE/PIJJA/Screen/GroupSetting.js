import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

const GroupSetting = ({ navigation }) => {
  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text>그룹의 성향은?</Text>
        <View>
          <Text>그룹 생성</Text>
          <View style={styles.travelStyleWrapper}>
            <TouchableOpacity style={styles.buttonFollower}>
              <Text style={styles.tasteButton}>성향 1</Text>
            </TouchableOpacity>
          </View>
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
  tasteButton: {
    width: 40,
    height: 30,
  },
});

export default GroupSetting;
