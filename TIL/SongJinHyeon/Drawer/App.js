import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, View, StyleSheet,Text, SafeAreaView } from 'react-native';

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}) =>{
  return (
    <View>
      <Text>Home</Text>
      <Button 
        title='Drawer 열기' 
        onPress={
          () => navigation.openDrawer()
        }
      />

      <Button 
        title='Setting 열기' 
        onPress={
          () => navigation.navigate('Setting')
        }
      />
    </View>
  )
}

const SettingScreen = ({navigation}) =>{
  return (
    <View>
      <Text>Setting</Text>
      <Button title='뒤로가기' onPress={ () => navigation.goBack() } />
    </View>
  );
}


const App = ()  => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerPosition="right"
        backBehavior='history'
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
          headerShown: false,
        }}
        drawerContent={
          ({navigation}) => (
            <SafeAreaView>
              <Text> A Custom Drawer </Text>
              <Button
                onPress={ 
                  () => navigation.closeDrawer() 
                }
                title='닫기'
              />
            </SafeAreaView>
          )
        }
      >
        <Drawer.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            title: '홈'
          }}
        />
        <Drawer.Screen 
          name='Setting' 
          component={SettingScreen}
          options={{
            title: '셋팅'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;

