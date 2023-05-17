import React from "react";
import { Text, View, Button } from "react-native";
import { profileCss } from '../../assets/css/ProfileCss'

export default function Profile(props) {
    return(
        <View style={[profileCss.container]}>
            <Text style={profileCss.title}>Informações pessoais do aluno</Text>
            <Text style={profileCss.title}>Nome <Text style={profileCss.data}>{props.route.params.name}</Text></Text>
            <Text style={profileCss.title}>Contato <Text style={profileCss.data}>{props.route.params.phoneNumber}</Text></Text>
            <Text style={profileCss.title}>Cidade <Text style={profileCss.data}>{props.route.params.city}</Text></Text>
            <Text style={profileCss.title}>Bairo <Text style={profileCss.data}>{props.route.params.neighborhood}</Text></Text>
            <Text style={profileCss.title}>Rua <Text style={profileCss.data}>{props.route.params.street}</Text></Text>
            <Text style={profileCss.title}>Data de nascimento <Text style={profileCss.data}>{props.route.params.birthday}</Text></Text>


            <Button
            title="Editar"
            onPress={() => props.navigation.navigate('EditProfile')}
            />
        </View>
        
    );
}