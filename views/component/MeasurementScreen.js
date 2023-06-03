import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Select } from "native-base";
import { Dimensions } from "react-native";
import Picker from '@ouroboros/react-native-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretDown';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function MeasurementScreen(props) {

  const [refresh, setRefresh] = useState(true);

  async function getMedidas() {
    try {
      const response = await fetch(`http://192.168.0.21:3000/aluno/${props.route.params.id}/medidas/${medida}`);
      const json = await response.json();
      setMedidas(json);
    } catch (error) {
      console.error(error);
    } finally {
      //setLoading(false);
    }
  };

    const screenWidth = Dimensions.get("window").width;
    const [medida, setMedida] = useState("peito");
    const [medidas, setMedidas] = useState([]);

    useEffect(() => {
      getMedidas();
    }, []);
    
    formataData = (data) => {
      str = data.split("-");
      return str[2] + "/" + str[1] + "/" + str[0];
  }

    const data = (lista) => {
      const item = {
        labels: lista.map(item => formataData(item.data)),
        datasets: [
          {
            data: lista.map(item => item.centimetros),
          }
        ]
      }
      return item;
      }
      

      const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(37, 51, 36, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    
    const render = (lista) => {
      var sublistas = [];
  
      for (var i = 0; i < lista.length; i += 4) {
        var sublista = lista.slice(i, i + 4);
        sublistas.push(sublista);
      };
      
      return sublistas.map((item) => (
          <View>
            <LineChart
              data={data(item)}
              width={400}
              height={220}
              chartConfig={chartConfig}
            />
            
          </View>
        )
      )
    };

    function PickerDisplay(props) {
      return (
          <View style={
            {backgroundColor: '#9bc063',
            heigh: 500,
            alignItems: 'center',
            marginBottom: 0,
            marginTop: 5,
            borderRadius: 10,
            paddingLeft: 10}}>
              <Text>
                    {props.text}
                  </Text>
              <FontAwesomeIcon icon={faCaretDown} />
          </View>
      );
    }

    function update(teste) {
      setMedida(teste);
      getMedidas();
      render(medidas)
    }

    return(
      <ScrollView>
        <Picker
                component={PickerDisplay}
                onChanged={update}
                options={[
                    {value: 'bracoDireito', text: 'Braço Direito'},
                    {value: 'bracoEsquerdo', text: 'Braço Esquerdo'},
                    {value: 'cintura', text: 'Cintura'},
                    {value: 'coxaDireita', text: 'Coxa Direita'},
                    {value: 'coxaEsquerda', text: 'Coxa Esquerda'},
                    {value: 'ombro', text: 'Ombro'},
                    {value: 'panturrilhaDireita', text: 'Panturrilha Direita'},
                    {value: 'panturrilhaEsquerda', text: 'Panturrilha Esquerda'},
                    {value: 'peito', text: 'Peito'},
                    {value: 'peso', text: 'Peso'},
                    {value: 'quadril', text: 'Quadril'}
                ]}
                value={medida}
            />
        {render(medidas)}
      </ScrollView>
    );
}