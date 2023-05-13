import React from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { css } from "../../assets/css/Css";

export default function NewEvaluation(props) {  
    return(
        <View>
            <TextInput style={css.login__input} placeholder="Braço direito" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Braço esquerdo" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Quadril" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Braço" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Peito" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Antebraço" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Coxa" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Panturrilha" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Glúteo" maxLength={6} keyboardType="numeric"></TextInput>
            <TextInput style={css.login__input} placeholder="Pescoço" maxLength={6} keyboardType="numeric"></TextInput>
            <TouchableOpacity style={css.login__button} >
                    <Text style={css.login__buttonText} >Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}