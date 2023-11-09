import React from "react";
import { View, Text, TouchableOpacity, Image, PixelRatio, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const noImage = require('../../Image/s_noImage.jpg');

const Two = ({data}) =>{
    let profile =       data.profile;
    let groupList =     data.groupList;
    let setGroupList =  data.setGroupList;
    const groupListItem = ({item}) =>{
        console.log(item);
        return (
            <View
                style={{
                    alignItems: 'center',
                    width: screenWidth * 0.6,
                }}
            >
                <Text
                    style={{
                        color: 'black',
                        flexDirection: 'row'
                    }}
                >
                    {item.title}fsafsa
                    
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        width: screenWidth * 0.6,
                        height: screenHeight * 0.27,
                    }}
                >
                    {
                        //<Icon
                        //    style={{
                        //        color: 'gray',
                        //        alignSelf: 'center',
                        //    }}
                        //    size={30}
                        //    name="left"
                        ///>
                    }
                    <Image
                        style={{
                            width: screenWidth * 0.6,
                            height: screenHeight * 0.27,
                            resizeMode: 'contain',
                        }}
                        source={noImage}
                    />
                    {
                        //<Icon
                        //    style={{
                        //        color: 'gray',
                        //        alignSelf: 'center',
                        //    }}
                        //    size={30}
                        //    name="right"
                        ///>
                    }
                </View>
            </View>
        );
    }

    return (
        <View>
            <View
                style={{
                    width: screenWidth * 0.7,
                    height: screenHeight * 0.4,
                    borderWidth: 1,
                    borderRadius: 50,
                    borderColor: 'gray',
                    alignSelf: 'center',
                    paddingLeft: '5%',
                    paddingTop: '3%',
                    backgroundColor: 'white',
                }}
            >
                <Text
                    style={{
                        width: screenWidth * 0.6,
                        fontWeight: "bold",
                        fontSize: pixelRatio * 8,
                        color: 'black',
                    }}
                >
                    {profile.nickname}님 환영합니다.
                </Text>
                
                {
                    groupList.length === 0
                    ?
                    <Text
                        style={{
                            width: screenWidth * 0.6,
                            color: 'black',
                            flex: 1,
                            fontSize: pixelRatio * 3.5,
                        }}
                    >
                        여행 그룹이 없어요 ㅠㅠ..
                    </Text>
                    :
                    <View
                        style={{
                            
                        }}
                    >
                        <Text
                            style={{
                                width: screenWidth * 0.6,
                                color: 'black',
                                fontSize: pixelRatio * 4,
                            }}
                        >
                            신나는 제주도 여행중이시군요!
                        </Text>
                        {console.log(groupList[0].schedule)}
                        <Carousel
                            layout={'tinder'}
                            layoutCardOffset={`9`}
                            data={groupList[0].schedule}
                            renderItem={groupListItem}
                            sliderWidth={screenWidth * 0.6}
                            itemWidth={screenWidth}
                            sliderHeight={screenHeight * 0.2}
                            itemHeight={screenHeight * 0.5}
                        />
                    </View>
                }
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
export default Two;