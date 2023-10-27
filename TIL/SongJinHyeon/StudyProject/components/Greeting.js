import React from "react";
import {View, Text} from 'react-native';

const Greeting = (props) =>{
    return (
        <View>
            <Text>
                안녕하세요 함수 컴포넌트입니다.!
                {props.text}는 전달 받은 내용입니다.
            </Text>
        </View>
    )
}
Greeting.defaultProps = {
    text: '디폴트 값 입니다.',
};
export default Greeting;