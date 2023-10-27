import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';


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
