import React from "react";
import { Text, View, Button } from "react-native";

export default function Profile(props) {
    return(
        <View>
            <Text>Esse é o Profile de id {props.route.params.id}</Text>
            <Button
            title="Editar"
            onPress={() => props.navigation.navigate('EditProfile')}
            />
        </View>
        
    );
}