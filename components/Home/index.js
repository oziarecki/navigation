import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha uma opção</Text>

      <TouchableOpacity style={styles.botao}
           onPress={()=>navigation.navigate('Sobre')}
      >
          <Text style={styles.textoBotao}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
      fontSize:30,
      textAlign:'center',
      marginTop:20
  },
  botao:{
      backgroundColor: '#ccc',
      marginTop:20,
      width:Dimensions.get('window').width-20,
      marginLeft:10,
      marginRight:10,

  },
  textoBotao:{
  fontSize:25,
  textAlign: 'center'
  }
});
