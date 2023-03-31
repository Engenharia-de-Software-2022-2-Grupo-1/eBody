import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Button, TextInput, KeyboardAvoidingView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'

export default function NewProfileScreen(props) {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState("Empty");

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1 ) + '/' + tempDate.getFullYear();
        setText(fDate);
        setShow(false);
    }

    return(
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.login__msg}>Informações incorretas</Text>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} maxLength={6} placeholder="Nome"></TextInput>
                <TextInput style={css.login__input} placeholder="Peso" keyboardType="numeric"></TextInput>
                <TouchableOpacity style={css.login__button} onPress={() => setShow(true)}>
                    <Text style={css.login__buttonText}>Data de nascimento</Text>
                </TouchableOpacity>
                <Text>{text}</Text>
                <TextInput style={css.login__input} placeholder="Ombro" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Cintura" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Quadril" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Braço" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Peito" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Antebraço" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Coxa" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Panturrilha" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Glúteo" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput style={css.login__input} placeholder="Pescoço" maxLength={6} keyboardType="numeric"></TextInput>
                <TouchableOpacity style={css.login__button} >
                    <Text style={css.login__buttonText} >Entrar</Text>
                </TouchableOpacity>
            </View>


            {show && (
                <DateTimePicker
                    testId='dateTimePicker'
                    value={date}
                    display='default'
                    onChange={onChange}
                />
            )}
        </KeyboardAvoidingView>
        
    );

}
