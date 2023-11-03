import React,{useState} from 'react';
import { SafeAreaView, Text, StyleSheet, PixelRatio, Dimensions, FlatList, Button, View, TouchableOpacity, TextInput } from "react-native";

import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

import Icon from 'react-native-vector-icons/Entypo'; 
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/FontAwesome';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);



const CreateScheduleMap = ({ navigation }) => {
    const P0 = {latitude: 37.564362, longitude: 126.977011};
    const P1 = {latitude: 37.565051, longitude: 126.978567};
    const P2 = {latitude: 37.565383, longitude: 126.976292};

    

    const [searchList,setSearchList] = useState([
        {
            id: "1",
            title: "호텔 케니 서귀포",
            address: "제주 서귀포시 동문로 42 호텔케니 서귀포",
            select: false,
        },
        {
            id: "2",
            title: "기당미술관",
            address: "제주 서귀포시 남성종로 153번길 15",
            select: false,
        },
        {
            id: "3",
            title: "알 수 없는 곳",
            address: "알 수 없는곳 주소",
            select: false,
        },
    ]);

    const [search, setSearch] = useState("");

    const [scheduleList,setScheduleList] = useState(new Array());

    const item = ({ item, onPress, backgroundColor, textColor }) => (
        <View
            style={{
                flexDirection: 'row',
                flex: 1
            }}
        >
            <Icon3 
                style={{
                    alignSelf: 'center',
                }}
                name='magnifying-glass-location'
                size={10 * pixelRatio}
            />
            <View
                style={{
                    flexDirection: 'column',
                    flex: 4,
                }}
            >
                <Text>{item.title}</Text>
                <Text>{item.address}</Text>
            </View>
            <View
                style={{
                    alignSelf: 'center',
                    alignItems: 'flex-end',
                    flex: 1,
                }}
            >
            {
                item.select
                ?
                <Icon
                    style={{
                        marginRight: screenWidth * 0.05
                    }}
                    name='squared-minus'
                    size={5 * pixelRatio}
                    onPress={ () => {
                        console.log(item.title,"을 삭제 시도중")
                        let newScheduleList = scheduleList.filter(
                            (entity) => (item.id !== entity.id)
                        );
                        let newSearchList = searchList.map(
                            (entity) =>{
                                if(item.id === entity.id){
                                    entity.select = !entity.select;
                                }
                                return entity;
                            }
                        )
                        setSearchList(newSearchList);
                        
                        setScheduleList(newScheduleList);

                        console.log(scheduleList);
                    }}
                />
                :
                <Icon
                    style={{
                        marginRight: screenWidth * 0.05
                    }}
                    name='squared-plus'
                    size={5 * pixelRatio}
                    onPress={ () => {
                        console.log(item.title,"을 추가 시도중")
                        let newScheduleList = [...scheduleList,item];
                        let newSearchList = searchList.map(
                            (entity) =>{
                                if(item.id === entity.id){
                                    entity.select = ! entity.select;
                                }
                                return entity;
                            }
                        )
                        setSearchList(newSearchList);
                        setScheduleList(newScheduleList);
                    }}
                />
            }
            </View>
        </View>
        
    );

    const schedule = ({item})=>{
        return (
            <View
                style={{
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingRight : screenWidth * 0.01,
                    paddingLeft : screenWidth * 0.01,
                    marginRight: screenWidth * 0.01,
                }}
            >
                <Text>
                    {item.title}
                </Text>
                <Icon4
                    name='close'
                    onPress={
                        () => {
                            console.log(item,"을 삭제 시도중")
                            let newScheduleList = scheduleList.filter(
                                (entity) => (item.id !== entity.id)
                            );
                            let newSearchList = searchList.map(
                                (entity) =>{
                                    if(item.id === entity.id){
                                        entity.select = false;
                                    }
                                    return entity;
                                }
                            )
                            setSearchList(newSearchList);
                            setScheduleList(newScheduleList);
                            console.log(scheduleList);
                        }
                    }
                />
            </View>
        );
    }



    return (
        <SafeAreaView style={styles.container}>
            <NaverMapView style={{
                width: '100%', 
                height: '45%'
            }}
                showsMyLocationButton={true}
                center={{...P0, zoom: 16}}
                onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
                onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
                onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
            >
                <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')}/>
                <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>
                <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>
                <Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10}/>
                <Polyline coordinates={[P1, P2]} onClick={() => console.warn('onClick! polyline')}/>
                <Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => console.warn('onClick! circle')}/>
                <Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.warn('onClick! polygon')}/>
            </NaverMapView>
            <View
                style={{
                    width: '100%',
                    height: '11%',
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        backgroundColor: "#FFFFFF",
                    }}
                    onPress={ 
                        () => {
                            console.log("스케쥴 만들기")
                            navigation.push('RecommendSchedule',{scheduleList: scheduleList});
                        }
                    }
                >
                    <Icon
                        name="calendar" 
                        size={30} 
                        color="#000000" 
                    />

                    <Text
                        style={{
                            color: "#000000",
                            paddingRight: screenWidth * 0.02,
                        }}
                    >
                        일정 만들기
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                        width: '50%',
                        flexDirection: 'row'
                    }}
                >
                    <Icon2
                        style={{
                            alignSelf: 'center'
                        }}
                        name='search'
                        color='black'
                        size={screenWidth * 0.05}
                    />
                    <TextInput
                        style={{
                            width: screenWidth * 0.45,
                            padding: 0,
                            color: "#000000",
                        }}
                        onChangeText={setSearch}
                        value={search}
                        placeholder="검색 할 장소를 입력하세요."
                        placeholderTextColor={"#111111"}
                    />
                </View>
                <FlatList
                    style={{
                        width: '100%',
                        flex: 1,
                        backgroundColor: "#000000"
                    }}
                    horizontal={true}
                    data={scheduleList}
                    renderItem={schedule}

                >                   

                </FlatList>
            </View>
            <FlatList
                style={{
                    width: '100%',
                    height: '45%',
                    flex: 1,
                    backgroundColor: "#000000"
                }}
                data={searchList}
                renderItem={item}
                keyExtractor={ (item) => item.id }
            >
            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    webview: {
      flex: 1,
      width: screenWidth,
      height: screenHeight,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
  });


export default CreateScheduleMap;