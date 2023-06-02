import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AddIcon, Input, Accordion, Box, Button} from "native-base";
import { profileCss } from '../../assets/css/ProfileCss';

export default function Training(props) {
    const [exerciseCount, setExerciseCount] = useState(1);

    const handleAddExercise = () => {
        setExerciseCount(exerciseCount + 1);
    };

    const renderExercises = () => {
        const exercises = [];
        for (let i = 1; i <= exerciseCount; i++) {
            exercises.push(
                <View key={i} style={styles.exerciseBlock}>
    <Text style={styles.exerciseTitle}>EXERCÍCIO {i}</Text>
    <Box mb={2}>
        <Input variant="filled" size="sm" placeholder="Nome do exercício" />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de séries"  />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de repetições" />
    </Box>
    <Text style={styles.exerciseTitle}>EXERCÍCIO CONJUGADO 1 - OPCIONAL </Text>
    <Box mb={2}>
        <Input variant="filled" placeholder="Nome do exercício"  />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de séries" />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de repetições" />
    </Box>
    <Text style={styles.exerciseTitle}>EXERCÍCIO CONJUGADO 2 - OPCIONAL</Text>
    <Box mb={2}>
        <Input variant="filled" placeholder="Nome do exercício"  />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de séries" />
    </Box>
    <Box mb={2}>
        <Input variant="filled" placeholder="Quantidade de repetições"/>
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
                <Input variant="filled" placeholder="Nome do treino"  />

                {renderExercises()}

                <Button
  title="Adicionar exercício"
  onPress={handleAddExercise}
  style={{
   
 
    backgroundColor: "#455D3B",
  }}
  colorScheme="light" 
>
  <Text style={{ color: "#FFFFFF" }}> ADICIONAR EXERCÍCIO </Text> 
</Button>

<Button
  title="Salvar treino"
  onPress={() => {}}
  style={{
   
    
   
    backgroundColor: "#9BC063",
  }}
  colorScheme="light"
>
  <Text style={{ color: "#FFFFFF" }}>SALVAR TREINO</Text> 
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
