import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

const GroupSetting = ({ navigation }) => {
  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleTravel}>여행 그룹의 성향은?</Text>
        <View style={styles.travelStyleWrapper}>
          <ScrollView horizontal={true}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: '#aaaaaa' },
                pressed && { backgroundColor: '#ffffff' },
                styles.tasteButton,
              ]}
            >
              <Text>힐링</Text>
            </Pressable>
          </ScrollView>
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
    borderRadius: 24,
    marginTop: 20,
    marginHorizontal: 14,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  scrollStyle: {
    horizontal,
  },
});

export default GroupSetting;
