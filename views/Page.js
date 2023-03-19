import React, {useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { css } from '../assets/css/Css';

export default function Page(props) {
    return(
        <View style={css.textPage}>
            <Text>
                Nome do App é {props.app}.
            </Text>
            <Text>
                O nome do aluno é {props.aluno} e ele treinou {props.treinos} vezes!
            </Text>
        </View>
    );
}