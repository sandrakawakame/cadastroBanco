import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
//criar um componente em forma de função



export default function App() {

  const [nome, setNome] = useState('');
  const [inputNome, setInputNome] = useState('');

  const [idade, setIdade] = useState('');
  const [inputIdade, setInputIdade] = useState('');

  const [sexoSelecionado, setSexoSelecionado] = useState(0);
  const [sexo, setSexo] = useState([
    { key: 1, sexo: 'masculino' },
    { key: 2, sexo: 'feminino' },
  ])
  const [inputSexo, setInputSexo] = useState('')

  const [limite, setLimite] = useState(0)

  const [estudante, setEstudante] = useState(false)


  let sexoItem = sexo.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.sexo} />
  })


  function entrar(param) {

    if (inputNome === '') {
      alert('Preencha o campo nome');
      //return é usado para parar o código caso chegue nesse ponto
      return;
    }

    setNome('Nome:' + inputNome)

    if (inputIdade === '') {
      alert('Preencha o campo idade');
      //return é usado para parar o código caso chegue nesse ponto
      return;
    }

    setIdade('Idade: ' + inputIdade)

    alert(
      'Conta aberta com sucesso! \n\n' +
      'Nome: ' + inputNome + '\n' +
      'Idade: ' + inputIdade + '\n' +
      'Sexo: ' + sexo[sexoSelecionado].sexo + '\n' +
      'Limite: ' + limite.toFixed(2) + '\n'+
      'Estudante:' + (estudante ? ' Ativo' : ' Inativo')
    );

  }



  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.botaoTexto}>Banco Programador</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "#e8e8e8", padding: 15 }}>

        <View>
          <Text style={styles.titulo}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu nome'
            //onChangeText={} - cada letra digitada dentro do input chama esta função
            //onChangeText={ (text) - o parametro text pega o valor digitado no input
            //getNome(text)} - o parametro text passa o texto digitado no input para a função
            onChangeText={(text) => setInputNome(text)}
          />
        </View>

        <View>
          <Text style={styles.titulo}>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua idade'
            //onChangeText={} - cada letra digitada dentro do input chama esta função
            //onChangeText={ (text) - o parametro text pega o valor digitado no input
            //getNome(text)} - o parametro text passa o texto digitado no input para a função
            onChangeText={(text) => setInputIdade(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.areaPicker}>
          <Text style={styles.titulo}>Sexo: </Text>
          <Picker
            style={styles.picker}
            selectedValue={sexoSelecionado}
            onValueChange={(itemValue, itemIndex) => setSexoSelecionado(itemValue)}
          >

            {sexoItem}

          </Picker>
        </View>


        <View style={styles.limiteArea}>
          <Text style={styles.titulo}>Limite: </Text>
          <Text style={styles.titulo}>R$ {limite.toFixed(0)} </Text>
        </View>
        <View style={styles.areaSlider}>

          <Slider
            style={{ marginBottom: 20 }}
            minimumValue={0}
            maximumValue={1000}
            value={limite}
            onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
            minimumTrackTintColor='#000'
            maximumTrackTintColor='#000'
            thumbTintColor='#000'
          />

        </View>

        <View style={styles.areaEstudante}>
          <Text style={styles.titulo}>Estudante</Text>
          <Switch
            trackColor='red'
            value={estudante}
            onValueChange={(valorEstudante) => setEstudante(valorEstudante)}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={entrar}>
          <Text style={styles.botaoTexto}>Abrir conta</Text>
        </TouchableOpacity>



      </View>

      <View style={{ height: 65, backgroundColor: "#121212" }}>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    marginTop: 50,
    marginHorizontal: 10,
    flex: 1,

  },
  titulo: {
    fontSize: 13,
    marginTop: 8,
    marginBottom: 3,
    fontWeight: 700
  },
  subtitulo: {
    fontSize: 18,
    color: '#00FF00',
    marginTop: 10,
  },
  texto: {
    fontSize: 13,
    textAlign: 'left',
    fontWeight: 700,
    paddingLeft: 10,
    color: '#ff0000',
  },
  textoAlinhado: {
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderColor: '#fafafa',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  botao: {
    backgroundColor: '#000000',
    height: 45,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  cabecalho: {
    backgroundColor: '#121212',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  areaPicker: {
    borderRadius: 5,

  },
  picker: {
    backgroundColor: '#fff',
    borderRadius: 5,

  },
  limiteArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  areaEstudante: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})