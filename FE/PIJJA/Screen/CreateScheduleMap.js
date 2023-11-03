import React,{useState} from 'react';
import { SafeAreaView, Text, StyleSheet, PixelRatio, Dimensions, FlatList, Button, View, TouchableOpacity, TextInput } from "react-native";

import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

import Icon from 'react-native-vector-icons/Entypo'; 
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import Header from '../component/Header';


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

const closeSize = 7 * pixelRatio;

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);

const Data = {
	start: {
		longitude : 127.03623707637095,
		latitude : 37.5004967273559,
	},
	end:{
		longitude : 127.02761570877878,
		latitude : 37.49802463750997,
	},
	data: [
		{
            longitude : 127.03623707637095,
            latitude :37.5004967273559
        },
        {
            longitude : 127.03640094900861,
            latitude :37.50054394703577
        },
        {
            longitude : 127.03640094900861,
            latitude :37.50054394703577
        },
        {
            longitude : 127.03640094900861,
            latitude :37.50054394703577
        },
        {
            longitude : 127.0363231735163,
            latitude :37.50071337040164
        },
        {
            longitude : 127.03603431343353,
            latitude :37.500624486650466
        },
        {
            longitude : 127.03561213333066,
            latitude :37.50049393867847
        },
        {
            longitude : 127.0355899133666,
            latitude :37.50048560591409
        },
        {
            longitude : 127.03471500007178,
            latitude :37.50023561924247
        },
        {
            longitude : 127.03467889256143,
            latitude :37.50022450877363
        },
        {
            longitude : 127.03391230281892,
            latitude :37.499971746592585
        },
        {
            longitude : 127.03317071001534,
            latitude :37.49974675941213
        },
        {
            longitude : 127.0330346124702,
            latitude :37.49970509514167
        },
        {
            longitude : 127.03276241753704,
            latitude :37.499616211690565
        },
        {
            longitude : 127.03098481671779,
            latitude :37.49908013093717
        },
        {
            longitude : 127.0298571514778,
            latitude :37.498730151347296
        },
        {
            longitude : 127.02842673907917,
            latitude :37.49827184557418
        },
        {
            longitude : 127.02832397159786,
            latitude :37.49823851426796
        },
        {
            longitude : 127.02781846637353,
            latitude :37.498085745162186
        },
        {
            longitude : 127.02769347877101,
            latitude :37.49804963600205
        },
        {
            longitude : 127.02761570877878,
            latitude :37.49802463750997
        }
	]
};


const CreateScheduleMap = ({ navigation }) => {

    
    const Start = {latitude: 37.5004967273559, longitude: 127.03623707637095};
    const End   = {latitude: 37.49802463750997, longitude: 127.02761570877878};
    
    const Mid = { latitude: ( Start.latitude + End.latitude )/ 2, longitude: ( Start.longitude + End.longitude )/ 2}

    const loadData = Data.data;

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

    const item = ({ item }) => (
        <View
            style={{
                flexDirection: 'column'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginBottom: '1%',
                    marginTop: '1%',
                }}
            >
                <Icon3 
                    style={{
                        alignSelf: 'center',
                        color: '#f77f00',
                    }}
                    name='location-dot'
                    size={10 * pixelRatio}
                />
                <View
                    style={{
                        flexDirection: 'column',
                        flex: 4,
                        paddingLeft: '1%',
                    }}
                >
                    <Text
                        style={{
                            color: '#000000',
                            fontSize: 5 * pixelRatio,
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            color: 'gray',
                            fontSize: 3.5 * pixelRatio,
                            
                        }}
                    >
                        {item.address}
                    </Text>
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
                            marginRight: screenWidth * 0.05,
                            color: '#d62828',
                        }}
                        name='squared-minus'
                        size={closeSize}
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
                            marginRight: screenWidth * 0.05,
                            color: '#000000',
                        }}
                        name='squared-plus'
                        size={closeSize}
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
            <View
                style={{
                    width: '90%',
                    backgroundColor: '#000000',
                    height: 1,
                    alignSelf: 'center',
                }}
            />
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
                    backgroundColor: '#fcbf49',
                }}
            >
                <Text
                    style={{
                        color: '#000000',
                        fontSize: 3 * pixelRatio,
                        padding: pixelRatio,
                    }}
                >
                    {item.title}
                </Text>
                <Icon4
                    name='close'
                    size={closeSize}
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
            <Header navigation={navigation} title={"고정 여행지 설정"} />
            <NaverMapView style={{
                width: '100%', 
                height: '50%'
            }}
                showsMyLocationButton={true}
                center={{...Mid, zoom: 15}}
                onTouch={e => console.log('onTouch', JSON.stringify(e.nativeEvent))}
                onCameraChange={e => console.log('onCameraChange', JSON.stringify(e))}
                onMapClick={e => console.log('onMapClick', JSON.stringify(e))}
            >
                <Marker coordinate={Start} pinColor="blue" onClick={() => console.warn('onClick! Start')} />
                <Marker coordinate={End}   pinColor="red"  onClick={() => console.warn('onClick! End')} />
                {
                <Path coordinates={loadData} onClick={() => console.warn('onClick! path')} color='Red' width={4}/>
                
                //<Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10}/>
                //<Polyline coordinates={[P1, P2]} onClick={() => console.warn('onClick! polyline')}/>
                //<Circle coordinate={P0} color={"rgba(255,0,0,0.3)"} radius={200} onClick={() => console.warn('onClick! circle')}/>
                //<Polygon coordinates={[P0, P1, P2]} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.warn('onClick! polygon')}/>
                }
            </NaverMapView>
            <View
                style={{
                    marginTop: '-7%',
                    width: '100%',
                    height: screenHeight * 0.11,
                    borderWidth: 0,
                    borderColor: 'gray',
                    borderBottomWidth: 0,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomWidth: 1,
                    backgroundColor: '#eae2b7', 
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginTop: '1%'
                    }}
                    onPress={ 
                        () => {
                            console.log("일정 만들기")
                            navigation.push('RecommendSchedule',{scheduleList: scheduleList});
                        }
                    }
                >
                    <Icon
                        name="calendar" 
                        size={closeSize} 
                        color="#f77f00" 
                    />

                    <Text
                        style={{
                            color: "#f77f00",
                            marginRight: '5%'
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
                        marginBottom: '1%',
                        width: '50%',
                        flexDirection: 'row',
                        backgroundColor : '#FFFFFF'
                    }}
                >
                    <Icon2
                        style={{
                            alignSelf: 'center'
                        }}
                        name='search'
                        color='black'
                        size={screenWidth * 0.04}
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
                {
                    scheduleList.length === 0
                    ?
                    <Text
                        style={{
                            flex: 1,
                            width: screenWidth,
                            textAlign: "center",
                            color: '#d62828',
                        }}
                    >
                        여행지를 추가해주세요
                    </Text>
                    :
                    <FlatList
                    style={{
                        width: '100%',
                        flex: 1,
                        paddingLeft: '1%',
                        marginBottom: '1%',
                    }}
                    horizontal={true}
                    data={scheduleList}
                    renderItem={schedule}
                    /> 
                }
            </View>
            <FlatList
                style={{
                    width: '100%',
                    height: '45%',
                    flex: 1,
                    
                    paddingLeft: '1%',
                    marginTop: '1%',
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