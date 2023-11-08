import React from "react";
import { View, Text, TouchableOpacity, PixelRatio, Dimensions, Image } from "react-native";

import Carousel from "react-native-snap-carousel";

import Header from "../../component/Header";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const closeSize = 7 * pixelRatio;

const zeroLengthGroupComponent = () => {

}

const fullLengthGroupCompoent = () => {
    
}

const backGroundImageList = [
    require('../../Image/s_landingImage.jpg'),
    require('../../Image/s_landingImage2.jpg'),
    require('../../Image/s_landingImage3.jpg'),
];

const One = ({data}) =>{
    let profile =       data.profile;
    let groupList =     data.groupList;
    let setGroupList =  data.setGroupList;

    
    console.log("one Data : ",data);

    const drawBackGroundImage = ({item})=>{
        console.log("item : ",item);
        return (
            <Image
                style={{
                    width: screenWidth,
                    height: screenHeight,
                    zIndex: -50,
                }}
                source={item}
            />
        );
    }



    return (
        <View>
            <Carousel
                style={{
                    position: 'absolute',
                    zIndex: -1,
                }}
                data={backGroundImageList}
                renderItem={drawBackGroundImage}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                sliderHeight={screenHeight}
                itemHeight={screenHeight}
            />
            <Header
                title={"fsafsa"}
            />
            <View
                style={{
                    position: 'absolute',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: screenHeight * 0.5,
                    width: screenWidth,
                    marginTop: screenHeight * 0.06,
                }}
            >
                <Text
                    style={{
                        color: 'black',
                        width: '90%',
                        alignSelf: 'center',
                        textAlign: 'left',
                        fontSize: pixelRatio * 6,
                    }}
                >
                    {profile.nickname}님 환영합니다.
                </Text>
                <View 
                    style={{
                        borderTopWidth: 2,
                        alignSelf: 'center',
                        width: '90%',
                    }}
                />
            </View>
            <View
                style={{
                    position: 'absolute',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: screenHeight,
                }}
            >
                <Text
                    style={{
                        width: screenWidth,
                        textAlign: 'center',
                        fontSize: pixelRatio * 8
                    }}
                >
                    가을 바람과 함께하는{'\n'} 
                    특별한 제주 여행
                </Text>  
            </View>
            
        </View>
    );
}
export default One;