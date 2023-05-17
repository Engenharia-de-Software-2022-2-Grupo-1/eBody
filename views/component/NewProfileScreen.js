import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'
import { newProfileScreenCss } from '../../assets/css/NewProfileScreenCss'
import { Input, Button } from "native-base";
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
        <ScrollView>
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View>
                <Text style={newProfileScreenCss.title}>Informações Pessoais</Text>
            </View>

            <View style={css.login__form}>
                <Input style={css.login__input} maxLength={6} placeholder="Nome"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={9} keyboardType="numeric" placeholder="Contato"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={10}  placeholder="Cidade"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={10}  placeholder="Bairro"></Input>
                
                <View>
                <Text style={newProfileScreenCss.title}>Contato de emergência 1</Text>
                </View>
                <Input style={css.login__input} maxLength={6} placeholder="Nome"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={9} keyboardType="numeric" placeholder="Contato"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={10}  placeholder="Relação"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <View>
                <Text style={newProfileScreenCss.title}>Contato de emergência 2</Text>
                </View>
                <Input style={css.login__input} maxLength={6} placeholder="Nome"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={9} keyboardType="numeric" placeholder="Contato"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.login__input} maxLength={10}  placeholder="Relação"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                
                <TouchableOpacity style={css.login__button} onPress={() => setShow(true)}>
                    <Text style={css.login__buttonText}>Data de nascimento</Text>
                </TouchableOpacity>
                <Text>{text}
                </Text>

                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                
                <Button
                style={{
                    borderRadius: 10,
                    height: 40,
                    justifyContent: "center",
                    backgroundColor: "#455D3B",
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>Salvar</Text>
            </Button>
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 30 }} />
               
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
        </ScrollView>
        
    );
   

}
