import { StyleSheet } from "react-native";

const newProfileScreenCss = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.3, // Adicione a propriedade borderWidth para adicionar a borda
        borderColor: '#808080', // Cor da borda
        padding: 5, // Espaçamento interno
      },
      icon: {
        marginRight: 10, // Espaçamento entre o ícone e a entrada
        fontSize: 10, // Tamanho do ícone
        color:'#455d3b',
      },
      text: {
        flex: 1, // Para ocupar todo o espaço disponível
      },
    title: {
        color: '#888686',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    data: {
        color: '#1E1D1D'
    }
});

export {newProfileScreenCss};