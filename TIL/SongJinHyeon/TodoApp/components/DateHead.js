import React from "react";
import {View, Text, StyleSheet} from "react-native";

const DateHead = ({date}) =>{
    console.log(date);
    const year = date.getFullYear();
    //Month는 0~11까지 이므로 + 1.
    const month = date.getMonth() + 1;
    const day = date.getDay();

    const mergeString = `${year}년 ${month}월 ${day}일`;

    return (
        <View style={styles.block}>
            <Text style={styles.dateText}>{mergeString}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        padding: 16,
        backgroundColor: "#25a69a",
    },
    dateText:{
        fontSize: 24,
        color: 'white',
    },
});

export default DateHead;