import React from "react";
import { Text, View, Button } from "react-native";

export default function Home(props) {
    return(
        <View>
            <Text>Essa é a Home</Text>
            <Button 
            title="Ir para profile" 
            onPress={() => props.navigation.navigate('Profile',
            {id: 30})} 
            />
        </View>
    );
}