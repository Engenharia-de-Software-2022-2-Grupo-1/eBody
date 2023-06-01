import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { css } from '../../assets/css/Css'
import { Input, Button } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'
import { newProfileScreenCss } from "../../assets/css/NewProfileScreenCss";

import Icon from 'react-native-vector-icons/FontAwesome';



import { Ionicons } from '@expo/vector-icons'; //Outra biblioteca de icons

export default function EditStudentScreen(props) {
    //Constante para ter um campo de texto junto com um icon
    const TextWithIcon = ({ iconNome, ...props }) => {
        return (
            <View style={newProfileScreenCss.inputContainer}>
                <Icon nome={iconNome} style={newProfileScreenCss.icon} />
                <Text style={newProfileScreenCss.text} {...props} />
            </View>
        );
    };


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState(props.route.params.birthday);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);
        setShow(false);
    }

    return (
        <ScrollView  >
            <View style={[profileCss.container]}>
                <KeyboardAvoidingView>
                    <View>
                        <Text style={profileCss.title}>Informações pessoais do aluno</Text>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Nome"><Text style={profileCss.data}>{props.route.params.nome}</Text></Input>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Número" keyboardType="numeric"><Text style={profileCss.data}>{props.route.params.telefone}</Text></Input>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Cidade"><Text style={profileCss.data}>{props.route.params.cidade}</Text></Input>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Bairro"><Text style={profileCss.data}>{props.route.params.bairro}</Text></Input>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <TouchableOpacity style={css.login__button} onPress={() => setShow(true)}>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <TextWithIcon iconNome='calendar' placeholder='Data de Aniversário' onPress={() => setShow(true)}><Text>{text}
                            </Text> </TextWithIcon>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                    </View>

                    <View>
                        <Text style={{color: '#888686',fontWeight: 'bold', marginBottom: 20, alignItems: 'center', marginLeft: '10%'}}>Contato de emergência 1</Text>
                        <View>
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Nome"><Text style={profileCss.data}>{props.route.params.emergency_nome_1}</Text></Input>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Contato" keyboardType="numeric"><Text style={profileCss.data}>{props.route.params.emergency_contact_1}</Text></Input>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Relação"><Text style={profileCss.data}>{props.route.params.emergency_relaction_1}</Text></Input>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

                        </View>
                    </View>

                    <View>
                        <Text style={{color: '#888686',fontWeight: 'bold', marginBottom: 20, alignItems: 'center', marginLeft: '10%'}}>Contato de emergência 2</Text>
                        <View>
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Nome"><Text style={profileCss.data}>{props.route.params.emergency_nome_2}</Text></Input>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Contato" keyboardType="numeric"><Text style={profileCss.data}>{props.route.params.emergency_contact_2}</Text></Input>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Relação"><Text style={profileCss.data}>{props.route.params.emergency_relaction_2}</Text></Input>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />


                        </View>

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

            </View>

            <View style={[profileCss.container]}>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                <Button
                    style={{
                        borderRadius: 10,
                        height: 40,
                        justifyContent: "center",
                        backgroundColor: "#455D3B",
                    }}
                    onPress={() => props.navigation.navigate('HomeScreen', props.route.params)}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>ATUALIZAR</Text>
                </Button>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 30 }} />
            </View>
        </ScrollView>


    )

}