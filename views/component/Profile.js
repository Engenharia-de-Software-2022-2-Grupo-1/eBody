import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { profileCss } from '../../assets/css/ProfileCss'

export default function Profile(props) {
    let avaliacoes = [{ weight: 1, height: 1, chest: 1, shoulder: 1, waist: 1, hip: 1 }, { weight: 2, height: 2, chest: 2, shoulder: 2, waist: 2, hip: 2 }, { weight: 81.2, height: 181, chest:60, shoulder:80, waist: 60, hip:70 }];
    const [avaliacao, setAvaliacao] = useState(avaliacoes[0]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    
    return(
        <View style={[profileCss.container]}>
            <View>
                <Text style={profileCss.title}>Informações pessoais do aluno</Text>
                <View>
                    <Text style={profileCss.title}>Nome <Text style={profileCss.data}>{props.route.params.name}</Text></Text>
                    <Text style={profileCss.title}>Contato <Text style={profileCss.data}>{props.route.params.phoneNumber}</Text></Text>
                    <Text style={profileCss.title}>Cidade <Text style={profileCss.data}>{props.route.params.city}</Text></Text>
                    <Text style={profileCss.title}>Bairo <Text style={profileCss.data}>{props.route.params.neighborhood}</Text></Text>
                    <Text style={profileCss.title}>Rua <Text style={profileCss.data}>{props.route.params.street}</Text></Text>
                    <Text style={profileCss.title}>Data de nascimento <Text style={profileCss.data}>{props.route.params.birthday}</Text></Text>
                </View>
            </View>
            
            {avaliacoes?(
                <View>
                    <Text style={profileCss.title}>Informações fisicas do aluno</Text>

                    {/* <Picker
                        selectedValue={avaliacao}
                        onValueChange={(itemValue, itemIndex) =>
                            setAvaliacao(itemValue)
                        }>
                        <Picker.Item label="Primeira" value={avaliacoes[0]} />
                        <Picker.Item label="Segunda" value={avaliacao[1]} />
                    </Picker> */}

                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    
                    <View>
                        <Text style={profileCss.title}>Peso <Text style={profileCss.data}>{avaliacao.weight}</Text></Text>
                        <Text style={profileCss.title}>Altura <Text style={profileCss.data}>{avaliacao.height}</Text></Text>
                        <Text style={profileCss.title}>Peito <Text style={profileCss.data}>{avaliacao.chest}</Text></Text>
                        <Text style={profileCss.title}>Ombro <Text style={profileCss.data}>{avaliacao.shoulder}</Text></Text>
                        <Text style={profileCss.title}>Cintura <Text style={profileCss.data}>{avaliacao.waist}</Text></Text>
                        <Text style={profileCss.title}>Quadril <Text style={profileCss.data}>{avaliacao.hip}</Text></Text>
                    </View>
                </View>
            ):(
                <View>
                    <Text>Sem Avaliação encontrada</Text>
                </View>
            )}

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
        </View>
        
    );
}