import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'green',
        padding:20,
    },
    button__home:{
        marginRight: 40
    },
    button__image:{
        width: 50,
        height: 50
    }
});

export {css};