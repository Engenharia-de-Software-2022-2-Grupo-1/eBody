import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Students, Profile, NewProfileScreen} from '../component/Index'

function NewProfileStackScreen() {

    const NewProfileStack = createNativeStackNavigator();
    return(
        <NewProfileStack.Navigator>
            <NewProfileStack.Screen
            name="NewProfile"
            component={NewProfileScreen}/>
        </NewProfileStack.Navigator>
    )
}
export default NewProfileStackScreen;