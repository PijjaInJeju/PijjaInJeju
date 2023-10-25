import React, {useState} from "react";
import { SafeAreaView, View, Text, Button} from "react-native";
import Greeting from "./components/Greeting";
import Box from "./components/Box";
import Box2 from "./components/Box2";
import Counter from "./components/Counter";

let value = "변수 값입니다.";
const App = () =>{
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count+1);
  }
  const onDecrease = () => {
    setCount(count-1);
  }

  const onPress = () => {
    setVisible(!visible);
  };

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
        <Box2 rounded={true} size="large"/>
        <Box2 color='black' size='small'/>
        <Button title={visible ? "숨기기":"보이기"} onPress={onPress}/>
        {visible && <Box rounded={true} size="large" color='orange' />}
        <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
      </View>
    </SafeAreaView>
  );
};

export default App;