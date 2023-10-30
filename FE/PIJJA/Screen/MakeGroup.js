
//MakeGroup
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  View,
} from 'react-native';

//const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const MakeGroup = ({ navigation }) => {
  const MakeGroupImage = require('../Image/s_Create_Group.png');

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={MakeGroupImage} style={[styles.img]} />
      <View style={styles.buttonWrapper}>
        <Text>당신은 누구인가요?</Text>
        <TouchableOpacity style={styles.buttonLeader}>
          <Text>그룹장</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFollower}>
          <View>
            <Text>멤버</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginVertical: 20,
  },
  img: {
    resizeMode: 'stretch',
    height: 340,
    width: 280,
  },
  main: {
    flex: 1,
  },
  buttonLeader: {
    alignContent: 'center',
    width: 360,
    height: 80,
    backgroundColor: '#fcbf49',
    borderRadius: 10,
  },
  buttonFollower: {
    alignContent: 'center',
    width: 360,
    height: 80,
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#f77f00',
    borderRadius: 10,
  },
});

export default MakeGroup;
