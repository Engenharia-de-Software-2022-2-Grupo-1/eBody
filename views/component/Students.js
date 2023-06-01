import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddIcon, Input } from "native-base"
import { profileCss } from '../../assets/css/ProfileCss'
import { ActivityIndicator } from "react-native-web";

export default function Students(props) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    var getAlunos = async () => {
        try {
          const response = await fetch('http://192.168.0.8:3000/aluno/');
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
    };

    useEffect(() => {
        getAlunos();
    }, []);


    searchByName = (name) => {
        console.log(name)
    }

    return(
        (isLoading ? (<Text>Teste</Text>) : (<View>
        <View  style={[profileCss.container]}>
            <View style={{marginTop: 10}}>
                <Input style={{textAlign:"center"}} variant="rounded" mx="3" w="80%" onChangeText={(name) => searchByName(name)} placeholder="Pesquisar Aluno"></Input>
            </View>
            <Text style={profileCss.title}>LISTAGEM DE ALUNOS</Text>
            <FlatList
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                    <View style={{width: "100%", backgroundColor:'#F3ECEC', marging:10}}>
                        <Text style={{padding:10, textAlign:"center"}} onPress={() => props.navigation.navigate('Profile', item)}>
                        {item.nome}
                        </Text>
                    </View>
                )}
            />
        </View>

        <TouchableOpacity style={{position:'absolute', bottom: 0, right: 0}}  onPress={() => props.navigation.navigate('NewProfile',)}>
            <View style={{backgroundColor: '#2196f3', borderRadius: 100, width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                <AddIcon size="9" color="white"/>
            </View>
        </TouchableOpacity>
        
        
        
        
    </View>))
        
    );
}