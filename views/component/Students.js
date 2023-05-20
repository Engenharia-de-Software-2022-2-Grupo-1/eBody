import React from "react";
import { Text, View, Button } from "react-native";
import { AddIcon } from "native-base"
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

    return(
        <View  style={[profileCss.container]}>
            <Text style={profileCss.title}>LISTAGEM DE ALUNOS</Text>
            
            {students.map((student)=>{
                return <Text onPress={() => props.navigation.navigate('Profile',
                student)}>{student.name}</Text>
            })}

            <View><Text></Text></View>

            <AddIcon style={{backgroundColor: '#2196f3', borderRadius: 100, botom: 0}} size="10" color="white" onPress={() => props.navigation.navigate('NewProfile',
            )} />
        </View>
    );
}