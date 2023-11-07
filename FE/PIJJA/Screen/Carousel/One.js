import React from "react";
import { View, Text, TouchableOpacity, PixelRatio, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const closeSize = 7 * pixelRatio;

const One = ({data}) =>{

    console.log(data);
    return (
        <View>
            <View
                style={{
                    width: '70%',
                    height: '40%',
                    borderWidth: 1,
                    borderRadius: 50,
                    alignSelf: 'center',
                    paddingLeft: '5%',
                    paddingTop: '3%',
                    backgroundColor: 'white',
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 30,
                        color: 'black',
                    }}
                >
                    {data.nickName}님 환영합니다.
                </Text>
            </View>
            <View
                style={{
                    width: '70%',
                    height: '40%',
                    borderWidth: 1,
                    borderRadius: 50,
                    alignSelf: 'center',
                    paddingLeft: '5%',
                    paddingTop: '3%',
                    backgroundColor: 'white',

                }}
            >
                <Text
                    style={{
                        color: 'black',
                        flex: 1,
                    }}
                >
                    신나는 제주도 여행중이시군요!
                </Text>
                <TouchableOpacity
                    onPress={ () => {
                        console.log("일정보기를 클릭했어요 ");
                    }}
                    style={{
                        width: '25%',
                        flex: 1,
                        alignSelf: 'flex-end',
                        paddingRight: '1%',
                    }}
                >
                    <Text
                        style={{
                            borderWidth: 1,
                            borderRadius: 10,
                            color: 'black',
                            textAlign: 'center',
                            backgroundColor: '#fcbf49',
                        }}
                    >
                        일정 만들기
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default One;