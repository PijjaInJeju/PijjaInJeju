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
                height: '5%'
            }}
        >
            <TouchableOpacity
                style={{
                    width: '5%',
                    paddingLeft: '1%',
                    marginTop: '1%',
                }}
                onPress={
                    () => {
                        navigation.navigate("Main");
                    }
                }
                >
                <Image
                    style={{
                        width: 15 * pixelRatio,
                        height: 15 * pixelRatio,
                        resizeMode: 'stretch',
                    } }
                    source={Logo}
                />
            </TouchableOpacity>
            <View
                style={{
                    width: '88%',
                    paddingLeft: 1,
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
                    width: '5%',
                    paddingRight: '1%',
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