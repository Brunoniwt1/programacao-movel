import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Platform,
} from 'react-native';
import * as Speech from 'expo-speech';

const SobreScreen = () => {
  const nomeDoApp = "Meu Guia de Viagem Local";
  const versaoApp = "1.0.0";
  const desenvolvedor = "Bruno Reis";
  const descricaoApp = `
Bem-vindo ao ${nomeDoApp}!
Este aplicativo foi desenvolvido como parte da disciplina de Programação Móvel. 
O objetivo é ser um assistente de viagens, ajudando você a descobrir locais de interesse,
serviços turísticos e informações úteis sobre a região.
Explore o mapa, confira a lista de locais, adicione seus favoritos e descubra atividades!
  `;
  const informacoesAdicionais = `
Versão do Aplicativo: ${versaoApp}
Desenvolvido por: ${desenvolvedor}
  `;

  const textoCompletoParaFalar = `${nomeDoApp}. ${descricaoApp} ${informacoesAdicionais}`;

  const falarDescricao = () => {
    Speech.stop(); 
    Speech.speak(textoCompletoParaFalar, { language: 'pt-BR' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>{nomeDoApp}</Text>
      
      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Sobre o Aplicativo</Text>
        <Text style={styles.paragrafo}>{descricaoApp.trim()}</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.subtitulo}>Informações Adicionais</Text>
        <Text style={styles.paragrafo}>{informacoesAdicionais.trim()}</Text>
      </View>

      <View style={styles.botaoContainer}>
        <Button
          title="Ouvir Descrição Completa"
          onPress={falarDescricao}
          color="tomato"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  secao: {
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  botaoContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SobreScreen;