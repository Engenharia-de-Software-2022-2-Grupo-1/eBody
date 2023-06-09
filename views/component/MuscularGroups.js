import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { css } from "../../assets/css/Css";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MusuclarGroups(props) {

    return(
        <View>
        
      

     

     
    

  
      
      <TouchableOpacity  onPress={() => props.navigation.navigate('Training')}>
        <View style={[css.card, { flexDirection: 'row', alignItems: 'center' }]}>
          <FontAwesome5 name="plus" size={24} color="white" style={{ marginRight: 40 }}/>
          <Text style={[css.cardTitle, { alignSelf: 'center' }]}>ADICIONAR NOVO TREINO </Text>
        </View>
      </TouchableOpacity>

      <Text style={{ color: 'gray' }}> TREINOS CADASTRADOS </Text>

      <TouchableOpacity  onPress={() => props.navigation.navigate('WorkoutRotline')}>
        <View style={[css.card_add, { flexDirection: 'row', alignItems: 'center' }]}>
          <FontAwesome5 name="dumbbell" size={24} color="white" style={{ marginRight: 40 }}/>
          <Text style={[css.cardTitle, { alignSelf: 'center' }]}>PEITO/ABDOMEN/OMBRO/TRICEPS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Aniversariantes')}>
        <View style={[css.card_add, { flexDirection: 'row', alignItems: 'center' }]}>
          <FontAwesome5 name="dumbbell"  size={24} color="white" style={{ marginRight: 40 }}/>
          <Text style={[css.cardTitle, { alignSelf: 'center' }]}>AERÓBICO</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Aniversariantes')}>
        <View style={[css.card_add, { flexDirection: 'row', alignItems: 'center' }]}>
          <FontAwesome5 name="dumbbell" size={24} color="white" style={{ marginRight: 40 }}/>
          <Text style={[css.cardTitle, { alignSelf: 'center' }]}>GLUTEO/PERNAS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Aniversariantes')}>
        <View style={[css.card_add, { flexDirection: 'row', alignItems: 'center' }]}>
          <FontAwesome5 name="dumbbell" size={24} color="white" style={{ marginRight: 40 }}/>
          <Text style={[css.cardTitle, { alignSelf: 'center' }]}> Biceps/Costas/Ombro </Text>
        </View>
      </TouchableOpacity>


        </View>
    );
}