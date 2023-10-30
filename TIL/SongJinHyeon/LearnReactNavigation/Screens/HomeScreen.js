import React,{ useEffect } from "react";
import { View, Button } from "react-native";

function HomeScreen({navigation}){
    useEffect(() => {
        navigation.setOptions({title: '홈'});
    },[navigation]);
    return (
        <View>
            <Button 
                title="Detail1로 Push로 이동하기"
                onPress={
                    () =>{
                        navigation.push('Detail',{id: 1});
                    }
                }
            />
            <Button 
                title="Detail2로 navigate으로 이동하기"
                onPress={
                    () =>{
                        navigation.navigate('Detail',{id: 2});
                    }
                }
            />
            <Button 
                title="Detail3로 Push로 이동하기"
                onPress={
                    () =>{
                        navigation.push('Detail',{id: 3});
                    }
                }
            />
            <Button 
                title="HeadLess페이지로 이동"
                onPress={
                    () =>{
                        navigation.push('Headerless');
                    }
                }
            />
        </View>
    );
}
export default HomeScreen;