import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, Button, Platform } from "react-native";

export default function Students(props) {
    return(
        <View>
            <Text>Essa é a tela de estudantes</Text>
            <Button
            title="Estudante"
            onPress={() => props.navigation.navigate('Profile',
                {id: 20,
                name: 'Mia'})} 
            />
            <Button
            title="Novo estudante"
            onPress={() => props.navigation.navigate('NewProfile')}
            />
        </View>
    );
}