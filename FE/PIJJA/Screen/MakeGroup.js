import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, SafeAreaView, Image,TouchableOpacity, PixelRatio, Dimensions, View,} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);
=======
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 68b0da22e8e33b615c9cc4b1b68e3a55abcd67ad

import Button from '../components/Button.js';

const MakeGroup = ({ navigation }) => {

const MakeGroupImage = require('../Image/s_Create_Group.png');

  return (
<<<<<<< HEAD
    <SafeAreaView 
    style={
      [
        styles.main,
        styles.flex,
      ]
    }>
      <Image
        source={MakeGroupImage}
        style={[styles.img,styles.flex,]}
      />
      <View style={styles.button}>
        <TouchableOpacity >
          <View>
            <Text style={{
              alignContent: 'center',
            }}>그룹장</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.flex}>
        <View>
          <Text>멤버</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
=======
    <View style={styles.container}>
      {/* <Button
        title="go_to_Main"
        onPress={() => navigation.navigate('Main')}
        buttonStyle={{ width: 100, height: 100 }}
      ></Button> */}
    </View>
>>>>>>> 68b0da22e8e33b615c9cc4b1b68e3a55abcd67ad
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  }, 
  img:{
    resizeMode: "stretch",
    height: screenHeight * 0.3,
    width: screenWidth,
    
  },
  main: {
    backgroundColor: 'white',
    flex: 1
  },
  button: {
    alignContent: 'center',
  }
});

export default MakeGroup;
