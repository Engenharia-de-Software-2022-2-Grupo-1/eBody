import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { css } from "../../assets/css/Css";


export default function Home(props) {

    return (
        <View>
              <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ color: "#888686", fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
                BEM VINDO DE VOLTA!!
            </Text>

            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 10 }} />
          
           

            <TouchableOpacity style={css.card} onPress={() => props.navigation.navigate('Aniversariantes')}>
  <Text style={css.cardTitle}>ANIVERSARIANTES</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => props.navigation.navigate('Pendentes')}>
  <View style={css.card}>          
    <Text style={css.cardTitle}>PENDENTES DE PAGAMENTO</Text>
  </View>
</TouchableOpacity>

        </View>
    );
}
