import React,{useState} from 'react';
import { SafeAreaView, Text, StyleSheet, PixelRatio, Dimensions, ScrollView, Button, View } from "react-native";

import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

import Icon from 'react-native-vector-icons/Entypo'; 

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const pixelRatio = PixelRatio.get();

console.log('Pixel Ratio: ', pixelRatio);
console.log('Screen Width: ', screenWidth);
console.log('Screen Height: ', screenHeight);



const CreateScheduleMap = () => {
    const P0 = {latitude: 37.564362, longitude: 126.977011};
    const P1 = {latitude: 37.565051, longitude: 126.978567};
    const P2 = {latitude: 37.565383, longitude: 126.976292};

    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <NaverMapView style={{
                width: '100%', 
                height: '50%'
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
            <ScrollView
                style={{
                    width: '100%',
                    height: '50%',
                    
                }}
            >
                <Icon 
                    style={{
                        alignItems: 'flex-end',
                    }}
                    name="calendar" 
                    size={30} 
                    color="#000000" 
                    onPress={ 
                        () => console.log("추천해주세요")
                    } 
                />
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
                <Text> asffsaggs</Text>
            </ScrollView>
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