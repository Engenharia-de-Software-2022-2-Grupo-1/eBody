import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Profile, NewProfileScreen, EditStudentScreen} from '../component/Index'

function EditStudentStackScreen() {

    const EditStudentStack = createNativeStackNavigator();

    return(
        <EditStudentStack.Navigator>
            <EditStudentStack.Screen
                name="EditStudent"
                component={EditStudentScreen}
            
            />
            <EditStudentStack.Screen name="Profile" component={Profile}/>
        </EditStudentStack.Navigator>
    );
}

export default EditStudentStackScreen;