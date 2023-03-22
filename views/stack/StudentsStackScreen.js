import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Profile} from '../component/Index'

function StudentsStackScreen() {

    const StudentsStack = createNativeStackNavigator();
    
    return(
        <StudentsStack.Navigator>
            <StudentsStack.Screen name="Students" component={Students}
                options={{
                    title:"Estudantes",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <StudentsStack.Screen 
                name="Profile" 
                component={Profile}
                options={({ route }) => ({ title: route.params.name })}/>
        </StudentsStack.Navigator>
    );

}

export default StudentsStackScreen;