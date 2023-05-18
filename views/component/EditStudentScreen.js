import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"; 
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'
import { Input, Button } from "native-base";

export default function EditStudentScreen(props) {

    const [date, setDate] = useState(new Date());

    return(
        <ScrollView>
        <KeyboardAvoidingView>
            <View>
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Nome"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Número" keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Cidade"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Bairro"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Rua"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

                <Input style={css.input_cadastro} placeholder="Peso" keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Peito" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Ombro" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Cintura" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Quadril" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Peito" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Braço direito" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Braço esquerdo" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Coxa direito" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Coxa esquerdo" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Panturrilha direita" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Panturrilha esquerda" maxLength={6} keyboardType="numeric"></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

                <Button
                style={{
                    borderRadius: 10,
                    height: 40,
                    justifyContent: "center",
                    backgroundColor: "#455D3B",
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>ATUALIZAR</Text>
            </Button>
            </View>


        </KeyboardAvoidingView>
        </ScrollView>

    )

}