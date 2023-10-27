import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image,TouchableOpacity, PixelRatio, Dimensions, View,} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);

const MakeGroup = ({ navigation }) => {

const MakeGroupImage = require('../Image/s_Create_Group.png');

  return (
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
