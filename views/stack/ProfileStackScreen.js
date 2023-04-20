import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Home, Profile, EditStudentScreen} from '../component/Index'

function ProfileStackScreen() {

    const ProfileStack = createNativeStackNavigator();

    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen>
                name="ProfileScreen" 
                component={Profile} 
                options={{
                    title:"Perfil",
                    headerStyle:{backgroundColor: '#455d3b'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign: 'center'
                }}
            </ProfileStack.Screen>
            <ProfileStack.Screen name="EditProfileScreen" component={EditStudentScreen}/>
        </ProfileStack.Navigator>
    );
}

export default ProfileStackScreen;