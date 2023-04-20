import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Profile, EditStudentScreen} from '../component/Index'

function EditStudentStackScreen() {

    const EditStudentStack = createNativeStackNavigator();

    return(
        <EditStudentStack.Navigator>
            <EditStudentStack.Screen
                name="EditarEstudante"
                component={EditStudentScreen}
            
            />
            <EditStudentStack.Screen name="ProfileScreen" component={Profile}/>
        </EditStudentStack.Navigator>
    );
}

export default EditStudentStackScreen;