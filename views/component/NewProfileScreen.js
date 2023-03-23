import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Button, TextInput, KeyboardAvoidingView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";


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
        <KeyboardAvoidingView>
            <View>
                <Text>Informações incorretas</Text>
            </View>

            <View>
                <TextInput placeholder="Nome"></TextInput>
                <TextInput placeholder="Peso" keyboardType="numeric"></TextInput>
                <Button title="Data de nascimento" onPress={() => setShow(true)}/>
                <Text>{text}</Text>
                <TextInput placeholder="Biceps" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput placeholder="Biceps" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput placeholder="Biceps" maxLength={6} keyboardType="numeric"></TextInput>
                <TextInput placeholder="Biceps" maxLength={6} keyboardType="numeric"></TextInput>

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
