
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
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont6 from 'react-native-vector-icons/FontAwesome6';
import InviteMember from './InviteMember.js';

//const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const MakeGroup = ({ navigation }) => {
  const MakeGroupImage = require('../Image/s_Create_Group.png');

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={MakeGroupImage} style={[styles.img]} />
      <View style={styles.buttonWrapper}>
<<<<<<< HEAD
        <Text style={styles.groupText}>당신은 누구인가요?</Text>
        <TouchableOpacity
          style={styles.buttonLeader}
          onPress={() => {
            navigation.navigate('InviteMember');
          }}
        >
          <IconMaterial name="account-group" color={'#ffffff'} size={42} />
          <Text style={styles.buttonTextLeader}>그룹장</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFollower}>
          <IconFont6 name="user-group" color={'#fcbf49'} size={36} />
          <Text style={styles.buttonTextMember}>멤버</Text>
=======
        <Text>당신은 누구인가요?</Text>
        <TouchableOpacity style={styles.buttonLeader}>
          <Text>그룹장</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFollower}>
          <View>
            <Text>멤버</Text>
          </View>
>>>>>>> bc1d90d9285c99393b482668a98f7c305fbdfc18
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
<<<<<<< HEAD
    width: '80%',
    height: '46%',
=======
    height: 340,
    width: 280,
>>>>>>> bc1d90d9285c99393b482668a98f7c305fbdfc18
  },
  main: {
    flex: 1,
  },
  buttonLeader: {
<<<<<<< HEAD
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 74,
    backgroundColor: '#fcbf49',
    borderRadius: 16,
    marginTop: 20,
  },
  buttonFollower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 74,
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#f77f00',
    borderRadius: 16,
    marginTop: 14,
  },
  buttonTextLeader: {
    marginRight: '30%',
    fontSize: 24,
    color: '#ffffff',
  },
  buttonTextMember: {
    marginRight: '30%',
    fontSize: 24,
    color: '#f77f00',
  },
  groupText: {
    marginTop: 30,
    marginLeft: '2%',
    fontSize: 18,
=======
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
>>>>>>> bc1d90d9285c99393b482668a98f7c305fbdfc18
  },
});

export default MakeGroup;
