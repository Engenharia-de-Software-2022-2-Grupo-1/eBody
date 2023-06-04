import { Center } from "native-base";
import React, { Component, useState } from "react";
import { Text, View, TouchableOpacity, Image, Button, StyleSheet, FlatList } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function WorkoutRotline(props) {

  let state = props.route.params;

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.container, { paddingLeft: 20, paddingRight: 20 }]}>
      <View style={[styles.containerExercicios, { borderWidth: 1, borderColor: '#455d3b' }]}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>{item.nome}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
          {item.series && (
            <View style={{ alignItems: 'center' }}>
              <FontAwesome5 name="dumbbell" size={14} color="white" style={{ marginBottom: 5 }} />
              <Text style={{ color: 'white', fontSize: 10 }}>{item.series}</Text>
              <Text style={{ color: 'white', fontSize: 10 }}>Séries</Text>
            </View>
          )}
          <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="redo-alt" size={14} color="white" style={{ marginBottom: 5 }} />
            <Text style={{ color: 'white', fontSize: 10 }}>{item.repeticoes}</Text>
            <Text style={{ color: 'white', fontSize: 10 }}>Repetições</Text>
          </View>
        </View>
      </View>
      {item.treino && item.treino.length > 0 && (
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          {renderTreino(item.treino)}
        </View>
      )}
    </View>
    
    );
  };

  const renderTreino = (treino) => {
    return treino.map((treinoItem, index) => (
      <View style={[styles.containerExerciciosFilho, { borderWidth: 1, borderColor: '#455d3b', }]}>
        <View style={{ justifyContent: 'space-evenly', }}>
          <View style={{ alignSelf: 'center', }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19 }}>  {treinoItem.nome}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

            {treinoItem.series && (
              <View>
                <FontAwesome5 name="dumbbell" size={14} color="white" style={{ marginBottom: 5 }} />
                <Text style={{ color: 'white' }}>{treinoItem.series}</Text>
                <Text style={{ color: 'white' }}>Séries</Text>
              </View>
            )}
            <View>
              <FontAwesome5 name="redo-alt" size={14} color="white" style={{ marginBottom: 5 }} />
              <Text style={{ color: 'white' }}>{treinoItem.repeticoes}</Text>
              <Text style={{ color: 'white' }}>Repetições</Text>
            </View>
          </View>
        </View>


        {treinoItem.treino && treinoItem.treino.length > 0 && (
          <View >
            {renderTreino(treinoItem.treino)}
          </View>
        )}
      </View>
    ));
  };

  return (
    <View>
      <FlatList
        data={state.Exercicios}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coluna: {
    flexDirection: "row"
  },
  containerExercicios: {
    backgroundColor: '#9bc063',
    height: 80,
    marginBottom: 0,
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 10
  },
  containerExerciciosFilho: {
    backgroundColor: '#70964B',
    height: 80,
    margin: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },
  textTreino: {
    color: 'white'
  }
});
