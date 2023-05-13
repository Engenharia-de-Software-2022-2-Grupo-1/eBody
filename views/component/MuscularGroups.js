import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { css } from "../../assets/css/Css";

export default function MusuclarGroups(props) {

    return(
        <View>
           <Button
            title="Aeróbico"
            //onPress={() => props.navigation.navigate('Aniversariantes')} 
            />
            <Button
            title="Peito/Abdome/Ombro/Tríceps"
           //onPress={() => props.navigation.navigate('Aniversariantes')} 
            />
            <Button
            title="Glúteo/Perna"
            //onPress={() => props.navigation.navigate('Aniversariantes')} 
            />
            <Button
            title="Biceps/Costas/Ombro"
           // onPress={() => props.navigation.navigate('Aniversariantes')} 
            />
            <Button
            title="Novo Treino"
           // onPress={() => props.navigation.navigate('Aniversariantes')} 
            />


        </View>
    );
}