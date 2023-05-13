import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { css } from "../../assets/css/Css";

export default function Home(props) {

    return(
        <View>
           <Text>Home</Text>
           <Button
            title="Aniversariantes"
            onPress={() => props.navigation.navigate('Aniversariantes')} 
            />
            <Button
            title="Pendentes de pagamento"
            onPress={() => props.navigation.navigate('Pendentes')}/>
        </View>
    );
}