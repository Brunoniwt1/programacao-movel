import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapaScreen from '../screens/MapaScreen';
import ListaLocaisScreen from '../screens/ListaLocaisScreen';
import FavoritosScreen from '../screens/FavoritosScreen';
import MercadoriasScreen from '../screens/MercadoriasScreen';
import SobreScreen from '../screens/SobreScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerTitleAlign: 'center',
        }}
      >
        <Tab.Screen name="Mapa" component={MapaScreen} />
        <Tab.Screen name="Locais" component={ListaLocaisScreen} options={{ title: 'Lista de Locais' }} />
        <Tab.Screen name="Favoritos" component={FavoritosScreen} />
        <Tab.Screen name="Mercadorias" component={MercadoriasScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;