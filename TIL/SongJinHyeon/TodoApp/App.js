import React,{useState, useEffect} from "react";
import { StyleSheet,Text,KeyboardAvoidingView, Platform, Alert } from "react-native";
import DateHead from "./components/DateHead";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import { NavigationContainer } from "@react-navigation/native";
import TodoList from "./components/TodoList";
import AsyncStorage from "@react-native-async-storage/async-storage";


const App = () => {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경', done: true},
    {id: 2, text: '리엑트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false}
  ]);

  useEffect(() => {
    async function load(){
      try{
        const jsonTodos = await AsyncStorage.getItem('todos');
        const parseTodos = JSON.parse(jsonTodos);
        setTodos(parseTodos);
      }
      catch (e){
        console.log("todo 불러오기 실패. : " , e);
      }
    }
    load();
  },[]);
  useEffect(() => {
    //console.log(todos);
    async function save(){
      try{
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      }
      catch (e){
        Alert.alert(
          "저장 실패",
          e.toString(),
          [
            {
              text: '확인',
              onPress: () => {},
              style: 'destructive',
            },
          ]
        )
        console.error("저장 실패");
      }
    }
    save();
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const  todo = {
      id: nextId,
      text,
      done: false,
    }
    setTodos(todos.concat(todo));
  }
  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  }
  const onRemove = (id) => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  }

  /**
   *<KeyboardAvoidingView
   *  behavior={Platform.OS === 'ios' ? 'padding': undefined}
   *  style={styles.avoid}
   *>
   */
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={styles.block}>
          <KeyboardAvoidingView
            behavior={Platform.select({ios: 'padding', android: undefined})}
            style={styles.avoid}
          >
            <DateHead date={today} />
            {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>}
            <AddTodo onInsert={onInsert}/>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
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