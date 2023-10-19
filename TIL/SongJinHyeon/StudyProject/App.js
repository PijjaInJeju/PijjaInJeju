import React from "react";
import { SafeAreaView, View, Text} from "react-native";
import Greeting from "./components/Greeting";
import Box from "./components/Box";

let value = "변수 값입니다.";
const App = () =>{
  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello! React!
        </Text>
        <Greeting text="고정 값입니다."/>
        <Greeting text={value}/>
        <Greeting />
        <Box/>
        <Box rounded={true}/>
      </View>
    </SafeAreaView>
  );
};

export default App;