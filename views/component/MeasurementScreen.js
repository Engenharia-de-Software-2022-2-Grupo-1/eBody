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
                {id: 1,data: new Date(2010, 10, 10),centimetros: 10},
                {id: 2,data: new Date(2010, 10, 11),centimetros: 20},
                {id: 3,data: new Date(2010, 10, 12),centimetros: 30},
                {id: 4,data: new Date(2011, 10, 12),centimetros: 2},
                {id: 4,data: new Date(2011, 10, 12),centimetros: 2},
                {id: 5,data: new Date(2011, 10, 13),centimetros: 3},
                {id: 6,data: new Date(2011, 10, 14),centimetros: 24},
                {id: 7,data: new Date(2011, 10, 15),centimetros: 5},
                {id: 8,data: new Date(2011, 10, 16),centimetros: 6},
                {id: 9,data: new Date(2011, 10, 17),centimetros: 8},
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

    const data = {
        labels: medidas.peito.map(item => formatadorData.format(item.data)),
        datasets: [
          {
            data: medidas.peito.map(item => item.centimetros),
          }
        ],
        legend: ["Medidas"] // optional
      };
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };


    return(
        <ScrollView horizontal={true}>
          <Select minWidth="250" placeholder="Escolha a medida"
                    onValueChange={itemValue => setMedida(itemValue)} style={{marginTop: 10, marginBottom: 10}}>
                        {medidas.map((medidas)=>{
                            return <Select.Item label={medidas} value={medidas} key={medidas}/>
                        })}
          </Select>
          <LineChart
          data={medida}
          width={medida.length * 100}
          height={220}
          chartConfig={chartConfig}
          />
        </ScrollView>
    );
}