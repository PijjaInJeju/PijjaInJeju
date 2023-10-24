import React from "react";
import { StyleSheet,Text,KeyboardAvoidingView, Platform } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";

const App = () => {
  const today = new Date();
  /**
   *<KeyboardAvoidingView
   *  behavior={Platform.OS === 'ios' ? 'padding': undefined}
   *  style={styles.avoid}
   *>
   */
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}
        >
          <DateHead date={today}/>
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block:{
    flex: 1,
  },
  avoid:{
    flex: 1,
  },
});

export default App;