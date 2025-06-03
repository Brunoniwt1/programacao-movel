import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TextInput
} from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { DADOS_ORIGINAIS_LOCAIS } from '../data/locais';

const ListaLocaisScreen = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [locaisFiltrados, setLocaisFiltrados] = useState(DADOS_ORIGINAIS_LOCAIS);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    if (termoBusca === '') {
      setLocaisFiltrados(DADOS_ORIGINAIS_LOCAIS);
    } else {
      const filtrados = DADOS_ORIGINAIS_LOCAIS.filter(local =>
        local.titulo.toLowerCase().includes(termoBusca.toLowerCase())
      );
      setLocaisFiltrados(filtrados);
    }
  }, [termoBusca]);

  const handleItemPress = (item) => {
    const textoParaFalar = `${item.titulo}. ${item.descricao}`;
    const opcoesDeFala = { language: 'pt-BR' };
    Speech.speak(textoParaFalar, opcoesDeFala);
    Alert.alert(item.titulo, item.descricao);
  };

  const renderItemLista = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.itemConteudo} onPress={() => handleItemPress(item)}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemDescricao}>{item.descricao}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.iconeFavorito}>
        <Ionicons
          name={isFavorite(item.id) ? "star" : "star-outline"}
          size={28}
          color={isFavorite(item.id) ? "gold" : "gray"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalhoLista}>Locais de Interesse em Bagé</Text>
      <TextInput
        style={styles.campoBusca}
        placeholder="Buscar local pelo título..."
        value={termoBusca}
        onChangeText={setTermoBusca}
        placeholderTextColor="#888"
      />
      {locaisFiltrados.length > 0 ? (
        <FlatList
          data={locaisFiltrados}
          renderItem={renderItemLista}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.semResultados}>Nenhum local encontrado com "{termoBusca}"</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 15, paddingTop: 20 },
  cabecalhoLista: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#333' },
  campoBusca: { height: 45, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, marginBottom: 20, fontSize: 16, backgroundColor: '#fff' },
  itemContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 10,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemConteudo: {
    flex: 1,
    marginRight: 10,
  },
  itemTitulo: { fontSize: 18, fontWeight: 'bold', color: '#444' },
  itemDescricao: { fontSize: 14, color: '#666', marginTop: 5 },
  iconeFavorito: {
    padding: 5,
  },
  semResultados: { textAlign: 'center', marginTop: 30, fontSize: 16, color: '#777' },
});

export default ListaLocaisScreen;