import React, { useState,useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AddIcon, Input, Accordion, Box, Button} from "native-base";
import { profileCss } from '../../assets/css/ProfileCss';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Training(props) {

    const [nomeExercicio, setNomeExercicio] = useState("");
    const [series, setSeries] = useState("");
    const [repeticoes, setRepeticoes] = useState("");
    const [nomeTreino, setNomeTreino] = useState("")

    const [exercicios, setExercicios] = useState([]);

    const [exerciseCount, setExerciseCount] = useState(1);
    const navigation = useNavigation();


    const handleSubmit = () => {
        if (
          nomeExercicio.trim() === '' ||
          nomeTreino.trim() === '' ||
          repeticoes.trim() === ''
        ) {
          Alert.alert('Erro', 'Por favor, preencha todos os campos');
        } else {
          if (
            nomeExercicio !== props.route.params.nomeExercicio ||
            nomeTreino !== props.route.params.nomeTreino ||
            repeticoes !== props.route.params.repeticoes 
          ) {
            adicionarTreino();
          } else {
            Alert.alert('Aviso', 'Nenhum campo foi alterado');
          }
        }
      };  


    async function adicionarTreino() {

        const response = await fetch(`http://192.168.0.4:3000/aluno/${props.route.params.id}/treino`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome: nomeTreino, exercicios: exercicios})
        });
        
        if(response.status === 201) {
            Alert.alert("Criado", "Treino criado com sucesso.",[
                {
                  text: "OK",
                  onPress: () => {
                    navigation.navigate('StudentsScreen');
                  }
                }
              ])
        }
        
    };
    const handleAddExercise = () => {
        if(nomeExercicio.trim() === "" || series.trim() === "" || repeticoes.trim() === ""){
            Alert.alert("Erro","Por favor, preencha todos os campos!!");
        }else {
            exercicios.push({nome: nomeExercicio, series: series, repeticoes: repeticoes});
            setNomeExercicio("");
            setSeries("");
            setRepeticoes("");
            setExerciseCount(exerciseCount + 1);
        }
        
    };

    const renderExercises = () => {
        const exercises = [];
        for (let i = 1; i <= exerciseCount; i++) {
            exercises.push(
                <View key={i} style={styles.exerciseBlock}>
    <Text style={styles.exerciseTitle}>EXERCÍCIO {i}</Text>
    <Box mb={2}>
        <Input variant="filled" size="sm" placeholder="Nome do exercício" onChangeText={setNomeExercicio}/>
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de séries" keyboardType="numeric" onChangeText={setSeries}  />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de repetições" keyboardType="numeric" onChangeText={setRepeticoes} />
    </Box>
</View>
            );
        }
        return exercises;
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
              
                <Text style={[styles.input, styles.treinoLabel, styles.exerciseTitle]}>NOME DO TREINO</Text>
                <Input variant="filled" placeholder="Nome do treino"  onChangeText={setNomeTreino}  />

                {renderExercises()}

                <Button
  title="Adicionar exercício"
  onPress={handleAddExercise}
  style={{
   
 
    backgroundColor: "#455D3B",
  }}
  colorScheme="light" 
>
  <Text style={{ color: "#FFFFFF" }}>Adicionar exercício</Text> 
</Button>

<Button
  title="Salvar treino"
  onPress={handleSubmit}
  style={{
    backgroundColor: "#9BC063",
  }}
  colorScheme="light"
>
  <Text style={{ color: "#FFFFFF" }}>Salvar treino</Text> 
</Button>    
            </View>
        </ScrollView>
    );
}

const styles = {
    input: {
        marginBottom: 5,
        paddingLeft: 5,
    },
    smallInput: {
        fontSize: 12,
    },
    largeInput: {
        fontSize: 12,
    },
    button: {
        marginTop: 15,
        color: "#253324"
    },
    exerciseBlock: {
        marginTop: 20,
    },
    exerciseTitle: {
        marginBottom: 5,
        color: "gray",
    },
    conjugatedTitle: {
        marginTop: 10,
        marginBottom: 5, // Espaçamento acima do título de exercício conjugado
    },
    treinoTitle: {
        color: "gray",
        fontSize: 18,
    },
    treinoLabel: {
        marginTop: 10,
    },
    inputMarginBottom: {
        marginBottom: 5,
    },
    elementSpacing: {
        marginBottom: 8,
    },
};
