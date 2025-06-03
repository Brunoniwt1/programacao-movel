import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const locaisDeInteresse = [
  {
    id: '1',
    coordenada: { latitude: -31.3305, longitude: -54.1008 },
    titulo: 'Praça da Matriz de São Sebastião',
    descricao: 'Coração histórico da cidade de Bagé.',
  },
  {
    id: '2',
    coordenada: { latitude: -31.3279, longitude: -54.0900 },
    titulo: 'Museu Dom Diogo de Souza',
    descricao: 'Importante acervo histórico e cultural da região.',
  },
  {
    id: '3',
    coordenada: { latitude: -31.3330, longitude: -54.1050 },
    titulo: 'Parque do Gaúcho',
    descricao: 'Espaço para eventos e cultura tradicionalista.',
  },
];

const MapaScreen = () => {
  const regiaoInicial = {
    latitude: -31.3305,
    longitude: -54.1008,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={regiaoInicial}
      >
        {locaisDeInteresse.map(local => (
          <Marker
            key={local.id}
            coordinate={local.coordenada}
            title={local.titulo}
            description={local.descricao}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapaScreen;