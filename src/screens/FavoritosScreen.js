import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { DADOS_ORIGINAIS_LOCAIS } from '../data/locais'; 
import { Ionicons } from '@expo/vector-icons';

const FavoritosScreen = () => {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const locaisFavoritados = DADOS_ORIGINAIS_LOCAIS.filter(local =>
    isFavorite(local.id)
  );

  const renderItemFavorito = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemConteudo}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <Text style={styles.itemDescricao}>{item.descricao}</Text>
      </View>
       <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.iconeFavorito}>
        <Ionicons
          name={"trash-bin"} 
          size={26}
          color={"#e74c3c"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalhoLista}>Meus Locais Favoritos</Text>
      {locaisFavoritados.length > 0 ? (
        <FlatList
          data={locaisFavoritados}
          renderItem={renderItemFavorito}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.semFavoritos}>
          Você ainda não marcou nenhum local como favorito.
          Vá para a lista de locais e toque na estrela! ⭐
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 15, paddingTop: 20 },
  cabecalhoLista: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  itemContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 10,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemConteudo: { flex: 1, marginRight: 10 },
  itemTitulo: { fontSize: 18, fontWeight: 'bold', color: '#444' },
  itemDescricao: { fontSize: 14, color: '#666', marginTop: 5 },
  iconeFavorito: { padding: 5 },
  semFavoritos: { textAlign: 'center', marginTop: 40, fontSize: 16, color: '#777', paddingHorizontal: 20, lineHeight: 24 },
});

export default FavoritosScreen; 