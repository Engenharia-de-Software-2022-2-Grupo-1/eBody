import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Home, Profile, EditStudentScreen, NewEvaluation} from '../component/Index'

function ProfileStackScreen() {

    const ProfileStack = createNativeStackNavigator();

    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen" 
                component={Profile} 
                options={{
                    title:"Perfil",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <ProfileStack.Screen 
                name="EditProfile" 
                component={EditStudentScreen}
                options={{
                    title:"Editar perfil",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />
            <ProfileStack.Screen 
                name="NewEvaluation" 
                component={NewEvaluation}
                options={{
                    title:"Novas medidas",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            />

        </ProfileStack.Navigator>
    );
}

export default ProfileStackScreen;