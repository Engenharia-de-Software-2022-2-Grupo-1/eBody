import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Students(props) {

    const StudentsStack = createNativeStackNavigator();

    return(
        <View>
                <Text>Essa é a tela de estudantes</Text>
                <Button
                title="Estudante"
                onPress={() => props.navigation.navigate('Profile',
                    {id: 30,
                    name: 'Diegod'})} 
                />
        </View>
    );
}