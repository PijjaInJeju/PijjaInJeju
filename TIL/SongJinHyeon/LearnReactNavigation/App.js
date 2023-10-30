import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderLessScreen from "./Screens/HeaderlessScreen";

import Pre from "../../../FE/PIJJA/component/pre";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          //전체 적용
          //headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            animation:"fade_from_bottom",
            headerStyle: {
              backgroundColor: '#29b6f6'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            }
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={
            ({route}) => (
              {
                animation:"fade",
                title: `상세 정보 - ${route.params.id}`,
                headerLeft: Pre,
                headerTitle: "제목입니다.",
                headerRight: undefined,
                //뒤로가기 버튼 제거.
                headerBackVisible: false,
              }
            )
          }
        />
        <Stack.Screen
          name="Headerless"
          component={HeaderLessScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;