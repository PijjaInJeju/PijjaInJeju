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

const Header = ({ navigation, title, menu }) => {
    return (
        <View
            style={{
                position: 'absolute',
                alignItems: 'center',
                flexDirection: 'row',
                width: screenWidth,
                height: screenHeight * 0.05,
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
                        navigation.dispatch(DrawerActions.jumpTo('MainScreen'));
                        navigation.navigate('Main');
                    }
                }
                >
                <Image
                    style={{
                        width: screenWidth * 0.05,
                        height: screenWidth * 0.05,
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
            {
                menu
                ?
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
                :
                undefined
            }
        </View>
    )
}

export default Header;