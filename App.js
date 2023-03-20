import { Text, View, Image, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Students, Profile} from './views/component/Index'


export default function App() {

const Stack = createNativeStackNavigator();

 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"Bem vindo",
            headerStyle:{backgroundColor: '#455d3b'},
            headerTintColor:'white',
            headerTitleStyle:{fontWeight:'bold'},
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Students"
          component={Students}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
