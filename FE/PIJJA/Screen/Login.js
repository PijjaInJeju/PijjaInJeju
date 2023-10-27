import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main.js';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button.js';

const Login = ({ navigation }) => {
  //let b_res = 0;
  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <Button
        title="goToMain"
        onPress={() => navigation.navigate('Main')}
        buttonStyle={{ width: 100, height: 100 }}
      ></Button>
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

export default Login;
