import React, { useState } from "react";
import { Text, View } from "react-native";
import { css } from "../../assets/css/Css";
import { Input, Button } from "native-base";

export default function NewEvaluation(props) {
    
    const [peso, setPeso] = useState();
    const [peito, setPeito] = useState();
    const [ombro, setOmbro] = useState();
    const [cintura, setCintura] = useState();
    const [quadril, setQuadril] = useState();
    const [bracoDireito, setBracoDireito] = useState();
    const [bracoEsquerdo, setbracoEsquerdo] = useState();
    const [coxaDireita, setCoxaDireita] = useState();
    const [coxaEsquerda, setCoxaEsquerda] = useState();
    const [panturrilaDireita, setPanturrilhaDireita] = useState();
    const [panturrilaEsquerda, setPanturrilhaEsquerda] = useState();

    async function cadastrarMedida() {
        
        let response=await fetch(`http://192.168.0.8:3000/aluno/${props.route.params.id}/medidas`, {
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
                panturrilhaDireita: panturrilaDireita, 
                panturrilhaEsquerda: panturrilaEsquerda
            }),
        })};


    return (

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
            />
              <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />



            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Braço esquerdo (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
         
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Quadril (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 20 }]}
                placeholder="Braço (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Peito (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Antebraço (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Coxa (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Panturrilha (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Glúteo (cm)"
                maxLength={6}
                keyboardType="numeric"
            />
                 <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 5 }} />
            <Input
                style={[css.login__input, { borderRadius: 10 }]}
                placeholder="Pescoço (cm)"
                maxLength={6}
                keyboardType="numeric"
            />

            <View style={{ borderBottomColor: '#F1F1F1', borderBottomWidth: 1, marginBottom: 30 }} />

            <Button
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
    );
}