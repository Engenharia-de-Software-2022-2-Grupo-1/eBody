import React, { useState } from "react";
import { Text, View,ScrollView } from "react-native";
import { css } from "../../assets/css/Css";
import { Input, Button } from "native-base";
import { Alert } from "react-native";
export default function NewEvaluation(props) {

    const [refresh, setRefresh] = useState(true);
    const [peso, setPeso] = useState();
    const [peito, setPeito] = useState();
    const [ombro, setOmbro] = useState();
    const [cintura, setCintura] = useState();
    const [quadril, setQuadril] = useState();
    const [bracoDireito, setBracoDireito] = useState();
    const [bracoEsquerdo, setBracoEsquerdo] = useState();
    const [coxaDireita, setCoxaDireita] = useState();
    const [coxaEsquerda, setCoxaEsquerda] = useState();
    const [panturrilhaDireita, setPanturrilhaDireita] = useState();
    const [panturrilhaEsquerda, setPanturrilhaEsquerda] = useState();

    const handleSubmit = () => {
        if (
          peso.trim() === '' ||
          peito.trim() === '' ||
          ombro.trim() === '' ||
          cintura.trim() === '' ||
          quadril.trim() === '' ||
          bracoEsquerdo.trim() === '' ||
          bracoDireito.trim() === '' ||
          coxaEsquerda.trim() === '' ||
          coxaDireita.trim() === '' ||
          panturrilhaDireita.trim() === ''||
          panturrilhaEsquerda.trim() === ''
        ) {
          Alert.alert('Erro', 'Por favor, preencha todos os campos');
        } else {
          if (
            peso !== props.route.params.peso ||
            peito !== props.route.params.peito ||
            ombro !== props.route.params.ombro ||
            cintura !== props.route.params.cintura ||
            quadril !== props.route.params.quadril ||
            bracoEsquerdo !== props.route.params.bracoEsquerdo ||
            bracoDireito !== props.route.params.bracoDireito ||
            coxaEsquerda !== props.route.params.coxaEsquerda ||
            coxaDireita !== props.route.params.coxaDireita ||
            panturrilhaDireita !== props.route.params.panturrilhaDireita ||
            panturrilhaEsquerda !== props.route.params.panturrilhaEsquerda
          ) {
            cadastrarMedida();
          } else {
            Alert.alert('Aviso', 'Nenhum campo foi alterado');
          }
        }
      };  

    async function cadastrarMedida() {
        
        let response=await fetch(`http://192.168.0.4:3000/aluno/${props.route.params.id}/medidas`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: new Date(), 
                peso: peso, 
                peito: peito, 
                ombro: ombro, 
                cintura: cintura, 
                quadril: quadril, 
                bracoDireito: bracoDireito, 
                bracoEsquerdo: bracoEsquerdo,
                coxaDireita: coxaDireita, 
                coxaEsquerda: coxaEsquerda, 
                panturrilhaDireita: panturrilhaDireita, 
                panturrilhaEsquerda: panturrilhaEsquerda
            }),
        })
        if(response.status === 201) {
            Alert.alert('Cadastrado', 'Medidas do aluno cadastrado com sucesso.');
        }
        else {
            Alert.alert('Erro', 'Ocorreu um erro durante a criação do aluno, por favor revise os dados.');
        }
    
    };


    return (
        <ScrollView  >
        <View style={{ paddingHorizontal: 20, paddingBottom: 20, alignItems: "center" }}>
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ color: "#888686", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
                Informações físicas
            </Text>

            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 10 }} />

            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Braço direito (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setBracoDireito}
                defaultValue={props.route.params.bracoDireito}
            />
              <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />



            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Braço esquerdo (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setBracoEsquerdo}
                defaultValue={props.route.params.bracoEsquerdo}
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
         
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Quadril (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setQuadril}
                defaultValue={props.route.params.quadril}
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 20 }]}
                placeholder="Cintura (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setCintura}
                defaultValue={props.route.params.cintura}
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Peito (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setPeito}
                defaultValue={props.route.params.peito}
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Coxa Direita (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setCoxaDireita}
                defaultValue={props.route.params.coxaDireita}
            />
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Coxa Esquerda(cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setCoxaEsquerda}
                defaultValue={props.route.params.coxaEsquerda}
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Panturrilha Direito(cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setPanturrilhaDireita}
                defaultValue={props.route.params.panturrilhaDireita}
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Panturrilha Esquerda(cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setPanturrilhaEsquerda}
                defaultValue={props.route.params.panturrilhaEsquerda}
            />
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Ombro (cm)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setOmbro}
                defaultValue={props.route.params.ombro}
            />
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Peso (kg)"
                maxLength={6}
                keyboardType="numeric"
                onChangeText={setPeso}
                defaultValue={props.route.params.peso}
            />
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />

            <Button onPress={handleSubmit}
                style={{
                    borderRadius: 10,
                    height: 40,
                    justifyContent: "center",
                    backgroundColor: "#455D3B",
                }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>Salvar</Text>
            </Button>
            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 30 }} />

        </View>
        </ScrollView>
    );
}