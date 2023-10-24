import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App.js';
import Button from '../components/Button.js';
import Main from './Main.js';

import { StyleSheet, Text, View } from 'react-native';

const MakeGroup = ({ navigation }) => {
  //let b_res = 0;
  const [b_res, setBtnRes] = useState(0);
  return (
    <View style={styles.container}>
      <Button
        title="go_to_Main"
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

export default MakeGroup;
