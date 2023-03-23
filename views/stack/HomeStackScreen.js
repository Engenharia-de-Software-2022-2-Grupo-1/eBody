import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Home} from '../component/Index'

function HomeStackScreen() {
    
    const HomeStack = createNativeStackNavigator();
    
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title:"eBody",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <HomeStack.Screen name="Students" component={Students}/>
        </HomeStack.Navigator>

    );
}

export default HomeStackScreen;