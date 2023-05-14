import React from "react";
import { Text, View } from "react-native";
import { css } from "../../assets/css/Css";
import { Input, Button } from "native-base";

export default function NewEvaluation(props) {
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