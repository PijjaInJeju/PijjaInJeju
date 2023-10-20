import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import DateHead from "./components/DateHead";

const App = () => {
  const today = new Date();
  
  return (
    <SafeAreaView>
      <DateHead date={today}/>
      <View>
        <Text>TodoApp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;