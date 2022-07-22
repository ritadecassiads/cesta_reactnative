import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";

export default function Item({ item: { nome, imagem } }) {
    return <View style={estilos.item}>
                <Image source={imagem} style={estilos.imagem}/>
                <Texto style={estilos.nome}>{ nome }</Texto>
             </View>
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row", // deixa a img do lado do texto
        borderBottomWidth: "1", // largura da borda
        borderBottomColor: "#ECECEC",
        paddingVertical: 16, // em cima e em baixo
        marginHorizontal: 16, // nas laterais
        alignItems: "center",
        
    },
    
    imagem: {
        width: 46,
        height: 46
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})