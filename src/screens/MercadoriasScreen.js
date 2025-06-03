import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
const DADOS_SERVICOS_TURISMO = [
  {
    id: 'serv1',
    nome: 'Trilha da Cascata Secreta',
    descricaoBreve: 'Caminhada ecológica de 3h, nível moderado, com banho de cachoeira.',
    preco: 'R$ 75,00 por pessoa',
    tipo: 'Aventura',
  },
  {
    id: 'serv2',
    nome: 'Passeio Histórico pela Cidade',
    descricaoBreve: 'Tour guiado pelos principais pontos históricos e arquitetônicos de Bagé.',
    preco: 'R$ 50,00 por pessoa',
    tipo: 'Cultural',
  },
  {
    id: 'serv3',
    nome: 'Ingresso Parque Pampeano',
    descricaoBreve: 'Acesso diário ao parque com observação de fauna e flora nativa.',
    preco: 'R$ 30,00 (inteira)',
    tipo: 'Natureza',
  },
  {
    id: 'serv4',
    nome: 'Cavalgada pelos Campos do Pampa',
    descricaoBreve: 'Experiência autêntica de 2h cavalgando pelas paisagens do Pampa Gaúcho.',
    preco: 'R$ 120,00 por pessoa',
    tipo: 'Rural',
  },
  {
    id: 'serv5',
    nome: 'Degustação em Vinícola Local',
    descricaoBreve: 'Visita guiada e degustação de vinhos e produtos regionais.',
    preco: 'R$ 90,00 por pessoa',
    tipo: 'Gastronomia',
  },
];

const MercadoriasScreen = () => {
  const handleServicoPress = (servico) => {
    Alert.alert(
      `Interesse em: ${servico.nome}`,
      `${servico.descricaoBreve}\nPreço: ${servico.preco}\n\nDetalhes da reserva e compra seriam mostrados aqui ou em uma próxima tela.`
    );
  };

  const renderItemServico = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleServicoPress(item)}
    >
      <View style={styles.itemTextoContainer}>
        <Text style={styles.itemNome}>{item.nome}</Text>
        <Text style={styles.itemTipo}>{item.tipo}</Text>
        <Text style={styles.itemDescricao}>{item.descricaoBreve}</Text>
        <Text style={styles.itemPreco}>{item.preco}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividades e Serviços Turísticos em Bagé</Text>
      <FlatList
        data={DADOS_SERVICOS_TURISMO}
        renderItem={renderItemServico}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listaPadding}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    paddingTop: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  listaPadding: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemTextoContainer: {
    flex: 1,
  },
  itemNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e', 
  },
  itemTipo: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginTop: 2,
    marginBottom: 6,
  },
  itemDescricao: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  itemPreco: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#27ae60', 
    textAlign: 'right',
  },
});

export default MercadoriasScreen;