import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { css } from '../../assets/css/Css'
import { Input, Button } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'
import { newProfileScreenCss } from "../../assets/css/NewProfileScreenCss";
import { Alert } from 'react-native';

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
    const [nome, setNome] = useState(props.route.params.nome);
    const [contato, setContato] = useState(props.route.params.telefone);
    const [cidade, setCidade] = useState(props.route.params.cidade);
    const [bairro, setBairro] = useState(props.route.params.bairro);
    const [nomeCE1, setNomeCE1] = useState(props.route.params.nomeContato1);
    const [contatoCE1, setContatoCE1] = useState(props.route.params.numeroContato1);
    const [relacaoCE1, setRelacaoCE1] = useState(props.route.params.grauContato1);
    const [nomeCE2, setNomeCE2] = useState(props.route.params.nomeContato2);
    const [contatoCE2, setContatoCE2] = useState(props.route.params.numeroContato2);
    const [relacaoCE2, setRelacaoCE2] = useState(props.route.params.grauContato2);


    const formatDate = (data) => {
        aniversario = data.split("-");
        return aniversario[2] + "/" + aniversario[1] + "/" + aniversario[0]
    }

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
    const handleSubmit = () => {
        if (
          nome.trim() === '' ||
          contato.trim() === '' ||
          cidade.trim() === '' ||
          bairro.trim() === '' ||
          nomeCE1.trim() === '' ||
          contatoCE1.trim() === '' ||
          relacaoCE1.trim() === '' ||
          nomeCE2.trim() === '' ||
          contatoCE2.trim() === '' ||
          relacaoCE2.trim() === ''
        ) {
          Alert.alert('Erro', 'Por favor, preencha todos os campos');
        } else {
          if (
            nome !== props.route.params.nome ||
            contato !== props.route.params.telefone ||
            cidade !== props.route.params.cidade ||
            bairro !== props.route.params.bairro ||
            nomeCE1 !== props.route.params.nomeContato1 ||
            contatoCE1 !== props.route.params.numeroContato1 ||
            relacaoCE1 !== props.route.params.grauContato1 ||
            nomeCE2 !== props.route.params.nomeContato2 ||
            contatoCE2 !== props.route.params.numeroContato2 ||
            relacaoCE2 !== props.route.params.grauContato2 ||
            date.getTime() !== new Date(props.route.params.dataNascimento).getTime()
          ) {
            editarAluno();
          } else {
            Alert.alert('Aviso', 'Nenhum campo foi alterado');
          }
        }
      };  
    async function editarAluno() {
        let response = await fetch(`http://192.168.100.90:3000/aluno/${props.route.params.id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                dataNascimento: date,
                telefone: contato,
                cidade: cidade,
                bairro: bairro,
                adimplente: false,
                nomeContato1: nomeCE1,
                numeroContato1: contatoCE1,
                grauContato1: relacaoCE1,
                nomeContato2: nomeCE2,
                numeroContato2: contatoCE2,
                grauContato2: relacaoCE2
            }),
        });

        if (response.status === 200) {
            Alert.alert('Atualizado', 'Aluno atualizado com sucesso.');
        } else if (response.status === 409) {
            Alert.alert('Conflito', 'Aluno já está criado.');
        }
        else {
            Alert.alert('Erro', 'Ocorreu um erro durante a criação do aluno, por favor revise os dados.');

        }

    }

    return (
        <ScrollView  >
            <View style={[profileCss.container]}>
                <KeyboardAvoidingView>
                    <View>
                        <Text style={profileCss.title}>Informações pessoais do aluno</Text>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Nome" maxLength={20} onChangeText={setNome}defaultValue={props.route.params.nome}/>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Número" maxLength={11} keyboardType="numeric" onChangeText={setContato} defaultValue={props.route.params.telefone} />
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Cidade" maxLength={10} onChangeText={setCidade} defaultValue={props.route.params.cidade}/>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Bairro" maxLength={10} onChangeText={setBairro} defaultValue={props.route.params.bairro}/>
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                        
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <TextWithIcon iconNome='calendar' placeholder='Data de Aniversário' onPress={() => setShow(true)}><Text>{formatDate(props.route.params.dataNascimento)}
                            </Text> </TextWithIcon>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                     
                        <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                    </View>

                    <View>
                        <Text style={{ color: '#888686', fontWeight: 'bold', marginBottom: 20, alignItems: 'center', marginLeft: '10%' }}>Contato de emergência 1</Text>
                        <View>
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Nome" maxLength={20} onChangeText={setNomeCE1} defaultValue={props.route.params.nomeContato1}/>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Contato" keyboardType="numeric" maxLength={11} onChangeText={setContatoCE1} defaultValue={props.route.params.numeroContato1}/>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} maxLength={10} placeholder="Relação" onChangeText={setRelacaoCE1} defaultValue={props.route.params.grauContato1}/>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

                        </View>
                    </View>

                    <View>
                        <Text style={{ color: '#888686', fontWeight: 'bold', marginBottom: 20, alignItems: 'center', marginLeft: '10%' }}>Contato de emergência 2</Text>
                        <View>
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Nome" onChangeText={setNomeCE2} maxLength={20} defaultValue={props.route.params.nomeContato2}/>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Contato" keyboardType="numeric" onChangeText={setContatoCE2} maxLength={11} defaultValue={props.route.params.numeroContato2}/>
                            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
                            <Input variant="rounded" w="100%" style={css.input_cadastro} placeholder="Relação" onChangeText={setRelacaoCE2} maxLength={10} defaultValue={props.route.params.grauContato2}/>
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
                    onPress={handleSubmit}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>ATUALIZAR</Text>
                </Button>
                <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 30 }} />
            </View>
        </ScrollView>


    )

}