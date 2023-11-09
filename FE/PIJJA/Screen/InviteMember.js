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
import GroupSetting from './GroupSetting.js';

//const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const InviteMember = ({ navigation }) => {
  const MakeGroupImage = require('../Image/k_inviteMember.png');

  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={MakeGroupImage} style={[styles.img]} />
      <View style={styles.buttonWrapper}>
        <Text style={styles.groupText}>멤버 코드를 입력해주세요</Text>
        <TouchableOpacity style={styles.buttonFollower}>
          <Text style={styles.buttonTextMember}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLeader}>
          <IconFont6 name="user-group" color={'#ffffff'} size={36} />
          <Text style={styles.buttonTextLeader}>멤버 추가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonComplete}
          onPress={() => {
            navigation.navigate('GroupSetting');
          }}
        >
          <Text style={styles.buttonTextComplete}>완료</Text>
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
    height: 260,
    width: 260,
  },
  main: {
    flex: 1,
  },
  buttonLeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 60,
    backgroundColor: '#fcbf49',
    borderRadius: 16,
    marginTop: 16,
  },
  buttonFollower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#f77f00',
    borderRadius: 16,
    marginTop: 14,
  },
  buttonComplete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 320,
    height: 60,
    backgroundColor: '#f77f00',
    borderRadius: 16,
    marginTop: 34,
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
  buttonTextComplete: {
    fontSize: 24,
    color: '#ffffff',
  },
  groupText: {
    marginLeft: '2%',
    fontSize: 18,
  },
});

export default InviteMember;
