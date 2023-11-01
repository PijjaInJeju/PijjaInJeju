import React from 'react'
import { Text, View, Button, TouchableOpacity, Image, PixelRatio, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { DrawerActions } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);

const Logo = require('../Image/k_Logo.png');

const Header = ({ navigation, title }) => {
    console.log("safsa")
    return (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                width: screenWidth,
            }}
        >
            <TouchableOpacity
                style={{
                    width: '5%'
                }}
                onPress={
                    () => {
                        navigation.navigate("Main");
                    }
                }
                >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'stretch',
                    } }
                    source={Logo}
                />
            </TouchableOpacity>
            <View
                style={{
                    width: '90%',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#000000'
                    }}
                >
                    {title}
                </Text>
            </View>
            <Icon
                style={{
                    width: '5%'
                }}
                name='menu' 
                size={30}
                color="#000000"
                onPress={ ()=>{
                    navigation.dispatch(DrawerActions.openDrawer());
                }}
            />
        </View>
    )
}

export default Header;