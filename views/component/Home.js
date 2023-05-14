import React from "react";
import { Text, View, TouchableOpacity, Image, Button } from "react-native";
import { css } from "../../assets/css/Css";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Home(props) {

    return (
        <View>
              <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ color: "#888686", fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
                BEM VINDO DE VOLTA!!
            </Text>

            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 10 }} />
          
           
            <TouchableOpacity onPress={() => props.navigation.navigate('Aniversariantes')}>
  <View style={[css.card, { flexDirection: 'row', alignItems: 'center' }]}>
    <FontAwesome5 name="birthday-cake" size={24} color="white" style={{ marginRight: 40 }}/>
    <Text style={[css.cardTitle, { alignSelf: 'center' }]}>ANIVERSARIANTES</Text>
  </View>
</TouchableOpacity>






<TouchableOpacity onPress={() => props.navigation.navigate('Pendentes')}>
  <View style={[css.card, { flexDirection: 'row', alignItems: 'center' }]}>
    <FontAwesome5 name="piggy-bank" size={22} color="white" style={{ marginRight: 20 }}/>
    <Text style={css.cardTitle}>PENDENTES DE PAGAMENTO</Text>
  </View>
</TouchableOpacity>



        </View>
    );
}
