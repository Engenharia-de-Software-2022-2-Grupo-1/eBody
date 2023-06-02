import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Select, DeleteIcon } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'

export default function Profile(props) {
    let avaliacoes = [
        { studentId: 1, weight: 81.2, height: 181, chest: 60, shoulder: 80, waist: 60, hip: 70, date: new Date("2022-03-04T00:00:00.000Z"), rightArm: 30, leftArm: 30, rightThigh: 60, leftThigh: 60, rightCalf: 30, leftCalf: 30 },
        { studentId: 2, weight: 2, height: 2, chest: 2, shoulder: 2, waist: 2, hip: 2, date: new Date("2022-02-03T00:00:00.000Z"), rightArm: 2, leftArm: 2, rightThigh: 2, leftThigh: 2, rightCalf: 2, leftCalf: 2 },
        { studentId: 3, weight: 1, height: 1, chest: 1, shoulder: 1, waist: 1, hip: 1, date: new Date("2022-01-02T00:00:00.000Z"), rightArm: 1, leftArm: 1, rightThigh: 1, leftThigh: 1, rightCalf: 1, leftCalf: 1 }
    ];

    const [avaliacao, setAvaliacao] = useState(avaliacoes[0]);

    formataContato = (Contato) => {
        str = Contato.toString();
        return "("+Contato[0]+Contato[1]+") "+ Contato.slice(2,7) + " - " +Contato.slice(7);
    }

    return (
        <ScrollView>
            <View style={[profileCss.container]}>
                <Text style={profileCss.title}>Informações pessoais do aluno</Text>

                <View>
                    <Text style={profileCss.title}>Nome </Text>
                    <Text style={profileCss.data}>{props.route.params.nome}</Text>

                    <Text style={profileCss.title}>Contato</Text>
                    <Text style={profileCss.data}>{formataContato(props.route.params.telefone)}</Text>

                    <Text style={profileCss.title}>Cidade</Text>
                    <Text style={profileCss.data}>{props.route.params.cidade}</Text>

                    <Text style={profileCss.title}>Bairro</Text>
                    <Text style={profileCss.data}>{props.route.params.bairro}</Text>

                    <Text style={profileCss.title}>Data de nascimento</Text>
                    <Text style={profileCss.data}>{props.route.params.dataNascimento}</Text>

                    <View style={{ marginBottom: 12 }} />

                    <Text style={{color: '#888686',fontWeight: 'bold', marginBottom: 5, alignItems: 'center'}}>Contato de emergência 1</Text>
                    <Text style={profileCss.title}>Nome</Text>
                    <Text style={profileCss.data}>{props.route.params.nomeContato1}</Text>
                    <Text style={profileCss.title}>Contato</Text>
                    <Text style={profileCss.data}>{formataContato(props.route.params.numeroContato1)}</Text>
                    <Text style={profileCss.title}>Relacionamento</Text>
                    <Text style={profileCss.data}>{props.route.params.grauContato1}</Text>
                    
                    <View style={{ marginBottom: 12 }} />

                    <Text style={{color: '#888686',fontWeight: 'bold', marginBottom: 5, alignItems: 'center'}}>Contato de emergência 2</Text>
                    <Text style={profileCss.title}>Nome</Text>
                    <Text style={profileCss.data}>{props.route.params.nomeContato2}</Text>
                    <Text style={profileCss.title}>Contato</Text>
                    <Text style={profileCss.data}>{formataContato(props.route.params.numeroContato2)}</Text>
                    <Text style={profileCss.title}>Relacionamento</Text>
                    <Text style={profileCss.data}>{props.route.params.grauContato2}</Text>
                </View>
            </View>

            <View style={[profileCss.container, { marginBottom: 15 }]}>
                <Text style={profileCss.title}>Informações fisicas do aluno</Text>
            </View>

            {!avaliacoes ? (
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
                        <Text style={profileCss.title}>Peso</Text>
                        <Text style={profileCss.data}>{avaliacao.weight}</Text>

                        <Text style={profileCss.title}>Altura</Text>
                        <Text style={profileCss.data}>{avaliacao.height}</Text>

                        <Text style={profileCss.title}>Peito</Text>
                        <Text style={profileCss.data}>{avaliacao.chest}</Text>

                        <Text style={profileCss.title}>Ombro</Text>
                        <Text style={profileCss.data}>{avaliacao.shoulder}</Text>

                        <Text style={profileCss.title}>Cintura</Text>
                        <Text style={profileCss.data}>{avaliacao.waist}</Text>

                        <Text style={profileCss.title}>Quadril</Text>
                        <Text style={profileCss.data}>{avaliacao.hip}</Text>

                        <Text style={profileCss.title}>Biceps Direito</Text>
                        <Text style={profileCss.data}>{avaliacao.rightArm}</Text>

                        <Text style={profileCss.title}>Biceps Esquerdo</Text>
                        <Text style={profileCss.data}>{avaliacao.leftArm}</Text>

                        <Text style={profileCss.title}>Coxa Direita</Text>
                        <Text style={profileCss.data}>{avaliacao.rightThigh}</Text>

                        <Text style={profileCss.title}>Coxa Esquerda</Text>
                        <Text style={profileCss.data}>{avaliacao.leftThigh}</Text>

                        <Text style={profileCss.title}>Panturrilha Direita</Text>
                        <Text style={profileCss.data}>{avaliacao.rightCalf}</Text>

                        <Text style={profileCss.title}>Panturrilha Esquerda</Text>
                        <Text style={profileCss.data}>{avaliacao.leftCalf}</Text>
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