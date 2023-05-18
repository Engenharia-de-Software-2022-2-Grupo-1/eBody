import React, {Component, useState} from "react";
import { Text, View, TouchableOpacity, Image, Button, StyleSheet, FlatList } from "react-native";

export default function WorkoutRotline (props) {

        let state= {
            treino: [
                {
                    nome: "supino reto",
                    repeticoes: 15,
                    series: 3,
                    treino: [{
                        nome: "flexao",
                        repeticoes: "falha",
                        treino: [{
                            nome: "cadeira romana",
                            repeticoes: "falha"
                        }]
                    }
                    ]
                },
                {
                    nome: "supino inclinado",
                    repeticoes: 15,
                    series: 3,
                    treino: [{
                        nome: "teste",
                        repeticoes: "falha"
                    }
                    ]
                },
                {
                    nome: "crucifixo",
                    repeticoes: 15,
                    series: 4,
                },

                
        ]};

        const renderItem = ({ item }) => {
            return (
              <View style={styles.container}>
                <View style={styles.containerExercicios}>
                    <Text style={{ fontWeight: 'bold' }}>Nome: {item.nome}</Text>
                    <Text>Repetições: {item.repeticoes}</Text>
                    {item.series &&(
                    <Text>Series: {item.series}</Text>
                    )}
                </View>
                {item.treino && item.treino.length > 0 && (
                  <View style={{ paddingLeft: 20 }}>
                    {renderTreino(item.treino)}
                  </View>
                )}
              </View>
            );
          };
        
          const renderTreino = (treino) => {
            return treino.map((treinoItem, index) => (
              <View key={index} style={styles.container}>
                <View style={styles.containerExerciciosFilho}>
                    <Text>Nome: {treinoItem.nome}</Text>
                    <Text>Repetições: {treinoItem.repeticoes}</Text>
                    {treinoItem.series &&(
                        <Text>Series: {treinoItem.series}</Text>
                    )}
                </View>
                
                {treinoItem.treino && treinoItem.treino.length > 0 && (
                  <View >
                    {renderTreino(treinoItem.treino)}
                  </View>
                )}
              </View>
            ));
          };
    
        return(
                <FlatList 
                    data={state.treino}
                    renderItem={renderItem}
                />

        );
}

const styles = StyleSheet.create({
    container:{
        flex: 1 
    },
    containerExercicios:{
        backgroundColor: '#70964B',
        heigh: 80,
        margin: 5,
        borderRadius: 10,
        paddingLeft: 10
    },
    containerExerciciosFilho:{
        backgroundColor: '#70964B',
        heigh: 80,
        margin: 5,
        borderRadius: 10,
        
        paddingLeft: 10
    },
    textTreino:{
        color:'white'
    }
});