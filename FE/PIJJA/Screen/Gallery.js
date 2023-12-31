import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

const Gallery = ({ navigation }) => {
  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <Text>그룹 생성</Text>
      {/* <Button
        title="go_to_Main"
        onPress={() => navigation.navigate('Main')}
        buttonStyle={{ width: 100, height: 100 }}
      ></Button> */}
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
});

export default Gallery;
