import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, Button, TextInput, KeyboardAvoidingView } from "react-native"; 
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'

export default function EditStudentScreen(props) {

    const [date, setDate] = useState(new Date());

    return(
        <KeyboardAvoidingView>
            <View>
                <TextInput style={css.input_cadastro} placeholder="Nome"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Número" keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Cidade"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Bairro"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Rua"></TextInput>

                <TextInput style={css.input_cadastro} placeholder="Peso" keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Peito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Ombro" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Cintura" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Quadril" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Peito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Braço direito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Braço esquerdo" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Coxa direito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Coxa esquerdo" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Panturrilha direita" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.input_cadastro} placeholder="Panturrilha esquerda" maxLength={6} keyboardType="numeric"></TextInput>

                <TouchableOpacity style={css.login__button} >
                    <Text style={css.login__buttonText} >Atualizar</Text>
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    )

}