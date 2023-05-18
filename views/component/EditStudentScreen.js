import React, {useState} from "react";
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native"; 
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'
import { Input, Button } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'

export default function EditStudentScreen(props) {

    const [date, setDate] = useState(new Date());

    return(
        <ScrollView  >
        <KeyboardAvoidingView>
            <View >
            <Text style={profileCss.title}>Informações pessoais do aluno</Text>
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input style={css.input_cadastro} placeholder="Nome"><Text style={profileCss.data}>{props.route.params.name}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Número" keyboardType="numeric"><Text style={profileCss.data}>{props.route.params.phoneNumber}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Cidade"><Text style={profileCss.data}>{props.route.params.city}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Bairro"><Text style={profileCss.data}>{props.route.params.neighborhood}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Rua"><Text style={profileCss.data}>{props.route.params.street}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Aniversário"><Text style={profileCss.data}>{props.route.params.birthday}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                </View>

                <View>
                <Text style={profileCss.title}>Contato de emergência 1</Text>
                <View>
                <Input style={css.input_cadastro} placeholder="Nome"><Text style={profileCss.data}>{props.route.params.emergency_name_1}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Contato" keyboardType="numeric"><Text style={profileCss.data}>{props.route.params.emergency_contact_1}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Relação"><Text style={profileCss.data}>{props.route.params.emergency_relaction_1}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

                </View>
                </View>
                
                <View>
                <Text style={profileCss.title}>Contato de emergência 2</Text>
                <View>
                <Input style={css.input_cadastro} placeholder="Nome"><Text style={profileCss.data}>{props.route.params.emergency_name_2}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Contato" keyboardType="numeric"><Text style={profileCss.data}>{props.route.params.emergency_contact_2}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Input style={css.input_cadastro} placeholder="Relação"><Text style={profileCss.data}>{props.route.params.emergency_relaction_2}</Text></Input>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

                </View>

                </View>

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
           

        </KeyboardAvoidingView>
        </ScrollView>

    )

}