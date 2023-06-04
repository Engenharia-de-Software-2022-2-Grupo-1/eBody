import React, { useState, useEffect, useRef  } from "react";
import { Text, View, TouchableOpacity,Keyboard,  KeyboardAvoidingView, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddIcon, Input } from "native-base"
import { profileCss } from '../../assets/css/ProfileCss'
import { ActivityIndicator } from "react-native-web";

export default function Students(props) {

    const flatListRef = useRef(null);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    var getAlunos = async () => {
        try {
            const response = await fetch('http://192.168.0.4:3000/aluno/');
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
        setFilteredData([]);
    }, []);


    searchByName = (name) => {
        const nomeSemEspaco = name.trim();
        if (nomeSemEspaco !== '') {
            const filteredAlunos = data.filter((aluno) =>
                aluno.nome.toLowerCase().includes(nomeSemEspaco.toLowerCase())
            );
            setFilteredData(filteredAlunos);

        }else{
            setFilteredData(data); 
              
        }

    }
    const dismissKeyboard = () => {
        if (searchValue.trim() === '') {
            return;
        }
        Keyboard.dismiss();
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }

    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      > 
        {isLoading ? (<Text>Carregando</Text>) : (<View>
            <View style={[profileCss.container]}>

                <TouchableOpacity  onPress={dismissKeyboard}>
                <View style={{ marginTop: 10, flexDirection: 'row', textAlign: 'center' }}>
                    <Input style={{ textAlign: "center" }} variant="rounded" mx="3" w="80%" onChangeText={(name) => searchByName(name)} defaultValue="" placeholder="Pesquisar Aluno"></Input>

                    <TouchableOpacity onPress={() => props.navigation.navigate('NewProfile',)}>
                        <View style={{ backgroundColor: '#455d3b', borderRadius: 100, alignItems: 'center', justifyContent: 'center', top: 2, padding: 3 }}>
                            <AddIcon size="6" color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>

                <Text style={profileCss.title}>LISTAGEM DE ALUNOS</Text>

                <FlatList
                ref={flatListRef} 
                style={{ width: "100%", backgroundColor: '#EAEAEA', borderBottomWidth: 1, borderColor: '#888686', paddingBottom: '150%', flex: 1 }}
                    data={filteredData.length > 0 ? filteredData : data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <View style={{ marging: 10, padding: 10, borderTopWidth: 1, borderColor: '#888686' }}>
                            <Text style={{ padding: 10, textAlign: "center" }} onPress={() => props.navigation.navigate('Profile', item)}>
                                {item.nome}
                            </Text>
                        </View>
                    )}
                    keyboardShouldPersistTaps="always"
                    onScroll={() => Keyboard.dismiss()}
                   
                    
                />

            </View>
        </View>)}
        </KeyboardAvoidingView>

    );
}