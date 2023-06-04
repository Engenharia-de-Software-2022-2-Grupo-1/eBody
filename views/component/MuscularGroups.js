import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Button, ScrollView } from "react-native";
import { css } from "../../assets/css/Css";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from "native-base";

export default function MusuclarGroups(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  var getTreinos = async () => {
    try {
      const response = await fetch(`http://192.168.0.12:3000/aluno/${props.route.params.id}/treino`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTreinos();
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Training', props.route.params)}>
        <View style={[css.card, { flexDirection: 'row', alignItems: 'center' }]}>
          <FontAwesome5 name="plus" size={24} color="white" style={{ marginRight: 40 }} />
          <Text style={[css.cardTitle, { alignSelf: 'center' }]}>ADICIONAR NOVO TREINO </Text>
        </View>
      </TouchableOpacity>

      <Text style={{ color: 'gray' }}> TREINOS CADASTRADOS </Text>

      <FlatList
        style={{ width: "100%", backgroundColor: '#EAEAEA', borderBottomWidth: 1, borderColor: '#888686' }}
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('WorkoutRotline', item)}>
            <View style={[css.card_add, { flexDirection: 'row', alignItems: 'center' }]}>
            <FontAwesome5 name="dumbbell" size={20} color="white" style={{ marginRight: 10 }} />
              <Text style={[{ padding: 10, textAlign: "center", color: 'white', fontSize: 18 }]}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
