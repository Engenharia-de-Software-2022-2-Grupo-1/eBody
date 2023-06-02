import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {css} from '../../assets/css/Css'
import { newProfileScreenCss } from '../../assets/css/NewProfileScreenCss'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from "native-base";
import{Alert} from 'react-native';

export default function NewProfileScreen(props) {

    const TextWithIcon = ({ iconName, ...props }) => {
        return (
          <View style={newProfileScreenCss.inputContainer}>
            <Icon name={iconName} style={newProfileScreenCss.icon} />
            <Text style={newProfileScreenCss.text} {...props} />
          </View>
        );
      };

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Data de Nascimento');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1 ) + '/' + tempDate.getFullYear();
        setText(fDate);
        setShow(false);
    }
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [nomeCE1, setNomeCE1] = useState('');
    const [contatoCE1, setContatoCE1]= useState('');
    const [relacaoCE1, setRelacaoCE1]= useState('');
    const [nomeCE2, setNomeCE2] = useState('');
    const [contatoCE2, setContatoCE2]= useState('');
    const [relacaoCE2, setRelacaoCE2]= useState('');
    
    const handleSubmit = () => {
            if (nome.trim() === '') {
                Alert.alert('Erro', 'Por favor, preencha o campo nome');
            } else if(contato.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo contato');
            }else if(cidade.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo cidade');
            }else if(bairro.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo bairro');
            }else if(nomeCE1.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo nome do contato de emergencia 1');
            }else if(contatoCE1.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo contato do contato de emergencia 1');
            }else if(relacaoCE1.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo relação do contato de emergencia 1');
            }else if(nomeCE2.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo nome do contato de emergencia 2');
            }else if(contatoCE2.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo contato do contato de emergencia 2');
            }else if(relacaoCE2.trim()===''){
                Alert.alert('Erro', 'Por favor, preencha o campo relação do contato de emergencia 2');
            }
        else {
          cadastrarAluno();
        }
      };

    async function cadastrarAluno() {
        let response=await fetch('http://192.168.0.4:3000/aluno', {
            method: 'POST',
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

        if(response.status === 200) {
            Alert.alert('Atualizado', 'Aluno atualizado com sucesso.');
        }if(response.status === 404) {
            Alert.alert('Erro', 'Aluno não encontrado.');
        }
        else {
            Alert.alert('Erro', 'Ocorreu um erro durante a criação do aluno, por favor revise os dados.');
        }         

    }

    return(
        <ScrollView>
            <KeyboardAvoidingView style={[css.container, css.darkbg]}>
                <View>
                    <Text style={newProfileScreenCss.title}>Informações Pessoais</Text>
                </View>

                <View style={css.login__form}>
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={6} value={nome} onChangeText={setNome} placeholder="Nome"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={11} value={contato} onChangeText={setContato} keyboardType="numeric" placeholder="Contato"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={10} value={cidade} onChangeText={setCidade}  placeholder="Cidade"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={10} value={bairro} onChangeText={setBairro}  placeholder="Bairro"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <TextWithIcon  iconName='calendar' placeholder='Data de Aniversário' onPress={() => setShow(true)}><Text >{text}
                    </Text> </TextWithIcon>

                    <View style={{ marginBottom: 12 }} />
                    
                    <View>
                        <Text style={newProfileScreenCss.title}>Contato de emergência 1</Text>
                    </View>

                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={6} value={nomeCE1} onChangeText={setNomeCE1} placeholder="Nome"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={11} value={contatoCE1} onChangeText={setContatoCE1} keyboardType="numeric" placeholder="Contato"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={10} value={relacaoCE1} onChangeText={setRelacaoCE1}  placeholder="Relação"></Input>
                    <View style={{ marginBottom: 12 }} />

                    <View>
                        <Text style={newProfileScreenCss.title}>Contato de emergência 2</Text>
                    </View>

                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={6} value={nomeCE2} onChangeText={setNomeCE2} placeholder="Nome"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={11} value={contatoCE2} onChangeText={setContatoCE2} keyboardType="numeric" placeholder="Contato"></Input>
                    <View style={{ marginBottom: 12 }} />
                    <Input variant="rounded" w="65%"  style={css.login__input} maxLength={10}value={relacaoCE2} onChangeText={setRelacaoCE2}  placeholder="Relação"></Input>
                    <View style={{ marginBottom: 12 }} />

                    <View style={{ marginBottom: 12 }} />
                    
                    <Button onPress={handleSubmit}
                    style={{
                        borderRadius: 10,
                        height: 40,
                        justifyContent: "center",
                        backgroundColor: "#455D3B",
                    }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>CRIAR</Text>
                    </Button>
                    <View style={{ marginBottom: 30 }} />
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
