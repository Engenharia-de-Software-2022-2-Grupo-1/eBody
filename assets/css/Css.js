import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    card: {
        backgroundColor: '#70964B',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
      card_add: {
        backgroundColor: '#9BC063',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
      cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
      },
      
      cardText: {
        fontSize: 16,
        marginBottom: 10,
      },
});

export {css};