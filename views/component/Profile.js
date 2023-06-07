import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity, Modal } from "react-native";
import { Select, DeleteIcon, Button } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Profile(props) {
    const [refresh, setRefresh] = useState(true);
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const [avaliacao, setAvaliacao] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function deleteMedida() {
        try {
            const response = await axios.delete(`http://192.168.0.4:3000/medidas/${avaliacao.id}`);

            if (response.status === 200) {
                getMedidas();
            }
        } catch (error) {
            console.error(error);
        }
    };

    async function deleteStudent() {
        try {
            const response = await axios.delete(`http://192.168.0.4:3000/aluno/${props.route.params.id}`);

            if (response.status === 200) {
                getMedidas();
                props.navigation.navigate('StudentsScreen');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const openModalStudent = () => {
        setShowConfirmation(true);
    };
    const closeModalStudent = () => {
        setShowConfirmation(false);
    };





    var getMedidas = async () => {
        try {
            const response = await fetch(`http://192.168.0.4:3000/aluno/${props.route.params.id}/medidas`);
            const json = await response.json();
            if (response.status === 200) {
                setAvaliacoes(json);
                setAvaliacao(json[0]);
            }
            else {
                setAvaliacao([]);
                setAvaliacoes([]);
            }

        } catch (error) {
            console.error(error);
            setAvaliacoes([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMedidas();
    }, []);

    formataContato = (Contato) => {
        str = Contato.toString();
        return "(" + Contato[0] + Contato[1] + ") " + Contato.slice(2, 7) + " - " + Contato.slice(7);
    }

    formataData = (data) => {
        str = data.split("-");
        return str[2] + "/" + str[1] + "/" + str[0];
    }

    return (
        <ScrollView>
            <View style={[profileCss.container]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={profileCss.title}>Informações pessoais do aluno</Text>
                <TouchableOpacity onPress={() => openModalStudent()}>
                    <Modal visible={showConfirmation} animationType="slide">
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Deseja deletar os dados de {props.route.params.nome}?</Text>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Button style={{ backgroundColor: "#455D3B" }} onPress={deleteStudent}>
                                    <Text style={{ color: "white", fontWeight: "bold" }}>Confirmar</Text>
                                </Button>
                                <View style={{ width: 10 }} />

                                <Button style={{ backgroundColor: "#8f2828" }} onPress={closeModalStudent}>
                                    <Text style={{ color: "white", fontWeight: "bold" }}>Cancelar</Text>
                                </Button>
                            </View>
                        </View>
                    </Modal>
                    <Icon name="trash" size={20} color="#8f2828" style={{ marginLeft: 10, paddingTop:10}} />
                </TouchableOpacity>
                </View>

                <View>
                    <Text style={profileCss.subTitle}>Nome </Text>
                    <Text style={profileCss.data}>{props.route.params.nome}</Text>

                    <Text style={profileCss.subTitle}>Contato</Text>
                    <Text style={profileCss.data}>{formataContato(props.route.params.telefone)}</Text>

                    <Text style={profileCss.subTitle}>Cidade</Text>
                    <Text style={profileCss.data}>{props.route.params.cidade}</Text>

                    <Text style={profileCss.subTitle}>Bairro</Text>
                    <Text style={profileCss.data}>{props.route.params.bairro}</Text>

                    <Text style={profileCss.subTitle}>Data de nascimento</Text>
                    <Text style={profileCss.data}>{formataData(props.route.params.dataNascimento)}</Text>

                    <View style={{ marginBottom: 12 }} />
                </View>

                <Text style={profileCss.title}>Contato de emergência 1</Text>
                <View>
                    <Text style={profileCss.subTitle}>Nome</Text>
                    <Text style={profileCss.data}>{props.route.params.nomeContato1}</Text>

                    <Text style={profileCss.subTitle}>Contato</Text>
                    <Text style={profileCss.data}>{formataContato(props.route.params.numeroContato1)}</Text>

                    <Text style={profileCss.subTitle}>Relacionamento</Text>
                    <Text style={profileCss.data}>{props.route.params.grauContato1}</Text>

                    <View style={{ marginBottom: 12 }} />
                </View>

                <Text style={profileCss.title}>Contato de emergência 2</Text>

                <View>
                    <Text style={profileCss.subTitle}>Nome</Text>
                    <Text style={profileCss.data}>{props.route.params.nomeContato2}</Text>

                    <Text style={profileCss.subTitle}>Contato</Text>
                    <Text style={profileCss.data}>{formataContato(props.route.params.numeroContato2)}</Text>

                    <Text style={profileCss.subTitle}>Relacionamento</Text>
                    <Text style={profileCss.data}>{props.route.params.grauContato2}</Text>

                    <View style={{ marginBottom: 12 }} />
                </View>
            </View>

            <View style={[profileCss.container, { marginBottom: 15 }]}>
                <Text style={profileCss.title}>Informações fisicas do aluno</Text>
            </View>

            {avaliacoes.length == 0 ? (
                <View style={[profileCss.container]}>
                    <Text>Sem Avaliações encontradas</Text>
                </View>
            ) : (
                <View style={[profileCss.container]}>

                    <Select variant="rounded" w="65%" placeholder="Escolha a avaliação"
                        onValueChange={itemValue => setAvaliacao(itemValue)} style={{ marginTop: 10, marginBottom: 10 }}>
                        {avaliacoes.map((av) => {
                            return <Select.Item label={av.data} value={av} key={av.weight} />
                        })}
                    </Select>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Peso</Text>
                                <Text style={profileCss.data}>{avaliacao.peso}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Peito</Text>
                                <Text style={profileCss.data}>{avaliacao.peito}</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Ombro</Text>
                                <Text style={profileCss.data}>{avaliacao.ombro}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Cintura</Text>
                                <Text style={profileCss.data}>{avaliacao.cintura}</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Quadril</Text>
                                <Text style={profileCss.data}>{avaliacao.quadril}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Biceps D</Text>
                                <Text style={profileCss.data}>{avaliacao.bracoDireito}</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Biceps E</Text>
                                <Text style={profileCss.data}>{avaliacao.bracoEsquerdo}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Coxa D</Text>
                                <Text style={profileCss.data}>{avaliacao.coxaDireita}</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Coxa E</Text>
                                <Text style={profileCss.data}>{avaliacao.coxaEsquerda}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 10, paddingRight: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Panturrilha D</Text>
                                <Text style={profileCss.data}>{avaliacao.panturrilhaDireita}</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={profileCss.subTitle}>Panturrilha E</Text>
                                <Text style={profileCss.data}>{avaliacao.panturrilhaEsquerda}</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={{ position: 'absolute', bottom: 10, right: 10 }} onPress={() => deleteMedida()}>
                        <View>
                            <DeleteIcon size="8" color="grey" />
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
}