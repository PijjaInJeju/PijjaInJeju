import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const Empty = () => {
    return (
        <View style={styles.block} >
            <Image 
                source={require('../assets/images/young_and_happy.png')} 
                style={styles.image}
                resizeMode="center"
            />
            <Text style={styles.description}>
                야호! 할일이 없습니다.!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    description:{
        fontSize: 24,
        color: '#9e9e9e',
    },
    image: {
        width: 240,
        height: 179,
    },
});

export default Empty;