import React, { useState } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { Select } from "native-base";
import { profileCss } from '../../assets/css/ProfileCss'

export default function Profile(props) {
    let avaliacoes = [
        { studentId: 1, weight: 81.2, height: 181, chest:60, shoulder:80, waist: 60, hip:70, date: new Date("2022-03-04T00:00:00.000Z"), rightArm: 30, leftArm: 30, rightThigh: 60, leftThigh: 60, rightCalf: 30, leftCalf: 30 },
        { studentId: 2, weight: 2, height: 2, chest: 2, shoulder: 2, waist: 2, hip: 2 , date: new Date("2022-02-03T00:00:00.000Z"), rightArm: 2, leftArm: 2, rightThigh: 2, leftThigh: 2, rightCalf: 2, leftCalf: 2 },
        { studentId: 3, weight: 1, height: 1, chest: 1, shoulder: 1, waist: 1, hip: 1, date: new Date("2022-01-02T00:00:00.000Z"), rightArm: 1, leftArm: 1, rightThigh: 1, leftThigh: 1, rightCalf: 1, leftCalf: 1 }
    ];

    const [avaliacao, setAvaliacao] = useState(avaliacoes[0]);

    return(
        <ScrollView>
            <View style={[profileCss.container]}>
                <Text style={profileCss.title}>Informações pessoais do aluno</Text>

                <View>
                    <Text style={profileCss.title}>Nome </Text>
                    <Text style={profileCss.data}>{props.route.params.name}</Text>

                    <Text style={profileCss.title}>Contato</Text> 
                    <Text style={profileCss.data}>{props.route.params.phoneNumber}</Text>

                    <Text style={profileCss.title}>Cidade</Text> 
                    <Text style={profileCss.data}>{props.route.params.city}</Text>

                    <Text style={profileCss.title}>Bairro</Text>
                    <Text style={profileCss.data}>{props.route.params.neighborhood}</Text>

                    <Text style={profileCss.title}>Rua</Text>
                    <Text style={profileCss.data}>{props.route.params.street}</Text>

                    <Text style={profileCss.title}>Data de nascimento</Text>
                    <Text style={profileCss.data}>{props.route.params.birthday}</Text>
                </View>
            </View>
            
            <View style={[profileCss.container, {marginBottom:15}]}>
                <Text style={profileCss.title}>Informações fisicas do aluno</Text>
            </View>
            
            {!avaliacoes?(
                <View style={[profileCss.container]}>
                    <Text>Sem Avaliações encontradas</Text>
                </View>
            ):(
                <View style={[profileCss.container]}>

                    <Select minWidth="250" placeholder="Escolha a avaliação"
                    onValueChange={itemValue => setAvaliacao(itemValue)} style={{marginTop: 10, marginBottom: 10}}>
                        {avaliacoes.map((av)=>{
                            return <Select.Item label={av.date.toLocaleDateString('pt-PT')} value={av} key={av.weight}/>
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
                </View>
            )}

            <View><Text></Text></View>

            <Button
            title="Editar"
            onPress={() => props.navigation.navigate('EditProfile', props.route.params)}
            />
            <Button
            title="Adicionar medidas"
            onPress={() => props.navigation.navigate('NewEvaluation')}
            />
            <Button
            title="Visualizar treinos"
            onPress={() => props.navigation.navigate('MuscularGroups')}
            />
        </ScrollView>
    );
}