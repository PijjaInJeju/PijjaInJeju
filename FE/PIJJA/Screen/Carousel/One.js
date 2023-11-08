import React from "react";
import { View, Text, TouchableOpacity, PixelRatio, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const closeSize = 7 * pixelRatio;

const One = ({title}) =>{
    let profile = data.profile;
    let groupList = data.groupList;
    let setGroupList = data.setGroupList;

    const groupListItem = (item) =>{
        console.log(item);
        return (
            <Text
                style={{
                    color: 'black',
                }}
            >
                {item.title}fsafsa
            </Text>
        );
    }

    console.log("one Data : ",data);

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
                    {profile.nickname}님 환영합니다.
                </Text>
                
                {
                    groupList.length === 0
                    ?
                    <Text
                        style={{
                            color: 'black',
                            flex: 1,
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
                                color: 'black',
                            }}
                        >
                            신나는 제주도 여행중이시군요!
                        </Text>
                        {console.log(groupList[0].schedule)}
                        <Carousel
                            data={groupList[0].schedule}
                            renderItem={groupListItem}
                            sliderWidth={screenWidth}
                            itemWidth={screenWidth}
                            sliderHeight={screenHeight * 0.3}
                            itemHeight={screenHeight * 0.3}
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
export default One;