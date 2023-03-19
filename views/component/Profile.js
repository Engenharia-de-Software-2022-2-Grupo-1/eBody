import React from "react";
import { Text, View } from "react-native";

export default function Profile(props) {
    return(
        <View>
            <Text>Esse é o Profile de id {props.route.params.id}</Text>
        </View>
    );
}