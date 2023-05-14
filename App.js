import { Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {HomeStackScreen, StudentsStackScreen} from './views/stack/Index'
import { NativeBaseProvider } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
    <NavigationContainer>

      <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStackScreen} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          }}/> 
          <Tab.Screen name="Students" component={StudentsStackScreen} 
          options={{
            tabBarLabel: 'Alunos',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-numbered" color={color} size={size} />
            ),
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );

}