import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Select } from "native-base";
import { Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
export default function MeasurementScreen(props) {

    const screenWidth = Dimensions.get("window").width;
    const [medida, setMedida] = useState(null);

    const medidas = {
        peito: [
                {id: 1,data: new Date(2010, 10, 10),centimetros: 1},
                {id: 2,data: new Date(2010, 10, 11),centimetros: 2},
                {id: 3,data: new Date(2010, 10, 12),centimetros: 3},
                {id: 4,data: new Date(2011, 10, 12),centimetros: 4},
                {id: 5,data: new Date(2011, 10, 12),centimetros: 5},
                {id: 6,data: new Date(2011, 10, 13),centimetros: 6},
                {id: 7,data: new Date(2011, 10, 14),centimetros: 7},
                {id: 8,data: new Date(2011, 10, 15),centimetros: 8},
                {id: 9,data: new Date(2011, 10, 16),centimetros: 9},
                {id: 10,data: new Date(2011, 10, 17),centimetros: 10},
                ],
        coxa: [
                {id: 1,data: new Date(2010, 10, 10),centimetros: 1},
                {id: 2,data: new Date(2010, 10, 11),centimetros: 2},
                {id: 3,data: new Date(2010, 10, 12),centimetros: 3},
                {id: 4,data: new Date(2011, 10, 12),centimetros: 4},
                {id: 4,data: new Date(2011, 10, 12),centimetros: 2},
                {id: 5,data: new Date(2011, 10, 13),centimetros: 3},
                {id: 6,data: new Date(2011, 10, 14),centimetros: 5},
                {id: 7,data: new Date(2011, 10, 15),centimetros: 5},
                {id: 8,data: new Date(2011, 10, 16),centimetros: 6},
                {id: 9,data: new Date(2011, 10, 17),centimetros: 8},
        ]
    }
    
    const formatadorData = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    });

    const data = (lista) => {
      const item = {
        labels: lista.map(item => formatadorData.format(item.data)),
        datasets: [
          {
            data: lista.map(item => item.centimetros),
          }
        ]
      }
      return item;
      }
      

      const chartConfig = {
        backgroundGradientFrom: "#fffff",
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


    return(
      <ScrollView>
        {render(medidas.peito)}
      </ScrollView>
    );
}