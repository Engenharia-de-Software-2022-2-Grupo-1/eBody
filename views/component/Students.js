import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AddIcon, Input } from "native-base"
import { profileCss } from '../../assets/css/ProfileCss'

export default function Students(props) {
    const students = [{
        id: 13,
        name: 'Mia',
        phoneNumber:83999999999,
        city: 'Campina Grande',
        neighborhood: 'Prata',
        street: 'Rua dos bobos',
        birthday: '01/01/20000',
        emergency_contact_1:838181818,
        emergency_name_1:'cipriano',
        emergency_relaction_1:'namorado',
        emergency_contact_2:837777777,
        emergency_name_2:'Tharsila',
        emergency_relaction_2:'irmã'
    },
    {
        id: 22,
        name: 'Cipriano',
        phoneNumber:838181818,
        city: 'Campina Grande',
        neighborhood: 'Catolé',
        street: 'Rua das flores',
        birthday: '02/02/1999',
        emergency_contact_1:83999999999,
        emergency_name_1:'Mia',
        emergency_relaction_1:'namorada',
        emergency_contact_2:83989899898,
        emergency_name_2:'Rossana',
        emergency_relaction_2:'irmã'
    }]

    searchByName = (name) => {
        console.log(name)
    }

    return(
        <ScrollView>
            <View  style={[profileCss.container]}>
                <View style={{marginTop: 10}}>
                    <Input style={{textAlign:"center"}} variant="rounded" mx="3" w="80%" onChangeText={(name) => searchByName(name)} placeholder="Pesquisar Aluno"></Input>
                </View>

                <Text style={profileCss.title}>LISTAGEM DE ALUNOS</Text>

                {students.map((student)=>{
                    return <Text style={{padding:10}} onPress={() => props.navigation.navigate('Profile',
                    student)}>{student.name}</Text>
                })}
            </View>

            <TouchableOpacity style={{position:'absolute', bottom: 0, right: 0}}  onPress={() => props.navigation.navigate('NewProfile',)}>
                <View style={{backgroundColor: '#2196f3', borderRadius: 100, width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <AddIcon size="9" color="white"/>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}