import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Home, Celebrants, PendingPayments} from '../component/Index'

function HomeStackScreen() {
    
    const HomeStack = createNativeStackNavigator();
    
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="HomeScreen" 
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
            <HomeStack.Screen name="Aniversariantes" component={Celebrants}/>
            <HomeStack.Screen name="Pendentes" component={PendingPayments}/>
        </HomeStack.Navigator>

    );
}

export default HomeStackScreen;