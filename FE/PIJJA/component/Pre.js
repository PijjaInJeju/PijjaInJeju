import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

const Pre = ({navigation}) => {
    console.log("safsa")
    return (
        <TouchableOpacity onPress={ () => navigation.pop() }>
            <Text>asfasfsafsfasaf</Text>
        </TouchableOpacity>
    )
}

export default Pre;