import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Button } from "react-native";
import { AddIcon, Input, Accordion, Box } from "native-base";
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
    <Text style={styles.exerciseTitle}>Exercício {i}</Text>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Nome exercício" style={[styles.input, styles.smallInput]} />
    </Box>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Séries" style={[styles.input, styles.smallInput]} />
    </Box>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Repetições" style={[styles.input, styles.smallInput]} />
    </Box>
    <Text style={styles.conjugatedTitle}>Exercício conjugado 1 - OPCIONAL </Text>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Nome exercício" style={[styles.input, styles.smallInput]} />
    </Box>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Séries" style={[styles.input, styles.smallInput]} />
    </Box>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Repetições" style={[styles.input, styles.smallInput]} />
    </Box>
    <Text style={styles.conjugatedTitle}>Exercício conjugado 2 - OPCIONAL</Text>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Nome exercício" style={[styles.input, styles.smallInput]} />
    </Box>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Séries" style={[styles.input, styles.smallInput]} />
    </Box>
    <Box mb={2}>
        <Input variant="underlined" placeholder="Repetições" style={[styles.input, styles.smallInput]} />
    </Box>
</View>
            );
        }
        return exercises;
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
              
                <Text style={[styles.input, styles.treinoLabel]}>Nome do treino</Text>
                <Input variant="underlined" placeholder="Round" style={[styles.input, styles.largeInput]} />

                {renderExercises()}

                <Button title="Adicionar exercício" onPress={handleAddExercise} />
                <Button title="Salvar treino" onPress={() => {}} style={styles.button} />
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
