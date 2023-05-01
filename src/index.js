import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Pessoa(props) {
    return (
        <View style={styles.area}>
            <Text style={styles.textoPessoa}> Nome: {props.data.nome} </Text>
            <Text style={styles.textoPessoa}> Cargo: {props.data.cargo}</Text>
            <Text style={styles.textoPessoa}> Salário: R$ {props.data.salario} </Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    area: {
        height: 120,
        backgroundColor: '#121212',
        padding: 15
    },
    textoPessoa: {
        color: '#fff',
        fontSize: 18,
    }
})

export default Pessoa;