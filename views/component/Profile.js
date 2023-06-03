import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Select, DeleteIcon } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'

export default function Profile(props) {
    
    const [avaliacoes, setAvaliacoes] = useState([]);

    const [avaliacao, setAvaliacao] = useState([]);
    const [isLoading, setLoading] = useState(true);

    var getMedidas = async () => {
        try {
          const response = await fetch(`http://192.168.0.8:3000/aluno/${props.route.params.id}/medidas`);
          const json = await response.json();
          if(response.status === 200) {
            console.log("CERTO'");
            setAvaliacoes(json);
            setAvaliacao(avaliacoes[0]);
          }
          else {
            setAvaliacao([]);
            setAvaliacoes([]);
          }
          
        } catch (error) {
          console.error(error);
          setAvaliacoes([]);
          console.log('teste')
          console.log(avaliacoes)
          if(avaliacoes.length == 0) console.log("ASKPDAPSDASOPDJAOPSDJPAOSDJPAOSDJPASODJAOPSDJAOPSJDAOPSDJ'");
        } finally {
          setLoading(false);
        }
    };

    useEffect(() => {
        getMedidas();
      }, []);

    formataContato = (Contato) => {
        str = Contato.toString();
        return "("+Contato[0]+Contato[1]+") "+ Contato.slice(2,7) + " - " +Contato.slice(7);
    }

    formataData = (data) => {
        str = data.split("-");
        return str[2] + "/" + str[1] + "/" + str[0];
    }

    return (
        <ScrollView>
            <View style={[profileCss.container]}>
                <Text style={profileCss.title}>Informações pessoais do aluno</Text>

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
                            return <Select.Item label={av.date.toLocaleDateString('pt-PT')} value={av} key={av.weight} />
                        })}
                    </Select>

                    <View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', paddingLeft:10, paddingRight:10}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Peso</Text>
                                <Text style={profileCss.data}>{avaliacao.peso}</Text>
                            </View>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Altura</Text>
                                <Text style={profileCss.data}>{avaliacao.altura}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-around', paddingLeft:10, paddingRight:10}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Peito</Text>
                                <Text style={profileCss.data}>{avaliacao.peito}</Text>
                            </View>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Ombro</Text>
                                <Text style={profileCss.data}>{avaliacao.ombro}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-around', paddingLeft:10, paddingRight:10}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Cintura</Text>
                                <Text style={profileCss.data}>{avaliacao.cintura}</Text>
                            </View>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Quadril</Text>
                                <Text style={profileCss.data}>{avaliacao.quadril}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-around', paddingLeft:10, paddingRight:10}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Biceps D</Text>
                                <Text style={profileCss.data}>{avaliacao.bracoDireito}</Text>
                            </View>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Biceps E</Text>
                                <Text style={profileCss.data}>{avaliacao.bracoEsquerdo}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-around', paddingLeft:10, paddingRight:10}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Coxa D</Text>
                                <Text style={profileCss.data}>{avaliacao.coxaDireita}</Text>
                            </View>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Coxa E</Text>
                                <Text style={profileCss.data}>{avaliacao.coxaEsquerda}</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-around', paddingLeft:10, paddingRight:10}}>
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Panturrilha D</Text>
                                <Text style={profileCss.data}>{avaliacao.panturrilaDireita}</Text>
                            </View>

                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={profileCss.subTitle}>Panturrilha E</Text>
                                <Text style={profileCss.data}>{avaliacao.panturrilaEsquerda}</Text>
                            </View>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={{position:'absolute', bottom: 10, right: 10}}  onPress={() => console.log("Clicou em excluir Avaliação")}>
                        <View>
                            <DeleteIcon size="8" color="grey"/>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
}