import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = ({count, onIncrease, onDecrease}) => {
    return (
        <View>
            <View style={styles.numberArea}>
                <Text style={styles.number}>{count}</Text>
            </View>
            <Button title="+1" onPress={onIncrease}/>
            <Button title="-1" onPress={onDecrease}/>
        </View>
    );

}

const styles = StyleSheet.create({
    numberArea: {
        alignItems: 'center',
    },
    number: {
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default Counter;