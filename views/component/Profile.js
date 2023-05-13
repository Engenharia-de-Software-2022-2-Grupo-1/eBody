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
            <Button
            title="Adicionar medidas"
            onPress={() => props.navigation.navigate('NewEvaluation')}
            />
            <Button
            title="Visualizar treinos"
            onPress={() => props.navigation.navigate('MuscularGroups')}
            />
        </View>
        
    );
}